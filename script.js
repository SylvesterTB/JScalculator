function saveNumber(number)
{
    const p_select = document.querySelector("p");
    p_select.textContent += number
    return number
};

function add()
{
    const p_select = document.querySelector("p");
    p_select.textContent += "+"
}

function subtract()
{
    const p_select = document.querySelector("p");
    p_select.textContent += "-"
}

function multiply()
{
    const p_select = document.querySelector("p");
    p_select.textContent += "x"
}

function divide()
{
    const p_select = document.querySelector("p");
    p_select.textContent += "÷"
}

function result() {
    const p_select = document.querySelector("p");
    const expression = p_select.textContent;
    const result = eval(expression);

    const h3_select = document.querySelector("h3");
    h3_select.textContent = "Result: " + result;
}