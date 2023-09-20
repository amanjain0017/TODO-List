function getandupdate(){
    tit = document.getElementById("title").value;
    desc = document.getElementById("description").value;
    console.log("Updating List...");

    // Get the existing data from local storage
    let itemsJson = localStorage.getItem("itemsJson");
    
    // Check if itemsJson is null or not
    if (itemsJson === null) {
        // If it's null, create a new array and add data
        itemsJsonArray = [];
        itemsJsonArray.push([tit, desc]);
    } else {
        // If it's not null, parse the JSON data and add to the existing array
        itemsJsonArray = JSON.parse(itemsJson);
        itemsJsonArray.push([tit, desc]);
    }
    
    // Save the updated array to local storage
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));

    form = getElementById("temp");
    form.reset();
    update();
}

function update(){

    // Get the existing data from local storage
    let itemsJson = localStorage.getItem("itemsJson");
    
    // Check if itemsJson is null or not
    if (itemsJson === null) {
        // If it's null, create a new array and add data
        itemsJsonArray = [];

    } else {
        // If it's not null, parse the JSON data and add to the existing array
        itemsJsonArray = JSON.parse(itemsJson);
    }
    
    //populating the table
    let tablebody = document.getElementById("tablebody");
    let str = "";
    
    itemsJsonArray.forEach((element,index) => {
        
        str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-sm btn-primary" onclick = "deleted(${index})">Delete</button></td>
            </tr> `;
        });

    tablebody.innerHTML = str;
}


function deleted(itemindex){
    console.log("Deleted ",itemindex);

    itemsJsonArrayStr = localStorage.getItem("itemsJson");
    itemsJsonArray = JSON.parse(itemsJsonArrayStr);

    //delete item index from the array
    itemsJsonArray.splice(itemindex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    update();
}

function clearstorage(){
    if(confirm("Are you sure you want to clear the list?")){

        console.log("Clearing the storage...");
        localStorage.clear();
        update();
    }
}

//adding event listener to "add to list" button
add = document.getElementById("add");
add.addEventListener("click", getandupdate);

//display the already present items
update();







