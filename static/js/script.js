
const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');

const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');

const portfolioLists = document.querySelectorAll('.portfolio-list');
const porfolioBoxs = document.querySelectorAll('.portfolio-box');
// nav bar actions and cube rotation
navs.forEach((nav, idx)=>{
    nav.addEventListener('click',() =>{
        document.querySelector('.nav-list li.active').classList.remove('active');
        nav.classList.add('active'); 

        cube.style.transform = `rotateY(${idx * -90}deg)`;

        document.querySelector('.section.active').classList.remove('active');
        sections[idx].classList.add('active');

        const array = Array.from(sections);
        const arrSecs = array.slice(1, -1); //only require indexes 1,2,3 or does not require start and end indexes
        arrSecs.forEach(arrSecs =>{
            if (arrSecs.classList.contains('active')){
                sections[4].classList.add('active-contact');
            }
        });
        if (sections[0].classList.contains('active')){
            sections[4].classList.remove('active-contact');
        }

    });
});
// resume section when clicking tab-list
resumeLists.forEach((list, idx)=>{
    list.addEventListener('click',() =>{
        document.querySelector('.resume-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.resume-box.active').classList.remove('active');
        resumeBoxs[idx].classList.add('active');

    });
});
// porfolio section when clicking tab-list
portfolioLists.forEach((list, idx)=>{
    list.addEventListener('click',() =>{
        document.querySelector('.portfolio-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.portfolio-box.active').classList.remove('active');
        porfolioBoxs[idx].classList.add('active');

    });
});
// visibility for contact section when reloading(cube reloading Animation)
setTimeout(()=>{
    sections[4].classList.remove('active');
}, 1500);