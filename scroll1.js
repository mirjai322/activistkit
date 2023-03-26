let cards = document.querySelectorAll(".cards");

document.addEventListener("scroll", checkCards)
document.addEventListener("DOMContentLoaded", checkCards)

function checkCards()
{
  cards.forEach(function(cards)
  {
    if(window.scrollY + window.innerHeight > cards.offsetTop){
      cards.classList.add("slide");
    }
    else{
      cards.classList.remove("slide");
    }
  })
}