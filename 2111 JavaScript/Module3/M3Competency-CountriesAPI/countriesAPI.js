//API KEY: d6740df6189fee72280c3abdbb5aa765
// Final endpoint: http://api.countrylayer.com/v2/all?access_key=<d6740df6189fee72280c3abdbb5aa765>
// Testing endpoint: https://raw.githubusercontent.com/Davis-Technical-College/countries-json/master/countries.json

const apiURL = 'http://api.countrylayer.com/v2/all?access_key=d6740df6189fee72280c3abdbb5aa765'
const form = document.querySelector('form');
const input = document.querySelector('.search');
const div = document.querySelector('div');
let countryData = null;
const pullData = resource => {

return new Promise((resolve, reject) => {

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            resolve(data);
        } else if(request.readyState === 4){
            reject('error getting resource');
        };
    });

    request.open('GET', resource);
    request.send();
    
});
};

pullData(apiURL).then(data => {
    countryData = data;
}).catch(err => {
    console.log(err);
})

form.addEventListener('submit', e => {

    e.preventDefault();
    if(form.choice.value === 'info'){
        countryInfo(input.value);
    } else if(form.choice.value === 'list'){
        countryList(input.value);
    } else if(form.choice.value === 'domain'){
        countryDomain(input.value);
    };

});
//Get info function
function countryInfo(searchTerm){
    div.innerHTML = null;
    let search = String(searchTerm.toLowerCase());
    let resultCount = 0
    div.innerHTML += `<p>About ${searchTerm}</p>`;
    countryData.forEach(countryData => {
        if(countryData.name.toLowerCase().includes(search)){
            let countryName = countryData.name;
            let regionName = countryData.region;
            let topLevelDomain = countryData.topLevelDomain;
            const infoTemplate = `
                <p class="item">country: ${countryName}</p>
                <p class="item">region: ${regionName}</p>
                <p class="item">top level domain: ${topLevelDomain}</p><br>
            `
            div.innerHTML += infoTemplate;
            resultCount ++;
        } 

    });
    if(resultCount === 0){
        div.innerHTML += `<p>That country was not found, check spelling</p>`
    }
}

//List countries in region
function countryList(searchTerm){
    div.innerHTML = null;
    let search = String(searchTerm.toLowerCase());
    let resultCount = 0
    div.innerHTML += `<p>Countries in region: ${searchTerm}</p>`;
    countryData.forEach(countryData => {
        if(countryData.region.toLowerCase().includes(search)){
            let countryName = countryData.name;
            const infoTemplate = `
                <p class="item">${countryName}</p>
            `
            div.innerHTML += infoTemplate;
            resultCount ++;
        } 

    });
    div.innerHTML += `<p>Count of countries in region ${searchTerm} is ${resultCount}</p>`
    if(resultCount === 0){
        div.innerHTML += `<p>That region was not found, check spelling</p>`
    }

}

//Find country by top level domain
function countryDomain(searchTerm){
    div.innerHTML = null;
    let search = String(searchTerm.toLowerCase());
    let resultCount = 0;
    countryData.forEach(countryData => {
        if(countryData.topLevelDomain[0].replaceAll('.','') == search){
            let countryName = countryData.name;
            const infoTemplate = `
                <p class="item">Top Level Domain .${search} is for ${countryName}</p>
            `
            div.innerHTML += infoTemplate;
            resultCount ++;
        } 

    });
    if(resultCount === 0){
        div.innerHTML += `<p>That domain was not found, check spelling, no periods, please</p>`
    }
}