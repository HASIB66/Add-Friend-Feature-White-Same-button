var istatus = document.querySelector("h5")
var btn = document.querySelector("#add")
var chack = 0

btn.addEventListener("click", function(){
    if(chack == 0){          
        istatus.innerHTML ="friend"
        istatus.style.color = "green"
        btn.innerHTML = "Remove friend"
        chack = 1
    }else{
        istatus.innerHTML ="Stranger"
        istatus.style.color = "red"
        btn.innerHTML = "Add friend"
        chack = 0
    }
})