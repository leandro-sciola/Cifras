var player;
function youtube() {
    // https://www.youtube.com/iframe_api
    var scriptUrl = 'https:\/\/www.youtube.com\/s\/player\/e627e516\/www-widgetapi.vflset\/www-widgetapi.js';try{var ttPolicy=window.trustedTypes.createPolicy("youtube-widget-api",{createScriptURL:function(x){return x}});scriptUrl=ttPolicy.createScriptURL(scriptUrl)}catch(e){}var YT;if(!window["YT"])YT={loading:0,loaded:0};var YTConfig;if(!window["YTConfig"])YTConfig={"host":"https://www.youtube.com"};
if(!YT.loading){YT.loading=1;(function(){var l=[];YT.ready=function(f){if(YT.loaded)f();else l.push(f)};window.onYTReady=function(){YT.loaded=1;var i=0;for(;i<l.length;i++)try{l[i]()}catch(e){}};YT.setConfig=function(c){var k;for(k in c)if(c.hasOwnProperty(k))YTConfig[k]=c[k]};var a=document.createElement("script");a.type="text/javascript";a.id="www-widgetapi-script";a.src=scriptUrl;a.async=true;var c=document.currentScript;if(c){var n=c.nonce||c.getAttribute("nonce");if(n)a.setAttribute("nonce",
n)}var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})()};
}
function onYouTubeIframeAPIReady() {
    var ctrlq           = document.getElementById("youtube-audio");
    ctrlq.innerHTML     = '<img id="youtube-icon" src="" width="36px" height="36px" /><div id="youtube-player"></div>';
    ctrlq.style.cssText = 'width:36px;cursor:pointer;cursor:hand;display:none;margin-left:10px;';
    ctrlq.onclick       = toggleAudio;
    player = new YT.Player("youtube-player", {
      height: "0",
      width: "0",
      videoId: ctrlq.dataset.video.split("https://www.youtube.com/watch?v=")[1],
      playerVars: {
        autoplay: ctrlq.dataset.autoplay,
        loop: ctrlq.dataset.loop,
      },
      events: {
        "onReady": onPlayerReady,
        "onStateChange": onPlayerStateChange 
      }
    });
}
function togglePlayButton(play) {
    document.getElementById("youtube-icon").src = play ? "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjE2IgogICBoZWlnaHQ9IjE2IgogICBmaWxsPSJjdXJyZW50Q29sb3IiCiAgIGNsYXNzPSJiaSBiaS1zdG9wLWNpcmNsZS1maWxsIgogICB2aWV3Qm94PSIwIDAgMTYgMTYiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzIzOSIKICAgc29kaXBvZGk6ZG9jbmFtZT0ic3RvcC5zdmciCiAgIGlua3NjYXBlOnZlcnNpb249IjEuMi4yIChiMGE4NDg2NTQxLCAyMDIyLTEyLTAxKSIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMjQzIiAvPgogIDxzb2RpcG9kaTpuYW1lZHZpZXcKICAgICBpZD0ibmFtZWR2aWV3MjQxIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICAgIGlua3NjYXBlOmRlc2tjb2xvcj0iI2QxZDFkMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iNTMuMTI1IgogICAgIGlua3NjYXBlOmN4PSI4IgogICAgIGlua3NjYXBlOmN5PSI4IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDI5IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIyNyIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzIzOSIgLz4KICA8cGF0aAogICAgIGQ9Ik0xNiA4QTggOCAwIDEgMSAwIDhhOCA4IDAgMCAxIDE2IDBNNi41IDVBMS41IDEuNSAwIDAgMCA1IDYuNXYzQTEuNSAxLjUgMCAwIDAgNi41IDExaDNBMS41IDEuNSAwIDAgMCAxMSA5LjV2LTNBMS41IDEuNSAwIDAgMCA5LjUgNXoiCiAgICAgaWQ9InBhdGgyMzciCiAgICAgc3R5bGU9ImZpbGw6I2ZmMDAwMCIgLz4KPC9zdmc+Cg==" : "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgd2lkdGg9IjE2IgogICBoZWlnaHQ9IjE2IgogICBmaWxsPSJjdXJyZW50Q29sb3IiCiAgIGNsYXNzPSJiaSBiaS1wbGF5LWNpcmNsZS1maWxsIgogICB2aWV3Qm94PSIwIDAgMTYgMTYiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzQiCiAgIHNvZGlwb2RpOmRvY25hbWU9InBsYXkuc3ZnIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjIuMiAoYjBhODQ4NjU0MSwgMjAyMi0xMi0wMSkiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczgiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXc2IgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6c2hvd3BhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlY2hlY2tlcmJvYXJkPSIwIgogICAgIGlua3NjYXBlOmRlc2tjb2xvcj0iI2QxZDFkMSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iNTMuMTI1IgogICAgIGlua3NjYXBlOmN4PSI4IgogICAgIGlua3NjYXBlOmN5PSI4IgogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTkyMCIKICAgICBpbmtzY2FwZTp3aW5kb3ctaGVpZ2h0PSIxMDI5IgogICAgIGlua3NjYXBlOndpbmRvdy14PSIwIgogICAgIGlua3NjYXBlOndpbmRvdy15PSIyNyIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzQiIC8+CiAgPHBhdGgKICAgICBkPSJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwTTYuNzkgNS4wOTNBLjUuNSAwIDAgMCA2IDUuNXY1YS41LjUgMCAwIDAgLjc5LjQwN2wzLjUtMi41YS41LjUgMCAwIDAgMC0uODE0eiIKICAgICBpZD0icGF0aDIiCiAgICAgc3R5bGU9ImZpbGw6I2ZmMDAwMCIgLz4KPC9zdmc+Cg==";
}
function toggleAudio() {
    if ( player.getPlayerState() == 1 || player.getPlayerState() == 3 ) {
        player.pauseVideo();
        togglePlayButton(false);
    } else {
        player.playVideo();
        togglePlayButton(true);
    }
}
function onPlayerReady(event) {
    player.setPlaybackQuality("small");
    document.getElementById("youtube-audio").style.display = "block";
    togglePlayButton(player.getPlayerState() !== 5);
}
function onPlayerStateChange(event) {
    if (event.data === 0) {
        togglePlayButton(false); 
    }
}
document.addEventListener("DOMContentLoaded", function (e) {
    const pre     = this.querySelector("pre");
    const div     = this.createElement("div");
    div.innerHTML = this.title + '<div data-video="' +
        this.querySelector('meta[name="youtube"]').content +
        '" data-autoplay="0" data-loop="1" id="youtube-audio"></div>';
        div.setAttribute("class", "d-flex align-items-center justify-content-" +
        "center text-center text-light bg-dark fs-5 p-4");
    this.body.prepend(div);
    pre.setAttribute("class", "fs-5 m-5");
    pre.style.columnCount = this.querySelector('meta[name="columns"]').content;
    pre.style.columnGap   = "10px";
    pre.style.whiteSpace  = "pre-wrap";
    Array.from(pre.querySelectorAll("b")).forEach(
        e => e.setAttribute("class", "text-danger")
    );
    youtube();
});
