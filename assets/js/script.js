function addItem() {
  const item = document.querySelector('.list-two').lastElementChild;
  const clonedItem = item.cloneNode(true);
  // console.log(clonedItem);
  document.querySelector('.list-one').appendChild(clonedItem);
}

// using "vanilla" event listener
// we remove the inline event listener
const myBtn = document.querySelector('#my-btn');
// add listener
myBtn.addEventListener('click', addItem);

// here is an example of removeEventListener()
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_addeventlistener_remove

// review last 4 slides on:
// * cloning nodes
// * inline OnEvent Handlers
// * mouse events
// * addEventListener
