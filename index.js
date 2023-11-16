document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('moodCheckbox');

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            // If the checkbox is checked, redirect to the landing page
            window.location.href = 'landing.html';
        } else {
            // If the checkbox is unchecked, you can add specific logic or do nothing
            // For example, you might want to display a message or perform some other action
        }
    });
});
