document.addEventListener('DOMContentLoaded', () => {
    // Mobile Drawer Setup
    const menuToggle = document.getElementById('menuToggle');
    const closeDrawer = document.getElementById('closeDrawer');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuToggle && mobileDrawer) {
        menuToggle.addEventListener('click', () => mobileDrawer.classList.add('active'));
        closeDrawer.addEventListener('click', () => mobileDrawer.classList.remove('active'));
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => mobileDrawer.classList.remove('active'));
        });
    }

    // Calendly Popup Setup for BOOK NOW Buttons
    const openModalBtns = document.querySelectorAll('.open-modal-btn');
    const calendlyUrl = "https://calendly.com/mdsajib-00888/30min";

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (typeof Calendly !== 'undefined') {
                Calendly.initPopupWidget({ url: calendlyUrl });
            } else {
                window.open(calendlyUrl, '_blank');
            }
        });
    });
});