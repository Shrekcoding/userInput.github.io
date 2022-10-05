const ourInput = document.getElementById("ourInput")
const ourHeader = document.getElementById("ourHeader")


ourInput.addEventListener("input", amazingFunction)

function amazingFunction() {
  if (ourInput.value) {
    ourHeader.innerText = ourInput.value 
  } else {
    ourHeader.innerText = "Type in top bar to change me"
  }
}

const secondInput = document.getElementById("secondInput")
const ourParagraph = document.getElementById("ourParagraph")

secondInput.addEventListener("input", fantasticFunction)

function fantasticFunction() {
  if (secondInput.value) {
    ourParagraph.innerText = secondInput.value 
  } else {
    ourParagraph.innerText = "Type in bottom bar to change me"
  }
  
  
}