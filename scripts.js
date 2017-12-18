console.log('scripts.js loaded');

$(document).ready(divManager);

function divManager() {
  // Event Listeners
  $('#generate-btn').on('click', divCreator);
  $('#content-container').on('click', '.swap-button', colorSwapper);

  function divCreator () {
    // Append div to DOM when generate is clicked
    $('#content-container').append('<div class="block"></div>');
    // Create <p> tag
    var count = 0;
    $('.block').html('<p>' + count + '</p>');
    // Create buttons for swap and delete
    $('.block').html('<button class="swap-button">Swap</button><button class="delete-button">Delete</button>');
  }

  function colorSwapper() {
    // Swap color with toggleClass on button click
    $(this).parents('.block').toggleClass('yellow');
  }

}
