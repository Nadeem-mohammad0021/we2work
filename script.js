function openWhatsapp(message) {
    const phoneNumber = '+916302924074'; // Replace with your WhatsApp phone number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

document.getElementById('helpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    openWhatsapp('I need help !!');
});

