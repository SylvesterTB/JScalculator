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