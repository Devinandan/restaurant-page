import createRestaurantHomePage from './restaurant';
import loadMenu from './menu';
import loadContact from './contact';
import './style.css';


// Load page

createRestaurantHomePage();


document.getElementById('button-1').addEventListener('click', createRestaurantHomePage);
document.getElementById('button-2').addEventListener('click', loadMenu);
document.getElementById('button-3').addEventListener('click', loadContact);



