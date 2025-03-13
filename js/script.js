// Add zoom and pop-up effect to images
document.querySelectorAll('.zoom-effect').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
        img.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
        img.style.boxShadow = 'none';
    });
});

// Add WhatsApp floating button functionality
document.addEventListener("DOMContentLoaded", function () {
    if (!document.querySelector('.whatsapp-button')) {
        let whatsappButton = document.createElement("div");
        whatsappButton.innerHTML = `
            <a href="https://wa.me/1234567890" target="_blank">
                <img src="images/whatsapp-logo.png" 
                alt="WhatsApp" 
                style="width:60px;height:60px;position:fixed;bottom:20px;right:20px;cursor:pointer;">
            </a>`;
        document.body.appendChild(whatsappButton);
    }
});
