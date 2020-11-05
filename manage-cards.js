var count_map = new Map();
count_map.set('interest-1', 0);
count_map.set('interest-2', 0);
count_map.set('interest-3', 0);

function addCard(elem_id){
    int_id = document.getElementById(elem_id);
    
    // get interest count
    let count = count_map.get(elem_id);
    console.log("Adding tweet #" + count +" at " + elem_id);

    int_id.innerHTML += '<div class="card" style="width: 18rem;" id="' + elem_id +'-' + count +'"><a class="btn btn-danger btn-sm ml-auto" role="button" onclick=\'removeCard("' + elem_id +'-' + count +'")\' style="border-radius: 20em;">-</a><img class="card-img-top" src="assets/twitter.PNG" alt="Twitter logo"><div class="card-body"><h5 class="card-title">Tweet</h5><p class="card-text">Sample tweet will go here!</p></div></div>'

    // set interest count
    count_map.set(elem_id, count + 1);
}

function removeCard(elem_id){
    console.log("Removing " + elem_id);

    document.getElementById(elem_id).outerHTML = "";
}