let botones = document.getElementsByClassName("botones");
let submitButton = document.getElementById("submitButton");
let ratings = document.getElementById("ratings");
let rated = document.getElementById("rated");
let selection = document.getElementById("selection");

submitButton.addEventListener("click", submit);

let number = "";
for(i = 0; i < botones.length; i++)
{
    botones[i].addEventListener("focus", focus);
    botones[i].addEventListener("focusout", focusout);
}
function focus()
{ 
    number = this.getAttribute("name");
    submitButton.disabled = false;
    submitButton.style.color = "hsl(25, 97%, 53%)";
    submitButton.style.backgroundColor = "white";
}

function focusout()
{
    if(submitButton.disabled==false)
    {
        submitButton.style.color = "white";
        submitButton.style.backgroundColor = "hsl(25, 97%, 53%)";
    }
    
}
function submit()
{
    ratings.style.display = "none";
    rated.style.display = "block";
    submitButton.disabled=true;
    selection.innerHTML = number;
}
