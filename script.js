$(document).ready(function(){
$('#donate').click(function(){
   if($('#name').val() !== ''){
      alert("The Donation has been Submitted");
   }
})});

$(document).ready(function(){
$('#upload').click(function(){
   if($('#dishname').val() !== ''){
      alert("Your Recipe has been Uploaded");
   }
})});

$(document).ready(function(){
$('#submitrequest').click(function(){
      alert("Your Pickup Request has been submitted");
   })});

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
