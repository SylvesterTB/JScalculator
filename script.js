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
function clear()
{
    const p_select = document.querySelector("p");
    const h3_select = document.querySelector("h3");

    p_select.textContent =  25
 h3_select.textContent =   25
    document.getElementById(p_select).innerHTML = ""; 
    
}
function result() {
    const p_select = document.querySelector("p");
    const expression = p_select.textContent;
    var firstPart = 0;
    var total = 0;
    
    for(i = 0; i<expression.length; i++)
        {
            if(!(expression.substring(i,i+1) === "+" || expression.substring(i,i+1) === "-" || expression.substring(i,i) === "÷" || expression.substring(i,i+1) === "x"))
            {
                firstPart = expression.substring(0, i + 1)
            }
           
            if(expression.substring(i,i + 1) === "+") 
            {
                    total = Number(firstPart) + Number(expression.substring(i+ 1, expression.length )) 
    
            }
            else if(expression.substring(i,i + 1) === "-")
                {
                        total = Number(firstPart) - Number(expression.substring(i + 1, expression.length )) 
                }
            else if(expression.substring(i,i + 1) === "x")
                {
                        total = Number(firstPart) * Number(expression.substring(i + 1, expression.length )) 
                }
            else if(expression.substring(i,i) === "÷")
                {
                        total =  Number(firstPart) / Number(expression.substring(i + 1, expression.length )) 
                }
        }
    
    ////
    //// const result = eval(expression);
    ////

    
    const h3_select = document.querySelector("h3");
    h3_select.textContent = "Result: " + total;
}