import './scss/style.scss';


const slider_right = document.getElementById('slider-right');
const slider_left =  document.getElementById('slider-left');

slider_left.style.display = "none";

slider_right.addEventListener('click', () => {
    const content = document.getElementById('slider-content');
    content.className = "completed-projects-slider-wrapper__content second-position";
    slider_right.style.display = "none";
    slider_left.style.display = "flex";
});

slider_left.addEventListener('click', () => {
    const content = document.getElementById('slider-content');
    content.className = "completed-projects-slider-wrapper__content first-position";
    slider_right.style.display = "flex";
    slider_left.style.display = "none";
});