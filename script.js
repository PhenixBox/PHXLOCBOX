// Logic for navigation and form handling
document.getElementById('formPage1').addEventListener('submit', function(e) {
    e.preventDefault();

    // Save the selected storage solution
    const selectedBox = document.getElementById('box').value;
    sessionStorage.setItem('boxChoice', selectedBox);

    // Redirect to Page 2
    window.location.href = 'page2.html';
});

// On page 2 load, display the chosen box details
if (document.getElementById('boxDetails')) {
    const chosenBox = sessionStorage.getItem('boxChoice');
    document.getElementById('boxDetails').textContent = `Vous avez choisi : ${chosenBox} (tarif mensuel).`;
}

// Event listener for the "Valider et procéder au paiement" button
document.getElementById('accepterButton').addEventListener('click', function() {
    // Check if the checkbox is checked
    if (document.getElementById('acceptCGU').checked) {
        // Proceed to Page 3
        window.location.href = 'page3.html';
    } else {
        // Show an alert if the checkbox is not checked
        alert('Vous devez accepter les CGU et CGV pour continuer.');
    }
});

// On page 3, handle the payment button
document.getElementById('paiementButton')?.addEventListener('click', function() {
    // Here you would integrate Stripe or other payment system
    alert('Redirection vers le paiement...');
    // You can replace this with actual Stripe integration code
});
