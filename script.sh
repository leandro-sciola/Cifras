#!/usr/bin/env bash

read -p "Enter URL: " URL
read -p "Enter the singer's name: " SINGER
read -p "Enter the name of the song: " SONG

_SINGER=`echo "$SINGER" | iconv -t 'ascii//TRANSLIT' | tr '[:upper:]' '[:lower:]'`
_SINGER="${_SINGER// /\-}"
_SONG=`echo "$SONG" | iconv -t 'ascii//TRANSLIT' | tr '[:upper:]' '[:lower:]'`
_SONG="${_SONG// /\-}"

if [ ! -d "$_SINGER" ]; then
  mkdir $_SINGER
fi

./yt-dlp -f 139 -o $_SINGER/$_SONG.m4a $URL

echo '<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="content-type" content="text/html;charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>'$SINGER' - '$SONG'</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/css/bootstrap.min.css">
  </head>
  <body>
<pre columns="2">
</pre>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/js/bootstrap.bundle.min.js"></script>
    <script src="../script.js"></script>
  </body>
</html>' > $_SINGER/$_SONG.html

jo -f data.json -p -d . \
    "$SINGER.$_SINGER/$_SONG=$SONG" -o data.json
