document.addEventListener("DOMContentLoaded", function (e) {
    const pre = this.querySelector("pre");
    const div = this.createElement("div");
    const src = "https://github.com/leandro-sciola/cifras/raw/refs/heads/main" +
    window.location.pathname.split("cifras").pop().split("html")[0] + "m4a";

    div.innerHTML = this.title + '<audio class="ms-4" controls="controls" ' +
    'src="' + src + '" type="audio/mpeg"></audio>';

    div.setAttribute("class", "d-flex align-items-center justify-content-" +
    "center text-center text-light bg-black shadow fs-5 p-4");

    this.body.prepend(div);
    pre.setAttribute("class", "fs-5 m-5");
    pre.style.columnCount = pre.getAttribute("columns");
    pre.style.columnGap   = "30px";
    pre.style.whiteSpace  = "pre-wrap";
    Array.from(pre.querySelectorAll("b")).forEach(
        e => e.setAttribute("class", "text-danger")
    );
});
