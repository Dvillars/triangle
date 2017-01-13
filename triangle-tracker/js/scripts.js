$(function() {
  var side1, side2, side3;
  $('form').submit(function() {
    $('.not').hide();
    $('.equal').hide();
    $('.iso').hide();
    $('.scl').hide();

    side1 = parseFloat($('#val1').val())
    side2 = parseFloat($('#val2').val())
    side3 = parseFloat($('#val3').val())

    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2){
      $('.not').show();
    } else if (side1 === side2 && side2 === side3) {
      $('.equal').show();
    } else if (side1 === side2 && side1 !== side3 || side1 === side3 && side1 !== side2 || side3 === side2 && side3 !== side1) {
      $('.iso').show();
    } else if (side1 + side2 > side3 || side2 + side3 > side1 || side1 + side3 > side2){
      $('.scl').show();
    } else {
      console.log("Error, please enter value above");
    }
    event.preventDefault();
  });
});
