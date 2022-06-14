const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries =>{
    console.log(countries[0]);
    const countriesHTML = countries.map(country =>getCountryHTML(country));
    // console.log(CountriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

// Original
//const getCountryHTML = country =>{
     // Original
    // return `
    //     <div class="country">
    //         <h2>${country.name.common}</h2>
    //         <img src="${country.flags.png}">
    //     </div>   
    // `
    
    //Option 1 destructing
// const getCountryHTML = country =>{
//     const {name, flags} = country;
//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}">
//         </div>   
//     `    
// }

// Option 2
const getCountryHTML = ({name, flags, area}) =>{

    return `
        <div class="country">
            <h2>${name.common}</h2>
            <h2>Area: ${area}</h2>
            <img src="${flags.png}">
        </div>   
    `    
}

loadCountries();