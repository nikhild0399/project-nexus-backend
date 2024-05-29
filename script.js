document.getElementById('show-signup').addEventListener('click', function() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
});

document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});

// Handling form submissions
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle login functionality
});

document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Handle signup functionality
});
