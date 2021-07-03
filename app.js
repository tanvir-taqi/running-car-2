const start = document.querySelector(".start")
const stop = document.querySelector(".stop")
m = 0

var y;
start.addEventListener('click', ()=>{
   y =  setInterval(()=>{
   

            var objectar = document.querySelector(".fa-biking")
            m +=5

            objectar.style.marginLeft = m + 'px'
            if ( m === 1180){
                m = 0
            }
    },10)
})

stop.addEventListener("click", ()=>{
   
clearInterval(y)

})