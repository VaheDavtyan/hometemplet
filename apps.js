
const serach1 = document.querySelectorAll(".fa-search-plus");
let img = [
    "https://livedemo00.template-help.com/wt_prod-19216//images/fullwidth-masonry-gallery-6-1200x800-original.jpg",
    "https://livedemo00.template-help.com/wt_prod-19216//images/fullwidth-masonry-gallery-1-1200x800-original.jpg",
    "https://livedemo00.template-help.com/wt_prod-19216//images/fullwidth-masonry-gallery-2-1200x800-original.jpg",
    "https://livedemo00.template-help.com/wt_prod-19216//images/fullwidth-masonry-gallery-3-1200x800-original.jpg",
    "https://livedemo00.template-help.com/wt_prod-19216//images/fullwidth-masonry-gallery-4-1200x800-original.jpg",
    "https://livedemo00.template-help.com/wt_prod-19216//images/fullwidth-masonry-gallery-5-1200x800-original.jpg",
]
serach1.forEach((elemnet) => {
    elemnet.addEventListener("click", function () {
        document.getElementById("popupp").style = "transform :scale(1);";
        let id = this.id.slice(-1)

        document.getElementById("img1").src = img[id]
        let imgArr = document.querySelectorAll(".imj")
        imgArr[id].style = "border:1px solid #ff0"
        
        document.getElementById("left").addEventListener("click", function () {
            if (id > 0) {
                id--
            }
            else {
                id = img.length - 1
            }

            document.getElementById("img1").src = img[id]
            imgArr[id].style = "border:1px solid #ff0"
           
        })
        document.getElementById("right").addEventListener("click", function () {
            if (id < img.length-1) {
                id++
            }
            else {
                id = 0
            }
            document.getElementById("img1").src = img[id]
            imgArr[id].style = "border:1px solid #ff0"
        })
    })

})

document.getElementById("b").addEventListener("click", function () {
    document.getElementById("popupp").style = "transform: scale(0)"
});
document.getElementById("t3").addEventListener("click", function () {
    document.getElementById("text1").style = "display: block"
    document.getElementById("text2").style = "display: none;"
    document.getElementById("text3").style = "display: none;"
})
document.getElementById("t4").addEventListener("click", function () {
    document.getElementById("text1").style = "display: none;"
    document.getElementById("text2").style = "display: block;"
    document.getElementById("text3").style = "display: none;"

})
document.getElementById("t5").addEventListener("click", function () {
    document.getElementById("text1").style = "display: none;"
    document.getElementById("text2").style = "display: none;"
    document.getElementById("text3").style = "display: block;"
})
document.getElementById("copy3").addEventListener("click", function () {
    document.getElementById("item1").style = "transform :scale(0);"
    document.getElementById("item2").style = "transform :scale(0);"
    document.getElementById("item4").style = "transform :scale(0);"
    document.getElementById("item5").style = "transform :scale(0); display: none;"
    document.getElementById("item3").style = " grid-column: 1; grid-row: 1;"
    document.getElementById("item6").style = " grid-column: 2 ; grid-row: 1 ; height:50%"
})
document.getElementById("copy4").addEventListener("click", function () {
    document.getElementById("item1").style = "transform :scale(0);"
    document.getElementById("item2").style = " grid-column: 3 ; grid-row: 1 ;"
    document.getElementById("item4").style = "transform :scale(0);"
    document.getElementById("item5").style = " grid-column: 1 / span 2 ; grid-row: 1; "
    document.getElementById("item3").style = "transform :scale(0); display: none;"
    document.getElementById("item6").style = "transform :scale(0); display: none;"
})
document.getElementById("copy5").addEventListener("click", function () {
    document.getElementById("item1").style = "grid-column: 1 ; grid-row: 1; "
    document.getElementById("item2").style = "transform :scale(0);"
    document.getElementById("item4").style = " grid-column: 2 ; grid-row: 1 ;"
    document.getElementById("item5").style = "transform :scale(0); display: none"
    document.getElementById("item3").style = "transform :scale(0);"
    document.getElementById("item6").style = "transform :scale(0); display: none"
})
document.getElementById("copy1").addEventListener("click", function () {
    document.getElementById("item1").style = "grid-column: 1 ; grid-row: 1; "
    document.getElementById("item2").style = "grid-column: 2 ; grid-row: 1; "
    document.getElementById("item4").style = "grid-column: 4 ; grid-row: 1 ;"
    document.getElementById("item5").style = "grid-column: 1  /span 2 ; grid-row: 2; "
    document.getElementById("item3").style = "grid-column: 3 ; grid-row: 1 / span 2; height:100% "
    document.getElementById("item6").style = "grid-column: 4 ; grid-row: 2; "
});
document.getElementById("fabars").addEventListener("click" , function(){
    document.getElementById("fabarscll").style = "transform: scale(1);"
    document.getElementById("clockclick").style = "  transform: scale(0);"
})
document.getElementById("l2").addEventListener("click" , function(){
    document.getElementById("fabarscll").style = "transform: scale(0);"
})
const m = document.querySelectorAll(".fa-angle-down")
const n = document.querySelectorAll(".fatext3")
console.log(n);
m.forEach((element) => {
    
    element.addEventListener("click", function () {
       
        let id = this.id
        let a = id.slice(-1)
        console.log(a);
        for (let i = 0; i < n.length ; i++){   
            if(i == a){
             
                n[i].classList.toggle("fatext5")
            }
            else{
                n[i].classList.remove("fatext5")
            }
        }
    })
})
document.getElementById("ellipsis").addEventListener("click" , function(){
    document.getElementById("clockclick").style = "  transform: scale(1);"
    document.getElementById("fabarscll").style = "transform: scale(0);"
})
document.getElementById("lc").addEventListener("click" , function(){
    document.getElementById("clockclick").style = "  transform: scale(0);"
})

