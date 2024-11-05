const images = document.querySelectorAll('img');


const originalMessage = "Hover over or focus on an image below to display it here.";
const originalBackground = "url('')"; 


function upDate(previewPic) {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`; 
    imageDiv.innerHTML = previewPic.alt; 
}


function unDo() {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = originalBackground; 
    imageDiv.innerHTML = originalMessage; 
}


function focusFunction(event) {
    images.forEach(img => img.classList.remove('preview')); 
    event.target.classList.add('preview'); 

    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url('${event.target.src}')`; 
    imageDiv.innerHTML = event.target.alt; 
}


function blurFunction(event) {
    event.target.classList.remove('preview'); 

    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = originalBackground;
    imageDiv.innerHTML = originalMessage; 
}


images.forEach(image => {
    image.setAttribute('tabindex', '0'); 
    image.addEventListener('focus', focusFunction); 
    image.addEventListener('blur', blurFunction);   
    image.addEventListener('mouseover', () => upDate(image)); 
    image.addEventListener('mouseout', unDo); 
});