$(document).ready(function() {
  $("form").submit(function(event) {

    var items = [$("#item1").val(), $("#item2").val(), $("#item3").val(), $("#item4").val(), $("#item5").val()];
    items.sort();

    var updatedGrocery = items.map(function(item){
      return item.toUpperCase();

    });
    updatedGrocery.forEach(function(updateItem){
      $("ul#updatedGrocery").append("<li>" + updateItem + "</li>");
    });
    console.log(updatedGrocery);
    event.preventDefault();

    $("form").hide();
    $("#updatedGrocery").show();
  });
});
