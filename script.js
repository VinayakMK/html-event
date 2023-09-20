let box=document.getElementById("box")

box.addEventListener('mouseover', function(){
    this.style.background='yellow'
})

box.addEventListener('mouseleave', function(){
    this.style.background='red'
})