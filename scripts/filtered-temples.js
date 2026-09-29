const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
    // Add more temple objects here...
  
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated:"2004, January, 11",
        area: 17500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },
    
    {
        templeName: "Kinshasa Democratic Republic of the Congo",
        location: "Kinshasa, Democratic Republic of the Congo",
        dedicated: "2019, April, 14",
        area: 12000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-3533-main.jpg"
    },
    
    {
        templeName: "Durban South Africa",
        location: "Durban, South Africa",
        dedicated: "2020, February, 16",
        area: 19860,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-72674-main.jpg"
    }
    
];




const navigation = document.querySelector('#navigation');
const hamburger = document.querySelector('#menu');


// Hamburger button
hamburger.addEventListener('click', () => {
    if (navigation.style.display === 'none') {
        hamburger.classList.toggle('open');
        navigation.style.display = 'flex';
    }

    else {
        hamburger.classList.remove('open');
        navigation.style.display = 'none';
    }
});



// Get the current year

const currentYear = document.querySelector('#currentyear');

const currentDate = new Date().getFullYear();

currentYear.textContent = currentDate;

document.querySelector('#lastmodified').textContent = `Last modified: ${document.lastModified}`;



const main = document.querySelector('main');



function showTemples(listTemples) {

  main.innerHTML = listTemples.map(data =>
        `
    <div class="card">
        <div class="card-content">
        <h1>${data.templeName}</h1>
        <p><span>Location:</span> ${data.location}</p>
        <p><span>Dedicated:</span> ${data.dedicated}</p>
        <p><span>Size:</span> ${data.area}</p>
        </div>
        <img src="${data.imageUrl}" loading="lazy" alt="${data.templeName}">
    </div>
    `
  ).join('');

}

showTemples(temples);


document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {

    e.preventDefault();

    const currentLink = e.currentTarget;

    document.querySelectorAll('nav a').forEach(a => {
      a.classList.remove('active');
      a.style.backgroundColor = '';
    });
    currentLink.classList.add('active');
    currentLink.style.backgroundColor = 'red';




    if (e.target.id === "old") {
      showTemples(temples.filter(t => parseInt(t.dedicated.split(',')[0]) < 1900));
      
     
    }
    else if (e.target.id === "new") {
      showTemples(temples.filter(t => parseInt(t.dedicated.split(',')[0]) > 2000));
    }
    else if (e.target.id === "large") {
      showTemples(temples.filter( t => t.area > 90000 ));
    }
    else if (e.target.id === "small") {
      showTemples(temples.filter( t => t.area < 10000 ));
    }
    else {
      showTemples(temples);
        
    }
  })
});
