$(document).ready(function() {
  $("#toggle").click(function() {
    $("#p").show();
     $("#toggle").hide();

    $("#p").click(function() {
      $("#toggle").show();
      $("#p").hide();
    });
  });
});
$(document).ready(function() {
  $("#toggle1").click(function() {
    $("#pp").show();
     $("#toggle1").hide();

    $("#pp").click(function() {
      $("#toggle1").show();
      $("#pp").hide();
    });
  });
});
$(document).ready(function() {
  $("#toggle2").click(function() {
    $("#ppp").show();
     $("#toggle2").hide();

    $("#ppp").click(function() {
      $("#toggle2").show();
      $("#ppp").hide();
    });
  });
$("#answer").click(function() {
  var message =(document.getElementById('you').value);
  var names = (document.getElementById('names').value);
  if (message !=="") {
    alert(names + ' we have received your message. Thank you fro reaching out to us.');

  }
});
});
