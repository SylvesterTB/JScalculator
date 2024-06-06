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
function clear_out()
{
    const p_select = document.querySelector("p");
    const h3_select = document.querySelector("h3");

    p_select.textContent =  ""
    h3_select.textContent =   ""
    // document.getElementById(p_select).innerHTML = ""; 

    
}


function findOpIndex()
{
    const p_select = document.querySelector("p");
    const expression = p_select.textContent;
   console.log(expression)
    var indices = [];
    for(var i=0; i<expression.length;i++) {
        if (expression[i] === "+" || expression[i] === "-" || expression[i] === "÷" || expression[i] === "x" ){ 
            indices.push(i);
        
    }
    }
     if(indices.length === 2)
        {
        return indices[indices.length-1]
        }
}

function firstPartLength()
{
      const p_select = document.querySelector("p");
        const expression = p_select.textContent;
       console.log(expression)
        var indices = [];
        for(var i=0; i<expression.length;i++) {
            if (expression[i] === "+" || expression[i] === "-" || expression[i] === "÷" || expression[i] === "x" ){ 
                indices.push(i);
          
                if(indices.length === 1)
                    {
                    return indices[indices.length-1]
                    }
        }
        }
  
}

function result() {
    const p_select = document.querySelector("p");
    const expression = p_select.textContent;
    var firstPart = 0;
    var total = 0;
    var valueS = 0
    var count = 0;
    var opIndex = findOpIndex()
    console.log(opIndex)
    var tracker = 0;
    var tracker2 = firstPartLength();
    var trueFalse = true;
    
    for(i = 0; i<expression.length; i++)
        {
            if(!(expression.substring(i,i+1) === "+" || expression.substring(i,i+1) === "-" || expression.substring(i,i + 1) === "÷" || expression.substring(i,i+1) === "x") && tracker <  tracker2 )
            {
                if(tracker < 2)
                {
                firstPart = expression.substring(0, i + 1)
                    console.log(firstPart + " firstPart")
                }
       
                tracker += 1;

            }
           
            if(expression.substring(i,i + 1) === "+" &&  count === 0) 
            {
                    total = Number(firstPart) + Number(expression.substring(i+ 1, opIndex)) 
  console.log(total + " total")
                count +=1
                

            }
            else if(expression.substring(i,i + 1) === "-" &&  count === 0)
                {
                        total = Number(firstPart) - Number(expression.substring(i + 1, opIndex)) 
                    count +=1
                }
            else if(expression.substring(i,i + 1) === "x" &&  count === 0)
                {
                        total = Number(firstPart) * Number(expression.substring(i + 1, opIndex)) 
                    count +=1
                }
            else if(expression.substring(i,i + 1) === "÷" &&  count === 0)
                {
                        total =  Number(firstPart) / Number(expression.substring(i + 1, opIndex)) 
                    count +=1
                }
            else if(count > 0 && (expression.substring(i,i+1) === "+" || expression.substring(i,i+1) === "-" || expression.substring(i,i) === "÷" || expression.substring(i,i+1) === "x") && trueFalse)
            {
                valueS = Number(expression.substring(opIndex + 1, expression.length )) 
                console.log(valueS + " Values")
                if(expression.substring(i,i + 1) === "+" ) 
                    {
                            total += valueS

           

                    }
                    else if(expression.substring(i,i + 1) === "-" )
                        {
                            
                                total -= valueS

                        }
                    else if(expression.substring(i,i + 1) === "x" )
                        {
                                total *= valueS
                      
                        }
                    else if(expression.substring(i,i + 1) === "÷" )
                        {
                                total = total / valueS
                                    
                   
                        }
                // total +=  valueS
                trueFalse = false
              
            }
        }
    
    ////
    //// const result = eval(expression);
    ////

    
    const h3_select = document.querySelector("h3");
    h3_select.textContent = "Result: " + total;
}