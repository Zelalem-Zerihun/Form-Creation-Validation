// Function to fetch and display user data
async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users"; // API endpoint
  const dataContainer = document.getElementById("api-data"); // Data container element

  try {
    // Fetch data from API
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear the loading message
    dataContainer.innerHTML = "";

    // Create a <ul> element
    const userList = document.createElement("ul");

    // Loop through the users and create list items
    users.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = user.name; // Set user name
      userList.appendChild(listItem); // Append list item to the <ul>
    });

    // Append the <ul> to the data container
    dataContainer.appendChild(userList);
  } catch (error) {
    // Handle errors and display error message
    dataContainer.innerHTML = "Failed to load user data.";
    console.error("Error fetching user data:", error);
  }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener("DOMContentLoaded", fetchUserData);
