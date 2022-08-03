
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






// projects 


let tabs = document.querySelectorAll('.tab')

tabs.forEach(e=>{
    e.addEventListener('click',()=>{
        let tabId = e.getAttribute("data-tab")
        console.log(tabId)

        let activeTab = document.querySelector('.tab-active')
        if(activeTab){
            activeTab.classList.remove('tab-active')
        }

        let currPro = document.querySelector('.pro-active')
        // console.log(currPro)
        if(currPro){
            currPro.classList.remove('pro-active')

        }


        e.classList.add('tab-active')

        document.querySelector(`#${tabId}`).classList.add('pro-active')

    })



})