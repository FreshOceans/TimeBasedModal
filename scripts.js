window.addEventListener("load", showModalDiv);

function showModalDiv(){
  console.log("== showModalDiv ==");
  var modalEl = document.getElementById("primeModal");
  console.log("displayModal:", modalEl);
  setTimeout(function(){modalEl.style.display = "block"}, 3000);
}



// ====== Modal Exit ======
// span.onclick = function() {
//   console.log("Button Exit");
//     modal.style.display = "none";

// window.onclick = function(event) {
//   console.log("Window Exit");
//     if (event.target == {
//         modal.style.display = "none";
//     };
// }
