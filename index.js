console.log("running")
document.querySelector('.close').style.display ="none";
document.querySelector('.hamberger').addEventListener("click",()=>{
    document.querySelector('sidebar').classList.toggle('sidebarGo');
})