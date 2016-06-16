$(document).ready(function() {
  $("form").submit(function(event) {

    var items = [$("#item1").val(), $("#item2").val(), $("#item3").val(), $("#item4").val(), $("#item5").val()];
    items.sort();

    var updatedGrocery = items.map(function(item){
      return item.toUpperCase();

    });
    console.log(updatedGrocery);
    event.preventDefault();
  });
});
