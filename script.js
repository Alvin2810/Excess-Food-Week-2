function myAlert() {
  alert("Your Donation has been Submitted");
}
var loadFile = function(event) {
  var output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
  output.onload = function() {
    URL.revokeObjectURL(output.src)
  }
};

$(document).ready(function(){
  $("#choosefile").click(function(){
    $("#choosefile").hide();
  })});

  function open_Expense(){
    var expense1 = document.getElementById('choosefile');
    expense1.addEventListener('click', showaddExpense, false);
  }
  function showaddExpense() {
     document.getElementById('output').style.display = "block";
  }
window.addEventListener('load', open_Expense, false)
