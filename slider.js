let currentPhotoSlide = 0;
const photoSlideIncrement = 50; 


const maxOffset = 6; 

function movePhotoSlide(direction) {
    const slider = document.querySelector('.photo_slider');
    const slideRows = document.querySelectorAll('.photo_slide-row');
    const totalImages = slideRows[0].children.length;
    const containerWidth = slider.parentElement.offsetWidth;
    const imageWidth = containerWidth / 2; 

    currentPhotoSlide += direction;

    if (currentPhotoSlide < 0) {
        currentPhotoSlide = maxOffset;
    } else if (currentPhotoSlide > maxOffset) {
        currentPhotoSlide = 0;
    }

    const offset = currentPhotoSlide * -photoSlideIncrement; 
    slider.style.transform = "translateX(" + offset + "%)";

}


let currentVideoSlide = 0;
const videoSlideWidthPercentage = 100; 

function moveVideoSlide(direction) {
    const videoSlider = document.querySelector('.video_slider');
    const videoSlideRows = document.querySelectorAll('.video_slide-row');
    const totalVideoItems = videoSlideRows[0].children.length;
    const totalVideoSlides = totalVideoItems; 

    currentVideoSlide += direction;

    if (currentVideoSlide < 0) {
        currentVideoSlide = totalVideoSlides - 1;
    } else if (currentVideoSlide >= totalVideoSlides) {
        currentVideoSlide = 0;
    }

    const videoOffset = currentVideoSlide * -videoSlideWidthPercentage;
    videoSlider.style.transform = "translateX(" + videoOffset + "%)";

}


let currentGraphicSlide = 0;
const graphicSlideIncrement = 50; 


const graphicMaxOffset = 4; 

function moveGraphicSlide(direction) {
    const slider = document.querySelector('.graphic_slider');
    const slideRows = document.querySelectorAll('.graphic_slide-row');
    const totalImages = slideRows[0].children.length;
    const containerWidth = slider.parentElement.offsetWidth;
    const imageWidth = containerWidth / 2; 

    currentGraphicSlide += direction;

    if (currentGraphicSlide < 0) {
        currentGraphicSlide = graphicMaxOffset;
    } else if (currentGraphicSlide > graphicMaxOffset) {
        currentGraphicSlide = 0;
    }

    const offset = currentGraphicSlide * -graphicSlideIncrement; 
    slider.style.transform = "translateX(" + offset + "%)";

}