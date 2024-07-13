const temples = [
          {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
          },
          {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
          },
          {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
          },
          {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
          },
          {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
          },
          {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
          },
          {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
          },
          {
            templeName: "Salt Lake",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1893, April, 6",
            area: 253015,
            imageUrl: "images/salt-lake.jpg"
          },
          {
            templeName: "Bengaluru India",
            location: "Bengaluru, India",
            dedicated: "TBA",
            area: 40000,
            imageUrl: "images/bengaluru-india.jpg"
          },
          {
            templeName: "Chicago Illinois",
            location: "Chicago, Illinois, United States",
            dedicated: "1985, August, 9",
            area: 38600,
            imageUrl: "images/chicago illinois.jpg"
          },
          // Add more temple objects as needed...
        ];
        
        document.addEventListener('DOMContentLoaded', () => {
            const templeContainer = document.getElementById('templeContainer');
        
            function displayTemples(templeList) {
                templeContainer.innerHTML = '';
                templeList.forEach(temple => {
                    const templeCard = document.createElement('div');
                    templeCard.className = 'temple-card';
                    
                    templeCard.innerHTML = `
                        <h2>${temple.templeName}</h2>
                        <p>Location: ${temple.location}</p>
                        <p>Dedicated: ${temple.dedicated}</p>
                        <p>Area: ${temple.area} sq ft</p>
                        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                    `;
        
                    templeContainer.appendChild(templeCard);
                });
            }
        
            function filterTemples(criteria) {
                const filteredTemples = temples.filter(temple => {
                    switch(criteria) {
                        case 'old':
                            return new Date(temple.dedicated).getFullYear() < 1900;
                        case 'new':
                            return new Date(temple.dedicated).getFullYear() > 2000;
                        case 'large':
                            return temple.area > 90000;
                        case 'small':
                            return temple.area < 10000;
                        default:
                            return true;
                    }
                });
        
                displayTemples(filteredTemples);
            }
        
            document.getElementById('filterOld').addEventListener('click', () => filterTemples('old'));
            document.getElementById('filterNew').addEventListener('click', () => filterTemples('new'));
            document.getElementById('filterLarge').addEventListener('click', () => filterTemples('large'));
            document.getElementById('filterSmall').addEventListener('click', () => filterTemples('small'));
            document.getElementById('filterHome').addEventListener('click', () => displayTemples(temples));
        
            // Display all temples by default
            displayTemples(temples);
            
            // Update footer with the current year and last modified date
      
        });
        document.addEventListener('DOMContentLoaded', () => {
          const hamburger = document.getElementById('hamburger');
          const nav = document.querySelector('nav');
          const logo = document.querySelector('.logo');
      
          hamburger.addEventListener('click', () => {
              nav.classList.toggle('active');
              hamburger.classList.toggle('active');
              logo.classList.toggle('hidden');
          });
      
          const currentYearSpan = document.getElementById('currentYear');
          const currentYear = new Date().getFullYear();
          if (currentYearSpan) {
              currentYearSpan.textContent = currentYear;
              console.log(`Current Year: ${currentYear}`);
          } else {
              console.error('Element with id "currentYear" not found.');
          }
      
          const modifySpan = document.getElementById('modify');
          const lastModified = new Date(document.lastModified);
          const formattedLastModified = lastModified.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
          });
          if (modifySpan) {
              modifySpan.textContent = formattedLastModified;
              console.log(`Last Modified: ${formattedLastModified}`);
          } else {
              console.error('Element with id "modify" not found.');
          }
      });
        