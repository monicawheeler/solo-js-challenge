console.log('scripts.js loaded');

$(document).ready(divManager);

function divManager() {
  // Event Listeners
  $('#generate-btn').on('click', divCreator);

  function divCreator () {
    // Append div to DOM when generate is clicked
    $('#content-container').append('<div class="block"></div>');
    // Create <p> when div count
    var count = 0;
    $('.block').html('<p>' + count + '</p>');
  }

}
