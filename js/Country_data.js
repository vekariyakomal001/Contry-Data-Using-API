var country_name = ["germany","canada"];
let section1 = document.getElementById("sec1");
let section2 = document.getElementById("sec2");
let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");
console.log(country_name);

btn1.addEventListener("click", function() {
var pageRequest = new XMLHttpRequest();
pageRequest.open('GET', 'https://restcountries.com/v2/name/canada');
pageRequest.responseType = "json";

pageRequest.onload = function () {
    let responses = pageRequest.response;
    
    countryHTML(responses);
    
console.log(responses);
};
pageRequest.send();

});
btn2.addEventListener("click", function() {
    var pageRequest = new XMLHttpRequest();
    pageRequest.open('GET', 'https://restcountries.com/v2/name/germany');
    pageRequest.responseType = "json";
    
    pageRequest.onload = function () {
        let responses = pageRequest.response;
        
        countryHTML(responses);
        
    console.log(responses);
    };
    pageRequest.send();
    
    });
function countryHTML(country) {
    var country_detail = "";
    var heading = document.createElement("h2");
    heading.textContent = "Country Name : " + country[0].name;
    section1.appendChild(heading);

    var img = document.createElement("img");
    img.src = country[0].flags.png;
    var img_content = document.createElement("h2");
    img_content.textContent = "Contry Flag : ";
    section1.appendChild(img_content);
    img.style.height = '50px';
    img.style.width = '100px';
    img_content.appendChild(img);

    var neighbor_country = document.createElement("h2");
    neighbor_country.textContent = "Neighboring Country: " + country[0].borders;
    section1.appendChild(neighbor_country);

    var region = document.createElement("h2");
    region.textContent = "Country Region: " + country[0].region;
    section1.appendChild(region);

    var population = document.createElement("h2");
    population.textContent = "Population: " + country[0].population;
    section1.appendChild(population);

    var language = document.createElement("h2");
    language.textContent = "Language: " + country[0].languages[0].name;
    section1.appendChild(language);

    var currency = document.createElement("h2");
    currency.textContent = "Currency: " + country[0].currencies[0].code;
    section1.appendChild(currency);
}









