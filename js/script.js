
//  togglemenu
function toggleMenu() {
    const menuList = document.getElementById('menuList');
    const menuOpenIcon = document.getElementById('menuOpen');
    const menuCloseIcon = document.getElementById('menuClose');

    if (menuList.classList.contains('active')) {
        menuList.classList.remove('active');
        menuOpenIcon.style.display = 'block';
        menuCloseIcon.style.display = 'none';
    } else {
        menuList.classList.add('active');
        menuOpenIcon.style.display = 'none';
        menuCloseIcon.style.display = 'block';
    }
}
// contact form

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Thank you for your message! We will get back to you shortly.');
    } else {
        alert('Please fill in all required fields.');
    }
});

// carousel botton

document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicators span');
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= items.length) index = 0;
        if (index < 0) index = items.length - 1;
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    document.querySelector('.carousel-control.next').addEventListener('click', function() {
        showSlide(currentIndex + 1);
    });

    document.querySelector('.carousel-control.prev').addEventListener('click', function() {
        showSlide(currentIndex - 1);
    });

    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', function() {
            showSlide(i);
        });
    });

    // Initialize the carousel
    showSlide(currentIndex);
});
