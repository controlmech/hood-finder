
    var neighbourhoods;
    var slider=[neighbourhoods];
    var defaultScore=3;
    var userScore=0;
    var request=[];
//Accesses park data
request[0]=new XMLHttpRequest();
// Open a new connection, using the GET request on the URL endpoint
request[0].open('GET', 'https://opendata.arcgis.com/datasets/4f1b554e743b423f9574e7a3ca814cce_6.geojson', true);
request[0].onload = function () {
  // Begin accessing JSON data here
var parksData = JSON.parse(this.response);

if (request[0].status >= 200 && request[0].status < 400) {
    parksData.features.forEach(park => {
        console.log(park.properties.NAME);
    });
    console.log(parksData);
} else {
  console.log('error');
}
}
// Send request
//request[0].send();
//Accesses Recreation Center Data
request[1]=new XMLHttpRequest();
request[1].open('GET', 'https://opendata.arcgis.com/datasets/272667665de646768db14e9fa1676405_11.geojson', true);
request[1].onload = function () {
  // Begin accessing JSON data here
var recreationData = JSON.parse(this.response);
var recreationGeo =JSON.parse(this.response);
if (request[1].status >= 200 && request[1].status < 400) {
    recreationData.features.forEach(recreation => {
        console.log(recreation.properties.NAME);
    });
    recreationGeo.features.forEach(recreation => {
        console.log(recreation.geometry.coordinates[0],recreation.geometry.coordinates[1]);
    });
    console.log(recreationData);
} else {
  console.log('error');
}
}
request[1].send();
//Accesses Location of Libraries Data
request[2]=new XMLHttpRequest();
request[2].open('GET', 'https://opendata.arcgis.com/datasets/67a54ea25d944cf7b66750ba57da822c_1.geojson', true);
request[2].onload = function () {
  // Begin accessing JSON data here
var parksData = JSON.parse(this.response);

if (request[2].status >= 200 && request[2].status < 400) {
    parksData.features.forEach(park => {
        console.log(park.properties.NAME);
    });
    console.log(parksData);
} else {
  console.log('error');
}
}
//request[2].send();
// Accesses City Waterfalls Data
request[3]=new XMLHttpRequest();
request[3].open('GET', 'https://opendata.arcgis.com/datasets/51c6d946f91249828bc1c594ce1b27d1_16.geojson', true);
request[3].onload = function () {
  // Begin accessing JSON data here
var parksData = JSON.parse(this.response);

if (request[3].status >= 200 && request[3].status < 400) {
    parksData.features.forEach(park => {
        console.log(park.properties.NAME);
    });
    console.log(parksData);
} else {
  console.log('error');
}
}
//request[3].send();
//Accesses Educational Institutions Data
request[4]=new XMLHttpRequest();
request[4].open('GET', 'https://opendata.arcgis.com/datasets/51c6d946f91249828bc1c594ce1b27d1_16.geojson', true);
request[4].onload = function () {
  // Begin accessing JSON data here
var parksData = JSON.parse(this.response);
if (request[4].status >= 200 && request[4].status < 400) {
    parksData.features.forEach(park => {
        console.log(park.properties.NAME);
    });
    console.log(parksData);
} else {
  console.log('error');
}
}
//request[4].send();
//Accesses Museums and Neighbourhood Data
request[5]=new XMLHttpRequest();
request[5].open('GET', 'https://opendata.arcgis.com/datasets/6728810fb847489985d4b735502205a0_2.geojson', true);
request[5].onload = function () {
  // Begin accessing JSON data here
var parksData = JSON.parse(this.response);
if (request[5].status >= 200 && request[5].status < 400) {
    parksData.features.forEach(park => {
        console.log(park.properties.NAME);
    });
    console.log(parksData);
} else {
  console.log('error');
}
}
//request[5].send();
//Accesses Food Shops Data
request[6]=new XMLHttpRequest();
request[6].open('GET', 'https://opendata.arcgis.com/datasets/59afd6534e4849ccae93c9ed0049a445_14.geojson', true);
request[6].onload = function () {
  // Begin accessing JSON data here
var parksData = JSON.parse(this.response);
if (request[6].status >= 200 && request[6].status < 400) {
    parksData.features.forEach(park => {
        console.log(park.properties.NAME);
    });
    console.log(parksData);
} else {
  console.log('error');
}
}
//request[6].send();
//Licensed Food Establishments
request[7]=new XMLHttpRequest();
request[7].open('GET', 'https://opendata.arcgis.com/datasets/85c1b5c9e931470d94f0c9ff5acaa341_2.geojson', true);
request[7].onload = function () {
  // Begin accessing JSON data here
var parksData = JSON.parse(this.response);
if (request[7].status >= 200 && request[7].status < 400) {
    parksData.features.forEach(park => {
        console.log(park.properties.NAME);
    });
    console.log(parksData);
} else {
  console.log('error');
}
}
//request[7].send();
//Licensed Kennels and Pet Shops
request[8]=new XMLHttpRequest();
request[8].open('GET', 'https://opendata.arcgis.com/datasets/c5a848d9c40f4e83acb1cd73ab9f4508_3.geojson', true);
request[8].onload = function () {
  // Begin accessing JSON data here
var parksData = JSON.parse(this.response);
if (request[8].status >= 200 && request[8].status < 400) {
    parksData.features.forEach(park => {
        console.log(park.properties.NAME);
    });
    console.log(parksData);
} else {
  console.log('error');
}
}
//request[8].send();
//Licensed Second Hand Shops
request[9]=new XMLHttpRequest();
request[9].open('GET', 'https://opendata.arcgis.com/datasets/b1f09efe93a549d3b3f600d1d93b5305_12.geojson', true);
request[9].onload = function () {
  // Begin accessing JSON data here
var parksData = JSON.parse(this.response);
if (request[9].status >= 200 && request[9].status < 400) {
    parksData.features.forEach(park => {
        console.log(park.properties.NAME);
    });
    console.log(parksData);
} else {
  console.log('error');
}
}
//request[9].send();
//Census Profile by Census Tract-2016
request[10]=new XMLHttpRequest();
request[10].open('GET', 'https://opendata.arcgis.com/datasets/cdc66a4b09a147c39eeb747c15d5f9d8_4.geojson', true);
request[10].onload = function () {
  // Begin accessing JSON data here
var parksData = JSON.parse(this.response);
if (request[10].status >= 200 && request[10].status < 400) {
    parksData.features.forEach(park => {
        console.log(park.properties.NAME);
    });
    console.log(parksData);
} else {
  console.log('error');
}
}
//request[10].send();
//Bikeways
request[11]=new XMLHttpRequest();
request[11].open('GET', 'https://opendata.arcgis.com/datasets/544170b5b1be435592b1aea014265c7d_7.geojson', true);
request[11].onload = function () {
  // Begin accessing JSON data here
var parksData = JSON.parse(this.response);
if (request[11].status >= 200 && request[11].status < 400) {
    parksData.features.forEach(park => {
        console.log(park.properties.NAME);
    });
    console.log(parksData);
} else {
  console.log('error');
}
}
//request[11].send();
//Golf Courses
request[12]=new XMLHttpRequest();
request[12].open('GET', 'https://opendata.arcgis.com/datasets/544170b5b1be435592b1aea014265c7d_7.geojson', true);
request[12].onload = function () {
  // Begin accessing JSON data here
var parksData = JSON.parse(this.response);
if (request[12].status >= 200 && request[12].status < 400) {
    parksData.features.forEach(park => {
        console.log(park.properties.NAME);
    });
    console.log(parksData);
} else {
  console.log('error');
}
}
//request[12].send();
//Campgrounds
request[13]=new XMLHttpRequest();
request[13].open('GET', 'https://opendata.arcgis.com/datasets/544170b5b1be435592b1aea014265c7d_7.geojson', true);
request[13].onload = function () {
  // Begin accessing JSON data here
var parksData = JSON.parse(this.response);
if (request[13].status >= 200 && request[13].status < 400) {
    parksData.features.forEach(park => {
        console.log(park.properties.NAME);
    });
    console.log(parksData);
} else {
  console.log('error');
}
}
//request[13].send();
var neighborhoods = []
    function Profile(name, age, occupation, ethnicity, familySize, income, residentStatus){
        this.name = name;
        this.name = age;
        this.occupation = occupation;
        this.ethnicity = ethnicity;
        this.familySize = familySize;
        this.income = income;
        this.residentStatus = residentStatus;
    }

    function SliderData(housing, recreation, commercial, food, transportation){
        this.housing = housing;
        this.recreation = recreation;
        this.commercial = commercial;
        this.food = food;
        this.transportation = transportation;
    }

    function NeighborhoodData(housing, recreation, commercial, food, transportation, name){
        this.housing = housing;
        this.recreation = recreation;
        this.commercial = commercial;
        this.food = food;
        this.transportation = transportation;
        this.name = name;
        var score = 0;
    }
    
    // Make every neighborhood
    var neighborhood1 = NeighborhoodData(1,2,3,4,5,"somewhere");
    var neighborhood2 = NeighborhoodData(3,2,2,4,1,"somewhereelse");

    var neighborhoods = [neighborhood1, neighborhood2];

    // Make objects for user data in the user object 
    user.profile = new Profile(name, age, occupation, ethnicity, familySize, income, residentStatus);
    user.sliderData = new SliderData(housing, recreation, commercial, food, transportation);
    
    function compare(a,b){
        if (a.score < b.score)
            return -1;
        if (a.score > b.score)
            return 1;
        return 0;
    }

    var user = {
        findNeighborhood: function(){
            // Returns array of neighborhoods sorted from best to worst
            var i = 0;
            for (n in neighborhoods){
                // Gets a score from 0-5
                neighborhoods[n].score = (20 - ((Math.abs((user.housing) - (neighborhoods[n].housing))) +
                            (Math.abs((user.recreation) - (neighborhoods[n].recreation))) +
                            (Math.abs((user.commercial) - (neighborhoods[n].commercial))) +
                            (Math.abs((user.food) - (neighborhoods[n].food))) +
                            (Math.abs((user.transportation) - (neighborhoods[n].transportation)))))/4;
                i++;
            }
            neighborhoods.sort(compare);
        }
    };

    user.findNeighborhood();
    for(i = (neighborhoods.length) - 1; i >= (neighborhoods.length) - 6; i--){
        document.write(neighborhoods[i].name, ", score out of 5 : ", neighborhoods[i].score, "<br />");
    }
