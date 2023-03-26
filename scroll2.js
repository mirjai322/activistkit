let historyDivs = document.querySelectorAll(".historyDivs");

document.addEventListener("scroll", checkHistoryDivs)
document.addEventListener("DOMContentLoaded", checkHistoryDivs)

function checkHistoryDivs()
{
  historyDivs.forEach(function(historyDivs)
  {
    if(window.scrollY + window.innerHeight > historyDivs.offsetTop){
      historyDivs.classList.add("slide");
    }
    else{
      historyDivs.classList.remove("slide");
    }
  })
}