$(document).ready(function(){
  $("form#luckquiz").submit(function(event){
    event.preventDefault();
    var unluckyResponses = [];
    var luckyResponses = [];
    var luckyFortune = "You will have good luck";
    var unluckyFortune = "You will have bad luck";
    var neutralFortune = "You will have ambivalent luck";
    $("input:checkbox[name=lucky]:checked").each(function(){
        var lucky = $(this).val();
        luckyResponses.push(lucky);
      });
    $("input:checkbox[name=unlucky]:checked").each(function(){
        var unlucky = $(this).val();
        unluckyResponses.push(unlucky);
      });
      if (luckyResponses.length > unluckyResponses.length) {
        $("#fortune").text(luckyFortune);
      }
      else if (luckyResponses.length < unluckyResponses.length) {
        $("#fortune").text(unluckyFortune);
      }
      else {
        $("#fortune").text(neutralFortune);
      }

  });
});
