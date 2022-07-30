
let links = document.querySelectorAll('.nav-link')


links.forEach(e=>{
    e.addEventListener('click',()=>{
        let curr = document.querySelector('.nav-active');
        if(curr){
            curr.classList.remove('nav-active')
        }
        e.classList.add('nav-active')
    })
})