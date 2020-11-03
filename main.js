function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function changeTextColor(color){
    const text = document.querySelector('.text');
    text.style.color = color;
}

function changeButtonColor(color) {
    const button = document.querySelector('.button');
    button.style.background = color;
}