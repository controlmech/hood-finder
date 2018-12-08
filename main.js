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
