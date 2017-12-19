console.log('scripts.js loaded');

$(document).ready(divManager);

var count = 0;
function divManager() {
  // Event Listeners
  $('#generate-btn').on('click', divCreator);
  $('#content-container').on('click', '.swap-button', colorSwapper);
  $('#content-container').on('click', '.delete-button', divDeleter);

  function divCreator () {
    count++;
    //console.log(count);
    
    // Stringing the append's increased the counts for each of the divs

    // $('.block').append('<p class="number-value">' + count + '</p><button class="swap-button">Swap</button><button class="delete-button">Delete</button>');

    // // Append div to DOM when generate is clicked
    // // Create buttons for swap and delete
    // // Create p tag to grab for count

    $block = $('<div class="block">');  
    $block.append('<p class="number-value">' + count + '</p>');
    $block.append('<button class="swap-button">Swap</button>');
    $block.append('<button class="delete-button">Delete</button>');

    $('#content-container').append($block);
    
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


