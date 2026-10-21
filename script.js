document.addEventListener('DOMContentLoaded', () => {

    // ১. আপনার WhatsApp নম্বর (Country code 88 সহ)
    const whatsappNumber = "8801602187133";

    // ২. Mobile Drawer Navigation
    const menuToggle = document.getElementById('menuToggle');
    const closeDrawer = document.getElementById('closeDrawer');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuToggle && mobileDrawer) {
        menuToggle.addEventListener('click', () => {
            mobileDrawer.classList.add('active');
        });

        closeDrawer.addEventListener('click', () => {
            mobileDrawer.classList.remove('active');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('active');
            });
        });
    }

    // ৩. Modal Open & Close Logic
    const bookingModal = document.getElementById('bookingModal');
    const closeModal = document.getElementById('closeModal');
    const openModalBtns = document.querySelectorAll('.open-modal-btn');
    const serviceSelect = document.getElementById('serviceSelect');
    const appointmentForm = document.getElementById('appointmentForm');

    // মডাল ওপেন করা এবং সার্ভিস অটো-সিলেক্ট করা
    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedService = btn.getAttribute('data-service');
            if (selectedService && serviceSelect) {
                serviceSelect.value = selectedService;
            }
            bookingModal.classList.add('active');
        });
    });

    // মডাল বন্ধ করা (X বাটনে ক্লিক করলে)
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            bookingModal.classList.remove('active');
        });
    }

    // মডালের বাইরে ক্লিক করলে বন্ধ হওয়া
    window.addEventListener('click', (e) => {
        if (e.target === bookingModal) {
            bookingModal.classList.remove('active');
        }
    });

    // ৪. ফর্ম জমা দিলে সমস্ত ডেটা নিয়ে WhatsApp-এ পাঠানোর মেকানিক
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // ইনপুট ফিল্ড থেকে ডাটা সংগ্রহ
            const inputs = appointmentForm.querySelectorAll('input');
            const fullName = inputs[0].value;
            const phone = inputs[1].value;
            const service = serviceSelect.value;
            const date = inputs[2].value;
            const time = inputs[3].value;

            // সুন্দর ফরম্যাট করা হোয়াটসঅ্যাপ মেসেজ
            const message = `Hello Fade & Co., I want to book an appointment!%0A%0A` +
                `👤 *Name:* ${fullName}%0A` +
                `📞 *Phone:* ${phone}%0A` +
                `✂️ *Service:* ${service}%0A` +
                `📅 *Date:* ${date}%0A` +
                `⏰ *Time:* ${time}`;

            // WhatsApp URL তৈরি
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

            // নতুন ট্যাবে WhatsApp ওপেন করা
            window.open(whatsappUrl, '_blank');

            // ফর্ম রিসেট ও মডাল বন্ধ করা
            bookingModal.classList.remove('active');
            appointmentForm.reset();
        });
    }

});