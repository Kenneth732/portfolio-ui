

document.addEventListener('DOMContentLoaded', function () {
    
    const profileButton = document.getElementById('profileButton');
    const dropdownMenu = document.getElementById('dropdownMenu');

    profileButton.addEventListener('click', function () {
        dropdownMenu.classList.toggle('show');
    });

    window.addEventListener('click', function (event) {
        if (!profileButton.contains(event.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var tabLinks = document.querySelectorAll('.tab-links');
    var tabContents = document.querySelectorAll('.tab_content ul li');

    tabLinks.forEach(function (link, index) {
        console.log('Here are the', link)
        link.addEventListener("click", function () {
            // Remove the 'active' class from all tab links
            tabLinks.forEach(function (link) {
                link.classList.remove('active');
            });

            // Add the 'active' class to the clicked tab link
            link.classList.add('active');

            // Hide all tab content elements
            tabContents.forEach(function (content) {
                content.style.display = 'none';
            });

            // Display the clicked tab content
            tabContents[index].style.display = 'block';
        });
    });
});
