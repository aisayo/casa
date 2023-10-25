$(function() {
  var $button = $('#add-standard-court-order-button');
  var $dropdownContent = $button.find('.standard-dropdown-content');
  var $selectedOptionBox = $('#selected-option-box');

  $button.on("click", function() {
    $dropdownContent.addClass("show");
  });

  $dropdownContent.find('.option').on("click", function() {
    var selectedOption = $(this).data('option');
    $selectedOptionBox.html('Selected Option: ' + selectedOption);
    $dropdownContent.hide();
  });

  $(document).on("click", function(event) {
    if (!$(event.target).is($button) && !$(event.target).is($dropdownContent)) {
      $dropdownContent.hide();
    }
  });
});