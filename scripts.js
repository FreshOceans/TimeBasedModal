window.addEventListener("load", showModalDiv);
var modalEl = document.getElementById("primeModal");

function showModalDiv(){
  console.log("== showModalDiv ==");
  setTimeout(function(){
    modalEl.style.display = "block"}, 3000);
  var exitEl = document.getElementById("exit");
  exitEl.addEventListener("click", hideModalDiv);
}
function hideModalDiv(){
  console.log("== hideModalDiv ==");
  modalEl.style.display = "none";
}



// ====== Modal Exit ======
