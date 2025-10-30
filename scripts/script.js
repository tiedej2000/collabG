const workImages = {
    "alcide1": "./media/alcide/alcide_1.png",
    "alcide2": "./media/alcide/alcide_2.png",
    "alcide3": "./media/alcide/alcide_3.png",
    "alcide4": "./media/alcide/alcide_4.png",
    "alcide5": "./media/alcide/alcide_5.png",
    "alcide6": "./media/alcide/alcide_6.png",
    "alcide7": "./media/alcide/alcide_7.png",
    "alcide8": "./media/alcide/alcide_8.png",
    "alcide9": "./media/alcide/alcide_9.png",
    "alcide10": "./media/alcide/alcide_10.png",
    "alcide11": "./media/alcide/alcide_11.png",
    "alcide12": "./media/alcide/alcide_12.png"
};

const galleryImg = document.querySelector('.gallery img')
const works = document.querySelectorAll('.work')

works.forEach(work => {
    work.addEventListener('mouseenter', () => {
        const workId = work.id
        if (workImages[workId]) {
            galleryImg.src = workImages[workId]
        }
    })

    work.addEventListener('mouseleave', () => {
        galleryImg.src = ''
    })
})

const projects = document.querySelectorAll('.project');

projects.forEach(project => {
    project.addEventListener('click', () => {
        const projectList = project.querySelector('.project-list')
        document.querySelectorAll('.project-list').forEach(pl => pl.classList.remove('active'))

        if (projectList) {
            projectList.classList.add('active')
        }
    })
})


// fullwidth scroll

let isScrolling = false;

window.addEventListener('wheel', (e) => {
    e.preventDefault();
    const direction = e.deltaY > 0 ? 1 : -1;
    window.scrollBy({
        top: direction * window.innerHeight,
        behavior: 'smooth'
    });
}, { passive: false });