const imgs = document.getElementById('imgs')
const clickLeft = document.getElementById('left')
const clickRight = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let index = 0

let interval = setInterval(run, 2000)


function run() {
    index++
    changeImage()
}

function changeImage(){
    if(index > img.length -1){
        index = 0
    } else if (index < 0){
        index = img.length -1

    }

    imgs.style.transform = `translateX(${-index * 500}px)`
}

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

clickRight.addEventListener('click', () => {
    index++
    changeImage()
    resetInterval()
})


clickLeft.addEventListener('click', () => {
    index--
    changeImage()
    resetInterval()
})