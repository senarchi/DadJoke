document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('.rocker input');

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            // If the checkbox is checked, redirect to landing.html
            window.location.href = 'landing.html';
        }
    });
});
