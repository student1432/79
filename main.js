var pizzaitems = ["PeppyPaneer", "MexicanGreenWave", "DeluxeVeggie", "VegExtravaganza", "CHEESENCORN"];

function showButton()
{
  document.getElementById("div_Pizza").innerHTML = pizzaitems;

}
 


function button_add_a(){

    var x = document.getElementById("input_add").value;
    pizzaitems.push(x)
}