var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  console.log(event);
  var element = event.target;

  element.textContent = element.dataset.number;
  
  // TODO: Complete function
});
