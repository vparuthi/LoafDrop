'use strict';

var json = JSON.stringify("../product.json");

var name;
var weight;
var price;

console.log(json);

function printJson(json){
    console.log("List of items");
    for(var i = 0; i < json.length; i++){

        name = toString(json.list[i].product_name);
        weight = json.list[i].net_weight;
        price = json.list[i].shelf_width;

        console.log(name);
        console.log(weight);
        console.log(price);
    }
}
printJson(json);

// function getItems(){

//     for(var i = 0; i < parsed.length; i++){
//         name = parsed[i].product_name;
//         weight = parsed[i].gross_weight;
//         price = parsed[i].shelf_width;
//     }
    
// }