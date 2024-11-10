document.addEventListener("DOMContentLoaded", function (e) {
    const pre = this.querySelector("pre");
    const div = this.createElement("div");
    const src = "https://github.com/leandro-sciola/Cifras/raw/refs/heads/main" +
    window.location.pathname.split("Cifras").pop().split("html")[0] + "m4a";

    div.innerHTML = '<a class="link-light me-3" href="../index.html">'         +
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="cur' +
    'rentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16"><path d="M6' +
    '.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5' +
    '.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5' +
    '-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0' +
    ' 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/></svg></a>'             +
    this.title + '<audio class="ms-4" controls="controls" src="' + src +
    '" type="audio/mpeg"></audio>';

    div.setAttribute("class", "d-flex align-items-center justify-content-" +
    "center text-center text-light bg-black shadow fs-5 p-4");

    this.body.prepend(div);
    pre.setAttribute("class", "fs-6 m-5");
    pre.style.columnCount = pre.getAttribute("columns");
    pre.style.columnGap   = "30px";
    pre.style.whiteSpace  = "pre-wrap";
    Array.from(pre.querySelectorAll("b")).forEach(
        e => e.setAttribute("class", "text-danger")
    );
});
