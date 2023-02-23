const img = document.getElementById("posterImage")
const imgArr = ["poster1.png", "poster2.png","poster3.png","poster4.png","poster5.png"]
let i = 1
setInterval(function(){
    i++;
    if(i >= imgArr.length){
        i = 0
    }
    img.setAttribute('src', imgArr[i])
}, 2000)
