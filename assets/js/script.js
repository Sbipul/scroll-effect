window.addEventListener('scroll',()=>{
  let boy = document.getElementById('fixDiv2')
  let value = window.scrollY;
  console.log(value / 100)
  console.log(window.innerWidth)
  if (window.innerWidth <= 425) {
    boy.style.left = ((value/100) * .74) + '%'
  } else {
    boy.style.left = ((value/100) * 2.89) + '%'
  }
})

