for(var i = 33; i > 0; i--){
    var slider = document.createElement('div');
    slider.setAttribute('class', 'slider animate');
    slider.setAttribute('id', "slider" + i);
    document.getElementById('game').append(slider);
}

var slideWidth = 373;

function stopSliding(slider) {
    var sliderCurrent = document.getElementById('slider'.concat(slider));
    var sliderAbove = document.getElementById('slider'.concat(slider + 1));
    if(slider == 1){
        var sliderBelow = sliderCurrent;
    } else {
        var sliderBelow = document.getElementById('slider'.concat(slider - 1));
    }

    var left = window.getComputedStyle(sliderCurrent).getPropertyValue('left');
    sliderCurrent.classList.remove('animate');
    sliderCurrent.style.left = left;
    var width = parseFloat(window.getComputedStyle(sliderCurrent).getPropertyValue('width'));
    var leftBelow = parseFloat(window.getComputedStyle(sliderBelow).getPropertyValue('left'));
    left = parseInt(left);
    var difference = left - leftBelow;
    var absDifference = Math.abs(difference);

    if(difference > width || difference < -width) {
        var score = 'Score: '.concat(slider - 1);
        alert(score);
        Location.reload();
    }

    if(difference < 0){
        left = left + absDifference;
        sliderCurrent.style.left = left.toString().concat('px');
    }

    var offset = (width - absDifference).toString().concat('px');
    sliderCurrent.style.width = offset;
    sliderAbove.style.width = offset;
    sliderAbove.style.visibility ='visible';
    
    slideWidth = slideWidth + absDifference;
    // document.documentElement.style.setProperty("--width", slideWidth + width);

    var onclick = "stopSliding(" + (slider+1) + ")";
    document.getElementById('btn').setAttribute('onclick', onclick);
}