// Function to load character data based on the URL hash
function loadCharacterFromHash() {
    const characterId = window.location.hash.substring(1); // Get the character ID from the URL hash

    if (characterId) {
        // Fetch character data from the JSON file
        fetch('../data/characters.json')
            .then(response => response.json())
            .then(characters => {
                // Find the character based on the ID in the URL
                const character = characters.find(c => c.id === characterId);

                // Display the character information
                if (character) {
                    document.getElementById('characterName').innerText = character.name;
                    document.getElementById('characterImage').src = character.image;
                    document.getElementById('characterImage').alt = character.name;
                    document.getElementById('characterDescription').innerText = character.description;
                } else {
                    document.getElementById('characterName').innerText = "Character not found";
                    document.getElementById('characterImage').style.display = "none";
                    document.getElementById('characterDescription').innerText = "";
                }
            })
            .catch(error => console.error('Error loading character data:', error));
    }
}

// Load character info automatically when the page loads
window.addEventListener('load', loadCharacterFromHash);
