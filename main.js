var platform = new H.service.Platform({
  'app_id': 'xGmQiK6gdcySbGHGzc1F',
  'app_code': 'HWnoi_5vJyFMRKc4OjgYLw'
});

var links = ['https://opendata.arcgis.com/datasets/4f1b554e743b423f9574e7a3ca814cce_6.geojson',
            'https://opendata.arcgis.com/datasets/272667665de646768db14e9fa1676405_11.geojson',
            'https://opendata.arcgis.com/datasets/cccae6f029334927856da6e20a50561f_19.geojson',
            'https://opendata.arcgis.com/datasets/59afd6534e4849ccae93c9ed0049a445_14.geojson',
            'https://opendata.arcgis.com/datasets/67a54ea25d944cf7b66750ba57da822c_1.geojson',
            'https://opendata.arcgis.com/datasets/51c6d946f91249828bc1c594ce1b27d1_16.geojson',
            'https://opendata.arcgis.com/datasets/6728810fb847489985d4b735502205a0_2.geojson',
            'https://opendata.arcgis.com/datasets/85c1b5c9e931470d94f0c9ff5acaa341_2.geojson',
            'https://opendata.arcgis.com/datasets/c5a848d9c40f4e83acb1cd73ab9f4508_3.geojson',
            'https://opendata.arcgis.com/datasets/b1f09efe93a549d3b3f600d1d93b5305_12.geojson',
            'https://opendata.arcgis.com/datasets/14b1385cc0b64934b73bbbf8a41dadbd_7.geojson',
            'https://opendata.arcgis.com/datasets/3669f2701ec64e36b4fa8b524c0e5075_8.geojson',
            'https://opendata.arcgis.com/datasets/7208e686d19d4c13a2e3325de61060da_5.geojson',
            'https://opendata.arcgis.com/datasets/544170b5b1be435592b1aea014265c7d_7.geojson',
            'https://opendata.arcgis.com/datasets/8334940386d844edbb13089e7e77af7c_1.geojson',
            'https://opendata.arcgis.com/datasets/a5867b5375544ceb8f06544a5ed349a5_15.geojson',
            'https://opendata.arcgis.com/datasets/cccae6f029334927856da6e20a50561f_19.geojson',
            'https://opendata.arcgis.com/datasets/715c85740bc84c1b90a3a9f5ae1d2f96_16.geojson',
            ];

var data = new Array(links.length);
var request = new Array(links.length);
var apartmentPricing = [34390.5,34693.5,36284.25,41283.75,35754,31133.25,30981.75,32042.25,31360.5,30072.75,33102.75,31360.5,33633,32042.25,29845.5,30603];
var housePricing = [12726,14241,19316.25,16210.5,12347.25,13862.25,11514,12271.5,12726,12423,13786.5,12347.25,11589.75,10453.5,11741.25,11741.25];
var parksData = [];
var recreationGeo = [];
var request = [];

for (var i = 0; i < links.length; i++) {
    request[i] = new XMLHttpRequest();
    // Open a new connection, using the GET request on the URL endpoint
    request[i].open('GET', links[i], true);
}
request[0].onload = function() {
    data[0] = JSON.parse(this.response);
}
request[0].send();
request[1].onload = function() {
    data[1] = JSON.parse(this.response);
}
request[1].send();
request[2].onload = function() {
    data[2] = JSON.parse(this.response);
}
request[2].send();
request[3].onload = function() {
    data[3] = JSON.parse(this.response);
}
request[3].send();
request[4].onload = function() {
    data[4] = JSON.parse(this.response);
}
request[4].send();
request[5].onload = function() {
    data[5] = JSON.parse(this.response);
}
request[5].send();

var parkDistances = [];
var recDistances = [];
var schoolDistances = [];
var foodDistances = [];
function processData() {
    var landmarks = doc.getElementsByTagName("Placemark");

    // Parks
    for (var i = 0; i < landmarks.length; i++) {
        var coordinates = landmarks[i].getElementsByTagName("coordinates")[0].childNodes[0].nodeValue.split(" ").map(a => a.split(",").map(b => parseFloat(b)));
        var minDistance = 100;
        for (var k = 0; k < data[0].features.length; k++) {
            var distance1 = distance(coordinates, data[0].features[k].geometry.coordinates[0][0]);
            if (!isNaN(distance1))
                minDistance = Math.min(minDistance, distance1);
        }
        parkDistances.push(minDistance * 100);
    }

    // Recreation centres
    for (var i = 0; i < landmarks.length; i++) {
        var coordinates = landmarks[i].getElementsByTagName("coordinates")[0].childNodes[0].nodeValue.split(" ").map(a => a.split(",").map(b => parseFloat(b)));
        var minDistance = 100;
        for (var k = 0; k < data[1].features.length; k++) {
            var distance1 = distance(coordinates, data[1].features[k].geometry.coordinates);
            if (!isNaN(distance1))
                minDistance = Math.min(minDistance, distance1);
        }
        recDistances.push(minDistance * 100);
    }

    // Schools
    for (var i = 0; i < landmarks.length; i++) {
        var coordinates = landmarks[i].getElementsByTagName("coordinates")[0].childNodes[0].nodeValue.split(" ").map(a => a.split(",").map(b => parseFloat(b)));
        var minDistance = 100;
        for (var k = 0; k < data[2].features.length; k++) {
            var distance1 = distance(coordinates, data[2].features[k].geometry.coordinates);
            if (!isNaN(distance1))
                minDistance = Math.min(minDistance, distance1);
        }
        schoolDistances.push(minDistance * 100);
    }

    // Food stores
    foodDistances = new Array(landmarks.length).fill(100);
    for (var k = 0; k < data[3].features.length; k++) {
        var geocoder = platform.getGeocodingService();
        geocoder.geocode({
            searchText: data[3].features[k].properties.BUSINESS_ADDRESS
        }, function(result) {
            var latitude = result.Response.View[0].Result[0].Location.DisplayPosition.Latitude, longitude = result.Response.View[0].Result[0].Location.DisplayPosition.Longitude;
            for (var i = 0; i < landmarks.length; i++) {
                var coordinates = landmarks[i].getElementsByTagName("coordinates")[0].childNodes[0].nodeValue.split(" ").map(a => a.split(",").map(b => parseFloat(b)));
                var distance1 = distance(coordinates, [longitude, latitude]);
                if (!isNaN(distance1))
                    foodDistances[i] = Math.min(foodDistances[i], distance1 * 100);
            }
        }, function(e) {
          alert(e);
        });
    }
}

function distance(list, point1) {
    var point2 = [0, 0]; // average points from list
    for (var i = 0; i < list.length; i++){
        point2[0] += list[i][0];
        point2[1] += list[i][1];
    }
    point2[0] /= list.length;
    point2[1] /= list.length;

    var distance = Math.sqrt((Math.pow(point2[0] - point1[0], 2)) + (Math.pow(point2[1] - point1[1], 2)));
    return distance;
}

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

function SliderData(housePrice,houseImportance,recDist,recImportance,comDist,comImportance,entDist,entImportance,
     restDist,restImportance){
    this.housePrice = housePrice;
    this.houseImportance = houseImportance;
    this.recDist = recDist;
    this.recImportance = recImportance;
    this.comDist = comDist;
    this.comImportance = comImportance;
    this.entDist = entDist;
    this.entImportance = entImportance;
    this.restDist = restDist;
    this.restImportance = restImportance;
}

function NeighborhoodData(housePrice, recDist, comDist, restDist, entDist, transDist, name){
    this.housePrice = housePrice;
    this.recDist = recDist;
    this.comDist = comDist;
    this.restDist = restDist;
    this.entDist = entDist;
    this.transDist = transDist;
    this.name = name;
    var score = 0;
}

// Make every neighborhood
var neighborhoods = [];

for (i = 0; i < 237; i++){
    // Construct data for each neighborhood in here
    var neighborhood = NeighborhoodData(housePrice,recDist,comDist,restDist,transDist,name);
    neighborhoods.push(neighborhood);
}

// Make objects for user data in the user object
user.profile = new Profile(name, age, occupation, ethnicity, familySize, income, residentStatus);
user.sliderData = new SliderData(document.getElementById("housePrice").value,
                                document.getElementById("houseImportance").value,
                                document.getElementById("recDist").value,
                                document.getElementById("recImportance").value,
                                document.getElementById("comDist").value,
                                document.getElementById("comImportance").value,
                                document.getElementById("entDist").value,
                                document.getElementById("entImportance").value,
                                document.getElementById("restDist").value,
                                document.getElementById("restImportance").value);

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
            neighborhoods[n].score = Math.abs(user.SliderData.housePrice)



            /*
            (20 - ((Math.abs((user.housing) - (neighborhoods[n].housing))) +
                        (Math.abs((user.recreation) - (neighborhoods[n].recreation))) +
                        (Math.abs((user.commercial) - (neighborhoods[n].commercial))) +
                        (Math.abs((user.food) - (neighborhoods[n].food))) +
                        (Math.abs((user.transport) - (neighborhoods[n].transport)))))/4;*/
            i++;
        }
        neighborhoods.sort(compare);
    }
};

user.findNeighborhood();
for(i = (neighborhoods.length) - 1; i >= (neighborhoods.length) - 6; i--){
    document.write(neighborhoods[i].name, ", score out of 5 : ", neighborhoods[i].score, "<br />");
}
