const btn = document.querySelector('.btn');
const dateTxt = document.querySelector('.dateTime_txt');
const locTxt = document.querySelector('.location_txt');

const dateTime = new Date();
let myLocation;


const sucessfulLookup = (position) => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=f104d40321254758aab49a33c27d3f11`).then(response => response.json()).then(data => poo(data));
};

function poo(x) {
    x.results.forEach(element => {
        myLocation = element.formatted;
    });
}
navigator.geolocation.getCurrentPosition(sucessfulLookup, console.log);

btn.addEventListener('click', () => {
    dateTxt.innerText += ` ${dateTime}`;
    locTxt.innerText += `${myLocation}`;
    btn.style.display = 'none';

});