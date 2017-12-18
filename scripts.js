console.log('scripts.js loaded');

$(document).ready(divManager);

var count = 1;
function divManager() {
  // Event Listeners
  $('#generate-btn').on('click', divCreator);
  $('#content-container').on('click', '.swap-button', colorSwapper);
  $('#content-container').on('click', '.delete-button', divDeleter);

  function divCreator () {
    // Append div to DOM when generate is clicked
    $('#content-container').append('<div class="block"></div>');
    // Create buttons for swap and delete
    // Create p tag to grab for count
    $('.block').html('<p class="number-value"></p><button class="swap-button">Swap</button><button class="delete-button">Delete</button>');
    clickCounter();
  }


  // Could not figure out his portion of the project
  function clickCounter() {
    $('.number-value').text(count);
    count++;
  }

  function colorSwapper() {
    // Swap color with toggleClass on button click
    $(this).parents('.block').toggleClass('yellow');
  }

  function divDeleter() {
    // Deletes div container on button click
    $(this).parents('.block').remove();
  }
}
