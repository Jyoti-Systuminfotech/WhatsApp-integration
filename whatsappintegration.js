// JavaScript code for WhatsApp Live Chat integration

// Function to open WhatsApp chat window
function openWhatsAppChat() {
    var number = $('.whatsapp-btn').data('number');
    var message = encodeURIComponent('How can I help you?');
    var whatsappURL = 'https://wa.me/' + number + '?text=' + message;
    window.open(whatsappURL, '_blank');
  }
  
  $(document).ready(function() {
    // Open WhatsApp chat when the WhatsApp button is clicked
    $(document).on('click', '.whatsapp-btn', function() {
      openWhatsAppChat();
    });
  });
  