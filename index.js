var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var response = JSON.parse(xhttp.responseText);
       var photoData = response.photos.map(function(photo) {
            return photo;
       })
       var header = document.querySelector(".header");
       var container = document.querySelector("#photo-divs");
       container.innerHTML = "";
       photoData.forEach(function(photo) {
            console.log(photo);
            var photoDiv = document.createElement("div");
            photoDiv.classList.add("photo-div");
            photoDiv.innerHTML = `
                <img src=${photo.src.large}>
            `;
            container.appendChild(photoDiv);
       })

       console.log(photoData);
    }
};
xhttp.open("GET", "https://api.pexels.com/v1/search?query=people", true);
xhttp.setRequestHeader('Authorization', 'DKCTkvQyBFrCTlmJOtyNuaHqXgwIUXUQsyGAgKhAskFEdpczujTbZuL6');
xhttp.send();