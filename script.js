console.log("Script running...")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.bars').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebargo');
    if (document.querySelector('.sidebar').classList.contains('sidebargo')) {
        document.querySelector('.bar').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else {
        document.querySelector('.bar').style.display = 'none'
        setTimeout(()=>{
            document.querySelector('.cross').style.display ='inline'
        }, 350);
        
    }
})

