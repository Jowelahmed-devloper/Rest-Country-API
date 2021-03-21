fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => getCountries(data));

const getCountries = countries =>{
    const countriesDiv = document.getElementById('country-name');
    for(let i =0; i<countries.length;i++){
        const country = countries[i]
        const countryDiv = document.createElement('div')
        countryDiv.className = 'country'
        // const countryName = document.createElement('h2')
        // countryName.innerText = country.name;
        // const countryCapital = document.createElement('h4')
        // countryCapital.innerText = country.capital;
        
        // countryDiv.appendChild(countryName);
        // countryDiv.appendChild(countryCapital);
        // countriesDiv.appendChild(countryDiv);

        const countryInfo = `
        <h2 class="name">${country.name}</h2>
        <h4>${country.capital}</h4>
        <button onclick="displayCountryDetail('${country.name}')">Show Details</button>
        `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
    }
}
const displayCountryDetail = name =>{
    url =`https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));
}

const renderCountryInfo = country=>{
    const countryDiv = document.getElementById('countryInfo');
    countryDiv.innerHTML = `
        <h2>Name: ${country.name}</h2>
        <h4>Capital: ${country.capital}</h4>
        <p>Population: ${country.population}</p>
        <p>Area: ${country.area}</p>
        <img src="${country.flag}">
    `
}