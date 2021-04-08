const btn= document.getElementById('btn');
const nav= document.getElementById('nav');

btn.addEventListener('click' , ()=>{
    nav.classList.toggle('active');
    btn.classList.toggle('active');

    if (btn.innerHTML === "=") {
        btn.innerHTML = "x";
      } else {
        btn.innerHTML = "=";
      }
    // btn.innerHTML='x';
})