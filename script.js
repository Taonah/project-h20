let locationButton = document.getElementById("get-location");
let locationDiv = document.getElementById("location-details");

locationButton.addEventListener("click", () => {

    if (navigation.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, checkError);
    
}
else {
locationDiv.innerText ="the browser does not support geolocation";

}
});
//error check
const checkError = (error) => {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            locationDiv.innerText ="please allow acess to location";
            break;
            case error.POSITION_UNAVAILABLE:
                locationDiv.innerText="Location information unavailable";
                break;
            case error.TIMEOUT:
                locationDiv.innerText = "The request to get user location time out";

    }
};
const showLocation = async (position) => {
    let response = await fetch 
    ("https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longtitude}&format=json");
let data = await response.json();
locationDiv.innerText = "${data. address.city}, ${data.address.country}";
};
