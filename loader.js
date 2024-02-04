document.addEventListener('DOMContentLoaded', function () {
    // Simulate a delay (e.g., 2 seconds) before redirecting to the home page
    setTimeout(function () {
        alert('Redirecting now');
      // Redirect to the home page
        window.location.href = 'home.html';
    }, 5000); // Adjust the delay as needed
});

