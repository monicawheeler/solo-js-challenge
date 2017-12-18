console.log('scripts.js loaded');

$(document).ready(divManager);

function divManager() {
  // Event Listeners
  $('#generate-btn').on('click', divCreator);

  function divCreator () {
    // Append div to DOM when generate is clicked
    $('#content-container').append('<div class="block"></div>');
    // Create <p>
    $('.block').html('<p>' + count + '</p>');
    // Create buttons for swap and delete
    $('.block').html('<button class="swap-button">Swap</button><button class="delete-button">Delete</button>');
  }

}
