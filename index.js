document.addEventListener("DOMContentLoaded", function(){
    var animation = bodymovin.loadAnimation({
        container: document.getElementById('lottieExampleId'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'lottieExample.json'
    });
});