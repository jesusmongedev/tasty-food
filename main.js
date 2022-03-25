// Query html selectors
const $heartIcon = document.querySelectorAll('.bxs-heart')

console.log($heartIcon)

$heartIcon.forEach((element) => {
  element.addEventListener('click', function () {
    element.classList.toggle('bxs-heart--fav')
  })
})
