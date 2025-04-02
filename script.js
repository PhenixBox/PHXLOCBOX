// Logic for navigation and form handling
document.getElementById('formPage1').addEventListener('submit', function(e) {
    e.preventDefault();

    // Save the selected storage solution
    const selectedBox = document.getElementById('box').value;
    sessionStorage.setItem('boxChoice', selectedBox);

    // Redirect to Page 2
    window.location.href = 'page2.html';
});

// Fonction pour afficher les informations de la box choisie sur la page 2
document.addEventListener('DOMContentLoaded', function() {
    // Récupérer le choix de stockage de la session
    const boxChoice = sessionStorage.getItem('boxChoice');

    // Afficher le choix de stockage sur la page 2
    const boxDetails = document.getElementById('boxDetails');
    if (boxChoice) {
        boxDetails.textContent = `Vous avez choisi : ${boxChoice} (tarif mensuel).`;
    }

    // Sélectionner la case à cocher et le bouton
    const checkbox = document.getElementById('acceptCGU');
    const button = document.getElementById('accepterButton');

    // Fonction pour activer ou désactiver le bouton selon l'état de la case
    function toggleButtonState() {
        button.disabled = !checkbox.checked;
    }

    // Ajouter un événement pour détecter les changements de la case
    checkbox.addEventListener('change', toggleButtonState);

    // Ajouter un événement au bouton pour rediriger vers la page 3 si la case est cochée
    button.addEventListener('click', function() {
        if (checkbox.checked) {
            window.location.href = 'page3.html';  // Rediriger vers la page 3
        } else {
            alert('Vous devez accepter les CGU et CGV pour continuer.');
        }
    });
});


// On page 3, handle the payment button
document.getElementById('paiementButton')?.addEventListener('click', function() {
    // Here you would integrate Stripe or other payment system
    alert('Redirection vers le paiement...');
    // You can replace this with actual Stripe integration code
});
