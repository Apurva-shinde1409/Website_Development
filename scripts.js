// Search Bar Interactivity
document.getElementById("searchButton").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value;
    alert(`Searching for: ${query}`);
});
