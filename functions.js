//Scroll to section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
        });
    });
});

//animation of the sections
const section = document.getElementById('home-section');
const title = document.getElementById('name-box');
const subtitle = document.getElementById('title-box');
const icons_box = document.getElementById('icons-box');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            title.classList.add('animate');
            subtitle.classList.add('animate');
            icons_box.classList.add('animate');
        } else {
            title.classList.remove('animate');
            subtitle.classList.remove('animate');
            icons_box.classList.remove('animate');
        }
    });
}, { threshold: 0.5 });

observer.observe(section);

const about_section = document.getElementById('about-section');
const about_title = document.getElementById('about-title');
const about_text = document.getElementById('about-box');
const my_pic = document.getElementById('my_picture');

const observer_about = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            about_title.classList.add('animate');
            about_text.classList.add('animate');
            my_pic.classList.add('animate');
        } else {
            about_title.classList.remove('animate');
            about_text.classList.remove('animate');
            my_pic.classList.remove('animate');
        }
    });
}, { threshold: 0.5 });

observer_about.observe(about_section);

const skills_section = document.getElementById('skills-section');
const skills_title = document.getElementById('skills-title-box');
const front_box = document.getElementById('frontend-box');
const back_box = document.getElementById('backend-box');

const observer_skills = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skills_title.classList.add('animate');
            front_box.classList.add('animate');
            back_box.classList.add('animate');
        } else {
            skills_title.classList.remove('animate');
            front_box.classList.remove('animate');
            back_box.classList.remove('animate');
        }
    });
}, { threshold: 0.5 });

observer_skills.observe(skills_section);

//navbar toggle collapse on click
document.addEventListener('DOMContentLoaded', function () {
    var navbarLinks = document.querySelectorAll('.navbar-nav a');
    var navbarTogglerIcon = document.querySelector('.navbar-toggler-icon');

    navbarLinks.forEach(function (navbarLink) {
        navbarLink.addEventListener('click', function () {
            var navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
                // Reset the navbar-toggler-icon to "menu.svg"
                navbarTogglerIcon.style.backgroundImage = "url('images/menu.svg')";
            }
        });
    });
});

//Adding dark background on opening the toggle
document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');
    var navbarToggler = navbar.querySelector('.navbar-toggler');

    navbarToggler.addEventListener('click', function () {
        navbar.classList.toggle('bg-dark');
    });

    // If you want to remove the dark background when the menu is closed
    var navbarLinks = navbar.querySelectorAll('.navbar-nav a');
    navbarLinks.forEach(function (navbarLink) {
        navbarLink.addEventListener('click', function () {
            navbar.classList.remove('bg-dark');
        });
    });
});

//mudar toggle menu

function mudar() {
    let icon = document.querySelector(".navbar-toggler-icon");
    let computedStyle = window.getComputedStyle(icon);

    if (computedStyle.backgroundImage.includes("menu.svg")) {
        icon.style.backgroundImage = "url('images/close.svg')";
    } else {
        icon.style.backgroundImage = "url('images/menu.svg')";
    }
}