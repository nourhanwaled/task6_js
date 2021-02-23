//get buttons
const btns=document.querySelectorAll(".btn");
const btndiv=document.querySelector(".btns");
const contents=document.querySelectorAll(".content");
//add eventlisener
btndiv.addEventListener("click",function(event){
    const mark=event.target.dataset.mark;
    if(mark){
        btns.forEach(function(btn){
            btn.classList.remove("active");
            event.target.classList.add("active");
        })
        contents.forEach(function(content){
            content.classList.remove("active1");
            const element=document.getElementById(mark);
            element.classList.add("active1");
        })
    }
});
