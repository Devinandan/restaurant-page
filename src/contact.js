const loadContact = () => {
    const content = document.querySelector('#content');
    content.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = 'Contact Us';

    const address = document.createElement('p');
    address.textContent = '123 Main Street, City, Country';
  
    const phone = document.createElement('p');
    phone.textContent = 'Phone: +1 234 567 890';
  
    content.appendChild(headline);
    content.appendChild(address);
    content.appendChild(phone);
  };
  
export default loadContact;
