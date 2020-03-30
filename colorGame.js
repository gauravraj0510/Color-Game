var numSquares = 6;
var colors = generateRandomColours(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var pickedColor = pickColor();  
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function()
{
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColours(numSquares);
    pickedColor = pickColor();
    messageDisplay.textContent = "";
    colorDisplay.textContent = pickedColor;
    for(var i=0 ;i<squares.length ;i++)
    {
        if(colors[i])
        {
            squares[i].style.backgroundColor = colors[i];
        }
        else
        {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
});
hardBtn.addEventListener("click", function()
{
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColours(numSquares);
    pickedColor = pickColor();
    messageDisplay.textContent = "";
    colorDisplay.textContent = pickedColor;
    for(var i=0 ;i<squares.length ;i++)
    {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    } 
    h1.style.backgroundColor = "steelblue";       
});


resetButton.addEventListener("click",function()
{
    colors = generateRandomColours(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    this.textContent = "NEW COLORS"
    for(var i=0 ; i<squares.length ; i++)
    {
       squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i=0 ; i<squares.length ; i++)
{
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click" , function()
    {
        var clickedColor = this.style.backgroundColor;
        if(clickedColor===pickedColor)
        {
            messageDisplay.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "PLAY AGAIN?";
        }
        else
        {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";  
        }
    });
}

function changeColors(color)
{
    for(var i=0 ; i<squares.length ; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColours(num)
{
    var arr=[];

    for(var i=0; i<num; i++)
    {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor()
{
    var r = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b +")";
}