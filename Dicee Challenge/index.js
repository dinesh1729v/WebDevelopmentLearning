randomNumber1 = Math.floor(Math.random()*6)+1;
document.getElementsByTagName("div")[1].getElementsByTagName("img")[0].setAttribute("src",'images/dice'+randomNumber1+'.png');
randomNumber2 = Math.floor(Math.random()*6)+1;
document.getElementsByTagName("div")[2].getElementsByTagName("img")[0].setAttribute("src",'images/dice'+randomNumber2+'.png');
if(randomNumber1 > randomNumber2)
{
  document.getElementsByTagName("h1")[0].textContent="Player 1 wins!";
}
else if(randomNumber2 > randomNumber1)
{
  document.getElementsByTagName("h1")[0].textContent="Player 2 wins!";
}
else
{
  document.getElementsByTagName("h1")[0].textContent="Draw!";
}
