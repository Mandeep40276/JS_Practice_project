const ouritemdiv= document.getElementsByClassName("item")
const openicon= document.getElementsByClassName("iconOpen")
const closeicon= document.getElementsByClassName("iconClose")


// console.log(ouritemdiv)


for(let i=0; i<ouritemdiv.length; i++){
    closeicon[i].style.display= "none"
    
    ouritemdiv[i].addEventListener("click", () =>{
        const result = ouritemdiv[i].classList.toggle("active")


        if (result) {
            closeicon[i].style.display = "block";
            openicon[i].style.display  = "none";
        
        }else{
        closeicon[i].style.display = "none";
        openicon[i].style.display  = "block";
    }
    })
}