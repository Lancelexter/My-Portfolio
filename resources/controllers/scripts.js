const navLinks = document.querySelectorAll('header nav a'); // Select all navigation links
const logoLink = document.querySelector('.logo'); // Select the logo link
const sections = document.querySelectorAll('section'); // Select all sections

const activePages = () => { // Define the activePages function
    const header = document.querySelector('header'); // Select the header
    const barBox = document.querySelector('.bars-box'); // Select the bar box
    
    header.classList.remove('active'); // Remove the 'active' class from the header
    setTimeout(() => { //create the timeout for the animation for the header
        header.classList.add('active'); // Add the 'active' class to the header
    }, 1100); // Set the duration of the animation of 1100ms equivalent to 1.1s

    navLinks.forEach(link => {
       link.classList.remove('active'); // Remove the 'active' class from all navigation links
    });
    barBox.classList.remove('active'); // Remove the 'active' class from the bar box
    setTimeout(() => { //create the timeout for the animation for the bar box
        barBox.classList.add('active'); // Add the 'active' class to the bar box
    }, 1100); // Set the duration of the animation of 1100ms equivalent to 1.1s

    sections.forEach(section => { // Loop through all sections
        section.classList.remove('active'); // Remove the 'active' class from all sections
    });
}

navLinks.forEach((link, idx) => { // Loop through each navigation link
   link.addEventListener('click', () => { // Add a click event listener to each navigation link
       if (!link.classList.contains('active')) { // Check if the navigation link does not have the 'active' class
           activePages(); // Call the activePages function
           link.classList.add('active'); // Add the 'active' class to the clicked navigation link

           setTimeout(() => { //create the timeout for the animation for the section
                sections[idx].classList.add('active'); // Add the 'active' class to the clicked section
           }, 1100); // Set the duration of the animation of 1100ms equivalent to 1.1s
       }
   }) 
});

logoLink.addEventListener('click', () => { // Add a click event listener to the logo link
    if (!navLinks[0].classList.contains('active')) { // Check if the first navigation link does not have the 'active' class
        activePages(); // Call the activePages function
        navLinks[0].classList.add('active'); // Add the 'active' class to the first navigation link

        setTimeout(() => { //create the timeout for the animation for the section
            sections[0].classList.add('active'); // Add the 'active' class to the first section
        }, 1100); // Set the duration of the animation of 1100ms equivalent to 1.1s
    }
});

const aboutBtns = document.querySelectorAll('.about-btn'); // Select all about buttons

aboutBtns.forEach((btn, idx) => { // Loop through each about button
    btn.addEventListener('click', () => { // Add a click event listener to each about button
        const aboutDetails = document.querySelectorAll('.about-detail'); // Select all about details
        aboutBtns.forEach((btn) => { // Loop through all about buttons
            btn.classList.remove('active'); // Remove the 'active' class from all about buttons
        });
        btn.classList.add('active'); // Add the 'active' class to the clicked about button

        aboutDetails.forEach((detail) => { // Loop through all about details
            detail.classList.remove('active'); // Remove the 'active' class from all about details
        });
        aboutDetails[idx].classList.add('active'); // Add the 'active' class to the clicked about detail
    })
});

const arrowRight = document.querySelector('.projects-box .navigation .arrow-right'); // Select the right arrow button
const arrowLeft = document.querySelector('.projects-box .navigation .arrow-left'); // Select the left arrow button
let index = 0;

const activeProjects = () => { // Define the activeProjects function
    const imgSlide = document.querySelector('.projects-carousel .img-slide'); // Select the image slide element
    const projectDetails = document.querySelectorAll('.projects-detail'); // Select all project details

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`; // Set the transform property of the image slide element

    projectDetails.forEach((detail) => { // Loop through all project details
        detail.classList.remove('active'); // Remove the 'active' class from all project details
    });
    projectDetails[index].classList.add('active'); // Add the 'active' class to the clicked project detail
}

arrowRight.addEventListener('click', () => {
    if (index < 1) { // Check if index is less than 2
        index++; // Increment index
        arrowLeft.classList.remove('disabled'); // Remove the 'disabled' class from the left arrow
    }
    else {
        index = 2; // Set index to 2
        arrowRight.classList.add('disabled'); // Add the 'disabled' class to the right arrow
    }
    activeProjects(); // Call the activeProjects function
});

arrowLeft.addEventListener('click', () => {
    if (index > 1) { // Check if index is greater than 0
        index--; // Decrement index
        arrowRight.classList.remove('disabled'); // Remove the 'disabled' class from the right arrow
    }
    else { // If index is 0
        index = 0; // Set index to 0
        arrowLeft.classList.add('disabled'); // Add the 'disabled' class to the left arrow
    }
    activeProjects(); // Call the activeProjects function
});