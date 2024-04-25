function colorLight(light){
    document.getElementById('red').style.backgroundColor = '#141414'
    document.getElementById('yellow').style.backgroundColor = '#141414'
    document.getElementById('green').style.backgroundColor = '#141414'

    document.getElementById(light).style.backgroundColor = light
} 

function changeLight() {
    colorLight('red')
    setTimeout (function(){
        colorLight('yellow')
        setTimeout(() => {
           colorLight('green') 
        setTimeout(changeLight,3000)
        },2000)
    },2000)
}

colorLight('red')

setTimeout(changeLight,3000)


