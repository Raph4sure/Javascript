const renderCountry = function (data) {
  // Check if data.flags exists, otherwise use a default value
  const flagUrl = data.flags ? data.flags.png : 'default-flag-url.png';

  const html = `
    <article class="country">
      <img class="country__img" src="${flagUrl}" />
      <!-- Rest of your code... -->
    </article>`;

  // Rest of your code...
};





const renderCountry = function (data) {
    const html = `   <article class="country">
          <img class="country__img" src="${data.flags.png}" />
  
  



  'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data) {
    const html = `   <article class="country">
          <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
           <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>           
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} million people</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>    
        </div>
        </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);


      renderCountry(data2)
    })
  });
};

getCountryAndNeighbour('portugal');
//getCountryAndNeighbour('france');
//getCountryData('usa');


request.addEventListener('load', function () {
  const response = JSON.parse(this.responseText);
  if (!response || response.length === 0) {
    console.log('No data returned from API');
    return;
  }

  // If response is an array, use the first element
  const data = Array.isArray(response) ? response[0] : response;
  console.log(data);

  // Rest of your code...
});

























'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data) {
    const html = `   <article class="country">
          <img class="country__img" src="${data.flags.png}" />
            <div class="country__data">
           <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>           
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} million people</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>    
        </div>
        </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      console.log(this.responseText);
      // const data2 = JSON.parse(this.responseText);
      // console.log(data2);


      // renderCountry(data2)
    })
  });
};

getCountryAndNeighbour('portugal');
//getCountryAndNeighbour('france');
//getCountryData('usa');




const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      if (!data[0]) throw new Error('No data returned for country');

      renderCountry(data[0]);

      const borders = data[0].borders;
      if (!borders || borders.length === 0) throw new Error('No neighbour found!');

      const neighbour = borders[0];

      // Country 2
      return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Country not found');
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 🚫 🚫 🚫`);
      renderError(`Something went wrong 🚫🚫 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
