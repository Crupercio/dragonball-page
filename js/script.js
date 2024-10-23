// Function to generate character cards and display them
function loadCharacterCards() {
    // Fetch character data from the JSON file
    fetch('../data/characters.json')
        .then(response => response.json())
        .then(characters => {
            const characterCardsContainer = document.getElementById('characterCards');

            // Loop through the characters and create a card for each
            characters.forEach(character => {
                // Create the card div
                const card = document.createElement('div');
                card.classList.add('character-card');

                // Add the image to the card
                const img = document.createElement('img');
                img.src = character.image;
                img.alt = character.name;
                card.appendChild(img);

                // Add the name to the card
                const name = document.createElement('h3');
                name.innerText = character.name;
                card.appendChild(name);

                // Add the description to the card (optional)
                const description = document.createElement('p');
                description.innerText = character.description;
                card.appendChild(description);

                // Add the button to view the character page
                const button = document.createElement('button');
                button.innerText = `View ${character.name}`;
                button.onclick = () => {
                    // Navigate to the character's page using URL hash (or query string)
                    window.location.href = `./character.html#${character.id}`;
                };
                card.appendChild(button);

                // Append the card to the container
                characterCardsContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading character data:', error));
}

// Load character cards when the page loads
window.addEventListener('load', loadCharacterCards);
