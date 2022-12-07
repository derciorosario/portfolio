
const  animated_text=document.querySelector('.animated-text span')
const  nav_top_toggle=document.querySelectorAll('.nav_top_toggle')
const  nav_top=document.querySelector('.top-nav')
const  nav=document.querySelector('.nav')
const pages=document.querySelectorAll('section')
const nav_right_links=document.querySelectorAll('.right-center-side span')
const right_center=document.querySelector('.right-center-side')
const top_nav_links=document.querySelectorAll('.top-nav a')
const text_center_home=document.querySelector('.text-center-container')
const home_social=document.querySelector('.home .social')



const text_array=['WEB DESIGNER','WEB DEVELOPER','APP DEVELOPER']
let text_index=0
let current_index=0
let clear=false

setInterval(()=>{ 
 if(clear && text_index <= 0)  {
        clear=false
        if(current_index==text_array.length - 1) {
            current_index=0
        }else{
            current_index++
        }
 } 
 if(text_index >= text_array[current_index].length + 12)  clear=true
 animated_text.innerHTML=`${text_array[current_index].slice(0,clear ? text_index-- : text_index++)}`
 

},50)

function toggle_nav(){
    document.body.classList.toggle('no-scroll')
    nav_top.classList.toggle('active')
}
nav_top_toggle.forEach(e=>e.addEventListener('click',()=>toggle_nav()))

top_nav_links.forEach(e=>e.addEventListener('click',()=>toggle_nav()))


document.querySelector('.go-to-top').addEventListener('click',()=>window.scroll(0,0))

let right_nav_timeout
window.addEventListener('scroll',()=>{
    const windowY=window.pageYOffset

    if(windowY  +  40 >= window.innerHeight){
        nav.classList.add('active')
        document.querySelector('.go-to-top').classList.add('active')
    }else{
        nav.classList.remove('active')
        document.querySelector('.go-to-top').classList.remove('active')
    }

    for (let i = pages.length - 1; i >= 0; i--) {
        if(windowY + window.innerHeight/1.8 >= pages[i].offsetTop){
            nav_right_links.forEach(e=>e.classList.remove('active'))
            top_nav_links.forEach(e=>e.classList.remove('active'))
            nav_right_links[i].classList.add('active') 
            top_nav_links[i].classList.add('active') 
            break
            
        }else{
            nav_right_links[i].classList.remove('active')
            top_nav_links[i].classList.remove('active')
        }
    }

   
      right_center.classList.add('active')

      clearInterval(right_nav_timeout)
      right_nav_timeout=setTimeout(()=>{
        right_center.classList.remove('active')
      },170)


      text_center_home.style.transform=`translateY(${windowY/3}px)`
      home_social.style.transform=`translateY(${windowY/1.5}px)`
      
      
      
   
    
})





