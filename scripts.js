window.addEventListener("load", showModalDiv);

function showModalDiv(){
  console.log("== showModalDiv ==");
  var modalEl = document.getElementById("primeModal");
  console.log("displayModal:", modalEl);
  setTimeout(displayModal, 3000);
}
function displayModal(){
  console.log("displayModal");
}













// ====== Modal Exit ======
// span.onclick = function() {
//   console.log("Button Exit");
//     modal.style.display = "none";
//
// window.onclick = function(event) {
//   console.log("Window Exit");
//     if (event.target == modal) {
//         modal.style.display = "none";
//     };
// }
