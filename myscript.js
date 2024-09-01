var randomNumber1=Math.floor((Math.random()*2)+1);
console.log(randomNumber1);

var randomdiceimage= "img"+ randomNumber1 +".png";

var randomsource="images/"+randomdiceimage;

var image=document.querySelectorAll("img")[0];
image.setAttribute("src", randomsource);

// var randomnumber2=Math.floor((Math.random()*6)+1);
// var randomimage2="dice"+randomnumber2+".png";
// var image2="images/"+randomimage2;
// var img2=document.querySelectorAll("img")[1].setAttribute("src",image2);

if(randomNumber1===1)
    {document.querySelector('h1').textContent=("Team A won the toss     ");}
    else
    {
        document.querySelector('h1').textContent=("Team B won the toss ");

    }
if(randomNumber1===1)
    {document.querySelector('p').textContent=("Its Heads");}
    else
    {
        document.querySelector('p').textContent=("Its tail");

    }