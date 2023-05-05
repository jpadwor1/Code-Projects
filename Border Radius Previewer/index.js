const borderTl = document.getElementById("border-tl");
const borderTr = document.getElementById("border-tr");
const borderBr = document.getElementById("border-br");
const borderBl = document.getElementById("border-bl");
const borderAll = document.getElementById("border-all");
const display = document.querySelector(".border-display");

const inputs = document.querySelectorAll("input");
borderTl.innerText = "0px;"
borderTr.innerText = "0px;"
borderBr.innerText = "0px;"
borderBl.innerText = "0px;"
borderAll.innerText = "0px 0px 0px 0px;"

inputs.forEach(input => {
    input.addEventListener("keyup", ()=>{
        let borderInputTL = document.getElementById("border-top-left").value;
        let borderInputTR = document.getElementById("border-top-right").value;
        let borderInputBL = document.getElementById("border-bottom-left").value;
        let borderInputBR = document.getElementById("border-bottom-right").value;

        borderTl.innerText = borderInputTL + 'px;';
        borderTr.innerText = borderInputTR + 'px;';
        borderBr.innerText = borderInputBL + 'px;';
        borderBl.innerText = borderInputBR + 'px;';
        borderAll.innerText = borderInputTL + 'px ' +borderInputTR + 'px ' + borderInputBL + 'px ' + borderInputBR + 'px;';

        display.style.borderTopLeftRadius = borderInputTL + 'px';
        display.style.borderTopRightRadius = borderInputTR + 'px';
        display.style.borderBottomRightRadius = borderInputBL + 'px';
        display.style.borderBottomLeftRadius = borderInputBR + 'px';


    })
})