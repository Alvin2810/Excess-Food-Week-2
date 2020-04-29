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
  $('#output').click(function(){
  $('#choosefile').trigger('click'); });
});

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

  function hideChoosefile(){
    var choosefile = document.getElementById('choosefile');
    choosefile.addEventListener('click', showPicture, false);
  }
  function showPicture() {
     document.getElementById('output').style.display = "block";
  }
window.addEventListener('load', hideChoosefile, false)
