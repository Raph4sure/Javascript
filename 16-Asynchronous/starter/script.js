'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `   <article class="country ${className}">
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
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

/* const getCountryAndNeighbour = function (country) {
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
      const response = JSON.parse(this.responseText);
      const data2 = response[0]
      console.log(data2);

      renderCountry(data2, "neighbour")
    })
  });
};

getCountryAndNeighbour('nigeria');
//getCountryAndNeighbour('france');
//getCountryData('usa');
 */

// Using Promises

/* const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`).then(response => response.json()).then(data => renderCountry(data[0]))
};

getCountryData('nigeria'); */

/* // Normal function
const getCountryData = function (country) {
  // Counntry 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(function (response){
    return response.json()
})
    .then(function (data) {
      renderCountry(data[0], 'neighbour')
    });
};
getCountryData('nigeria'); */

// Arrow function

/* const getCountryData = function (country) {
  // Counntry 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'));
};
getCountryData('nigeria'); */

//Handling error

// Before creating function
/* const getCountryData = function (country) {
  // Counntry 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error('No neighbour found!')

      // Country 2
      return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Country not found');
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour')).catch(err => {
      console.error(`${err} 🚫 🚫 🚫`);
      renderError(`Something went wrong 🚫🚫 ${err.message}. Try again!`)
    }).finally(() => {
      countriesContainer.style.opacity = 1;
    })
};
btn.addEventListener('click', function () {
  getCountryData('niria');
}); */

const getJSON = function (url, errorMsg = 'Something Went Wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  // Counntry 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      if (!data[0]) throw new Error('No data returned for country');
      renderCountry(data[0]);

      const borders = data[0].borders;
      if (!borders || borders.length === 0)
        throw new Error('No neighbour found!');

      const neighbour = borders[0];

      /* renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) throw new Error('No neighbour found!'); */

      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
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
btn.addEventListener('click', function () {
  // getCountryData('nigeria');
  getCountryData('Australia');
});
