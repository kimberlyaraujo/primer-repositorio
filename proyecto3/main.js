window.addEventListener("load", () => {

    let number = document.querySelector(".load_loader");
    let btn = document.querySelector(".load_btn");
    let complete = document.querySelector(".load_complete");
    let background = document.querySelector(".main_background");

    let percent = 0;
    let blur = 30;

    btn.addEventListener("click", () => {
        btn.style.display = "none";

        let inter = setInterval(() => {
            console.log("intervalo ejecutado");

            percent++;
            blur -= 30 / 100;

            // actualizar DOM
            number.innerHTML = percent + "%";
            background.style.filter = `blur(${blur}px)`;

            // detener al llegar a 100
            if (percent >= 100) {
                clearInterval(inter);
                complete.style.display = "block";
            }

        }, 20);
    });

});
