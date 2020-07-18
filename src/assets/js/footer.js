
function review(a) {
  
  const modal = document.querySelector(a)
  
  if (modal.classList.contains("aparece")) {
    modal.classList.remove("aparece")
  } else {
    modal.classList.add("aparece")
  }

}

export default review;