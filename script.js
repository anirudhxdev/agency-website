console.log("js loaded");
const reveals=document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
    reveals.forEach(item =>{
        const top = item.getBoundingClientRect().top;
        const windowHeight =window.innerHeight;

        if(top < windowHeight - 100) {
            item.classList.add('active');
        }
    });
});

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.dataset.target;
        const current = +counter.innerText;

        const increment = target / 100;

        if (current < target) {
            counter.innerText =
                Math.ceil(current + increment);

            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target + "+";
        }
    };

    updateCounter();
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item =>{
    item.addEventListener('click', () =>{
        item.classList.toggle('active');
    });
});

window.addEventListener('scroll', () =>{
    const navbar = document.querySelector('.navbar');

    navbar.classList.toggle(
        'scrolled', window.scrollY > 50
    )
});

const form = document.querySelector('.contact-form');

form.addEventListener('submit', e =>{
    e.preventDefault();

    alert('Thank you! Your message has been sent.');
     
    form.reset();

});


const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () =>{

    if(window.scrollY > 300){
        topBtn.style.display = 'block';
    }
    else{
        topBtn.style.display = 'none';
    }

});
 
topBtn.addEventListener('click', () =>{

    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
});


const filterBtns =
document.querySelectorAll('.filter-btn');

const projects =
document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {

    btn.addEventListener('click', () => {

        const filter =
        btn.dataset.filter;

        filterBtns.forEach(b =>
            b.classList.remove('active')
        );

        btn.classList.add('active');

        projects.forEach(project => {

            const category =
            project.dataset.category;

            if(
                filter === 'all' ||
                filter === category
            ){
                project.style.display =
                    'block';
            }
            else{
                project.style.display =
                    'none';
            }

        });

    });

});

const hamburger =
document.querySelector('.hamburger');

const navLinks =
document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});