console.log('scripts.js loaded');

$(document).ready(divManager);

function divManager() {
// Event Listeners
$('#generate-btn').on('click', divCreator);

function divCreator () {
  console.log('divCreator ran');
  $('#content-container').append('<div></div>');
}

}
