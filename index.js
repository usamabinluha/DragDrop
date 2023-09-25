let grabbedItem;

const [container1, container2] = document.querySelectorAll('.container')
document.body.addEventListener('dragstart', e => {
  if (e.target.classList[0] === 'item') {
    grabbedItem = e.target
  }
})
document.body.addEventListener('dragover', e => {
  if (e.target.classList[0] === 'container') {
    e.preventDefault()
  }
})
document.body.addEventListener('drop', e => {
  if (e.target.classList[0] === 'container') {
    e.target.appendChild(grabbedItem)
  }
})