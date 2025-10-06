// Buttons
const submitButton = document.querySelector('button[type="submit"]');
const returnButton = document.querySelector('button[type="reset"]');
// Sections
const sectEmail = document.querySelector('section.email');
const sectSuccess = document.querySelector('section.success');
// Form
const formElement = document.querySelector('form');
// Output
const emailOutput = document.querySelector('span.email')

// Event listener - Submit button
submitButton.addEventListener('click', (e) => {
    // Stop from using the GET command.
    e.preventDefault()
    let allFormElValid = true;

    // For each element in the form check for it's state:
    formElement.querySelectorAll('input').forEach( (node) => {
        if (false === node.validity.valid) {
            allFormElValid = false;
            node.classList.add('error');
            node.previousElementSibling.lastElementChild.classList.remove('hidden');
        } else {
            node.classList.remove('error');
            node.previousElementSibling.lastElementChild.classList.add('hidden');
        }
    } )

    // Check if all forms were valid
    if (true == allFormElValid)
    {

        // Set the email address the user has inputted.
        emailOutput.textContent = formElement.querySelector('input[type="email"]').value;

        // Hide the email section
        sectEmail.classList.add('hidden');
        sectEmail.setAttribute('hidden', true);

        // Unhide the success section
        sectSuccess.classList.remove('hidden');
        sectSuccess.removeAttribute('hidden');

        
    }
})

// Event listener - Dismiss button
returnButton.addEventListener('click', () => {
    // Unhide the email section
    sectEmail.classList.remove('hidden');
    sectEmail.removeAttribute('hidden');

    // Hide the success section
    sectSuccess.classList.add('hidden');
    sectSuccess.setAttribute('hidden', true);

    // Reset the form
    formElement.reset();
})