const navLinks = document.querySelectorAll('.nav-all ul li a');
const sideNavLinks = document.querySelectorAll('.mobile-menu ul li a');
const header = document.getElementById('header');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        mobileMenuWrapper.style.visibility = 'hidden';
    });
});

sideNavLinks.forEach(link => {
    link.addEventListener('click', function() {
        sideNavLinks.forEach(nav => nav.classList.remove('active_nav'));
        this.classList.add('active_nav');
        mobileMenuWrapper.style.visibility = 'hidden';
    });
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

(function() {
    emailjs.init("jVejH8qQen5dp6PTm"); // Replace with your actual user ID
})();

// Handle form submission
document.getElementById("contact_form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    // Prepare the data to send
    const from_name = document.getElementById("from_name").value;
    const message = document.getElementById("message").value;
    const reply_to = document.getElementById("reply_to").value;

    emailjs.send("service_3g9zrqf", "template_xm0ql69", {
        from_name: from_name,
        message: message,
        from_mail: reply_to,
    }).then(function(response) {
        alert("Success!");
    }, function(error) {
        alert("Failed!");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".about-tab-item");
    const tabContents = document.querySelectorAll(".about--right > div[id]");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove("is-active"));
            this.classList.add("is-active");

            // Hide all tab contents
            tabContents.forEach(content => content.style.display = "none");

            // Show the selected tab content
            const selectedContent = document.getElementById("c_" + this.id);
            if (selectedContent) {
                selectedContent.style.display = "block";
            }
        });
    });

    // Initialize by showing only the active tab content
    document.querySelector(".about-tab-item.is-active")?.click();
});

