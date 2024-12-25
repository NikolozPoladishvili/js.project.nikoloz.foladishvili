// Handle Signup Form Submission
document.getElementById('signupForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Simulate account creation and store data in localStorage
    const user = { firstName, lastName, email, password };
    
    // Get existing users data from localStorage (if any)
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the email already exists
    if (users.find(user => user.email === email)) {
        alert('Email already registered!');
        return;
    }

    // Add the new user to the users array
    users.push(user);
    
    // Store updated users list back into localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert('Account created successfully! Redirecting to login page...');
    window.location.href = "login.html"; // Redirect to login page
});

// Handle Login Form Submission
document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Fetch users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user with matching email and password
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login successful!');
        window.location.href = "contactus.html";
    } else {
        alert('Invalid email or password!');
    }
});
document.getElementById('nameC').addEventListener('input', function () {
    const nameField = document.getElementById('nameC');
    if (nameField.value.trim() === '') {
        nameField.style.borderColor = 'red';
        document.getElementById('nameError').innerText = 'Name is required';
    } else {
        nameField.style.borderColor = 'green';
        document.getElementById('nameError').innerText = '';
    }
});

document.getElementById('emailC').addEventListener('input', function () {
    const emailField = document.getElementById('emailC');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(emailField.value)) {
        emailField.style.borderColor = 'green';
        document.getElementById('emailError').innerText = '';
    } else {
        emailField.style.borderColor = 'red';
        document.getElementById('emailError').innerText = 'Invalid email format';
    }
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.trim() === '') {
        alert('Please enter your name.');
        return;
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        alert('Please enter a valid email.');
        return;
    }
    if (message.trim() === '') {
        alert('Please enter a message.');
        return;
    }

    alert('Form submitted successfully!');
    document.getElementById('contactForm').reset();

    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
});

document.getElementById('contactForm').addEventListener('input', function () {
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
});
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Example data object
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Sending the form data using Fetch API
    fetch('https://your-server-endpoint-url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData) // Send the form data as JSON
    })
    .then(response => response.json())
    .then(data => {
        // Handle the server response
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset(); // Reset the form
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form.');
    });
});


    document.getElementById('joinBtn').addEventListener('click', function () {
    window.location.href = 'index.html';
});

