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
