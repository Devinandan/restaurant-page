const loadMenu = () => {
    const content = document.querySelector('#content');
    content.innerHTML = ''; //clear existing content

    const headline = document.createElement('h1');
    headline.textContent = 'Our Menu';
    content.appendChild(headline);

    const menuItems = [
        { name: 'Pasta', price: '$12' },
        { name: 'Pizza', price: '$15' },
        { name: 'Salad', price: '$8' },
    ];

    menuItems.forEach((item) => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} : ${item.price}`;
        content.appendChild(itemDiv);
    });
    
};

export default loadMenu;