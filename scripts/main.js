document.addEventListener('DOMContentLoaded', () => {
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    image1.onclick = () => {
        image1.style.transform = image1.style.transform === 'scale(1.5)' ? 'scale(1)' : 'scale(1.5)';
    };

    image2.onmouseenter = () => {
        image2.style.transform = 'rotate(360deg)';
    };
    image2.onmouseleave = () => {
        image2.style.transform = 'rotate(0deg)';
    };
});
