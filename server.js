document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevents the click from closing immediately
            navList.classList.toggle('active');
            mobileMenu.classList.toggle('open');
            console.log("Menu toggled!"); // You can check this in the console (F12)
        });

        // Optional: Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !navList.contains(e.target)) {
                navList.classList.remove('active');
                mobileMenu.classList.remove('open');
            }
        });
    }
});
