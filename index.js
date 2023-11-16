document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('.rocker input');
    console.log('Checkbox',checkbox.checked);

   // Check if the page has been reloaded
   if (localStorage.getItem('pageReloaded')) {
    console.log('Page has been reloaded');
    window.location.href = 'index.html';
}

// Set localStorage to indicate that the page has been loaded
localStorage.setItem('pageReloaded', true);


    // Check the initial state of the checkbox
    if (checkbox.checked) {
        // If the switch is on, redirect to landing.html
        window.location.href = 'landing.html';
    }

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            // If the switch is checked, redirect to landing.html
            window.location.href = 'landing.html';
        } else {
            // If the switch is not checked, do nothing on change (you can add specific logic here)
        }
    });
});
