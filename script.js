// Array of band names
let bandNames = ['The Rolling Stones', 'Aerosmith', 'The Beatles', 'Led Zeppelin', 'Nirvana'];

// Function to remove articles and sort band names
function sortBandNames(bandNames) {
    // Define articles to be excluded
    const articles = ['a', 'an', 'the'];

    // Sort the band names lexicographically, excluding articles
    bandNames.sort((a, b) => {
        const nameA = a.replace(/^(a|an|the)\s+/i, ''); // Remove articles from A
        const nameB = b.replace(/^(a|an|the)\s+/i, ''); // Remove articles from B
        return nameA.localeCompare(nameB);
    });
}

// Sort the band names
sortBandNames(bandNames);

// Create an unordered list and add list items
const ul = document.getElementById('band');

bandNames.forEach((bandName) => {
    const li = document.createElement('li');
    li.textContent = bandName;
    ul.appendChild(li);
});


