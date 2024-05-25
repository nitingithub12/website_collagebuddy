// Get the search bar element
const searchBar = document.getElementById('search-bar');

// Add an event listener to the search bar
searchBar.addEventListener('input', (event) => {
  // Get the user's input
  const searchTerm = event.target.value;

  // Filter the results based on the user's input
  const filteredResults = allResults.filter((result) => {
    return result.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Display the filtered results on the page
  displayResults(filteredResults);
});

// Sample data for the search functionality
const allResults = [
  { title: 'Video Lecture 1' },
  { title: 'Recorded Notes 2' },
  { title: 'PYQ Set 3' },
  { title: 'Important Question 4' },
  { title: 'College Buddy 5' },
];

// Function to display the results on the page
function displayResults(results) {
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.innerHTML = '';
  results.forEach((result) => {
    const resultElement = document.createElement('div');
    resultElement.textContent = result.title;
    resultsContainer.appendChild(resultElement);
  });
}