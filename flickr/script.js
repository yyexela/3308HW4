var page = 1;
var num = 0;
var tags = "";
var per_page = 1;

function makeApiCall(){
    console.log("Making API Call");
    page = 1;
    num = document.getElementById("image-cnt").value;
    tags = document.getElementById("image-tag").value;
    console.log("count: \"" + num + "\", tags: \"" + tags + "\"");

    execApiCall();
}

function execApiCall(){
    console.log("Page " + page + ", num: " + num);
    // Make API call
    let url = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=9ceae671a581c754d80443c06b1479ae&tags=" + tags + "&per_page=" + num + "&page=" + page +"&privacy_filter=1&safe_search=1&extras=url_sq&format=json";
    $.ajax({url:url, dataType:"jsonp"})
    page++;
}

/*
    <div id="flickr-div">
        <div class="card">
            <img class="card-img-top" src="https://live.staticflickr.com/65535/50568071087_0b65c46e93_s.jpg" alt="Flickr Image">
            <div class="card-body">
                <h5 class="card-title" style="text-align: center; font-size: 18px;">Image Title</h5>
            </div>
        </div>
    </div>
*/

// Function called when data received
function jsonFlickrApi(data){
    let flickr_div = document.getElementById("flickr-div")
    data.photos.photo.forEach(element => {
        let link = element.url_sq;
        let title = element.title;
        let content = 
        `
        <div class="card">
            <img class="card-img-top" src="` + link + `" alt="` + title + `">
            <div class="card-body">
                <h5 class="card-title" style="text-align: center; font-size: 18px;">` + title + `</h5>
            </div>
        </div>
        `
        flickr_div.innerHTML += content;
    });
}

var lazyCheckBottom = _.debounce(checkBottom, 300);
$(window).scroll(lazyCheckBottom);

function checkBottom(){
    let offset = 10;
    if($(window).scrollTop() + $(window).height() > $(document).height() - offset) {
        execApiCall();
    }
}