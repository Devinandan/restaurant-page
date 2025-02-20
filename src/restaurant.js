// appending the image, headline, etc

//import { container } from "webpack";

const createRestaurantHomePage = () => {

    
    const content = document.querySelector('#content');
    content.innerHTML = '';
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');
    const nav = document.querySelector('nav');

    if(!nav.querySelector('h1')) {

    
    //Create and append headline element
    const headline = document.createElement('h1');
    headline.textContent = "Welcome to the Hotel California";
    nav.appendChild(headline);
    };
    
    // create buttons
    if(nav.querySelectorAll('button').length === 0) {
        const navButtons = document.createElement('div');
        navButtons.classList.add('nav-buttons');
        const buttonLabels = ['Home', 'Menu', 'Contact'];
        buttonLabels.forEach((label, index) => {
        const button = document.createElement('button');
        button.textContent = label;

        button.classList.add('custom-button');
        button.id = `button-${index + 1}`;

        navButtons.appendChild(button);
    });
    nav.appendChild(navButtons);
};

    
    

    

     //Create and append image element
     const image = document.createElement('img');
     image.src = 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hotel';
     image.height = '600';
     image.classList.add('img');
     pageContent.appendChild(image);


    //Create and append copy element
    const copy = document.createElement('div');
    
    copy.textContent = 'Step into a world of refined luxury and unparalleled dining at Hotel California. Nestled in the heart of Pondicherry, our fine dining restaurant offers an exquisite blend of gourmet cuisine, impeccable service, and a sophisticated ambiance. Join us for an unforgettable culinary journey that celebrates the art of fine dining.';
    
    copy.classList.add('box');
    pageContent.appendChild(copy);
    content.appendChild(pageContent);
};

export default createRestaurantHomePage;