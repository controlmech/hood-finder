    var neighbourhoods;
    var slider=[neighbourhoods];
    var defaultScore=3;
    var userScore=0;
    // Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://opendata.arcgis.com/datasets/4f1b554e743b423f9574e7a3ca814cce_6.geojson', true);
request.onload = function () {
  // Begin accessing JSON data here
var parksData = JSON.parse(this.response);

if (request.status >= 200 && request.status < 400) {
    parksData.features.forEach(park => {
        console.log(park.properties.NAME);
    });
    console.log(parksData);
} else {
  console.log('error');
}
}
// Send request
request.send();
    
var neighborhoods = [];

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

    var user;
    user.profile = new Profile(name, age, occupation, ethnicity, familySize, income, residentStatus);
    user.sliderData = new SliderData(housing, recreation, commercial, food, transportation);

    userData.prototype.findNeighborhood = function(){
        // computes numbers
        // return a neighbourhood
    }
