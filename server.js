document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simple validation (for demo purposes)
    if (username === 'user' && password === 'password') {
      // Redirect to the main blog page
      window.location.href = 'index.html';
    } else {
      // Show error message
      document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
  });

  const recipes = [
    { id: "recipe1", name: "Fluffy Pancakes", description: "Start your day with these delicious, fluffy pancakes." },
    { id: "recipe2", name: "Spicy Pasta", description: "A quick and tasty pasta dish with a spicy twist." },
    { id: "recipe3", name: "Classic Burger", description: "A juicy, mouth-watering burger for all occasions." },
    { id: "recipe4", name: "Margherita Pizza", description: "A classic pizza with fresh mozzarella and basil." },
    { id: "recipe5", name: "Vegetarian Sushi", description: "Healthy and delicious sushi rolls for sushi lovers." },
    { id: "recipe6", name: "Beef Tacos", description: "Spicy beef tacos with fresh toppings and salsa." },
    { id: "recipe7", name: "Caesar Salad", description: "A fresh and crunchy salad with a creamy dressing." },
    { id: "recipe8", name: "Chicken Curry", description: "A flavorful curry with tender chicken and spices." },
    { id: "recipe9", name: "Chocolate Cake", description: "A rich and decadent chocolate cake for dessert lovers." },
    { id: "recipe10", name: "Berry Smoothie", description: "A refreshing smoothie packed with berries and yogurt." },
    { id: "recipe11", name: "New Food 1", description: "Description for the new food item 1." },
    { id: "recipe12", name: "New Food 2", description: "Description for the new food item 2." },
];

// Search functionality
document.getElementById("searchButton").addEventListener("click", function () {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase().trim();
    const matchedRecipes = recipes.filter((recipe) => recipe.name.toLowerCase().includes(searchQuery));

    if (matchedRecipes.length > 0) {
        if (matchedRecipes.length === 1) {
            // Redirect if only one match is found
            window.location.href = `recipe.html#${matchedRecipes[0].id}`;
        } else {
            // Display multiple search results
            const resultsContainer = document.getElementById("searchResults");
            resultsContainer.innerHTML = ""; // Clear previous results

            matchedRecipes.forEach(recipe => {
                const recipeItem = document.createElement("div");
                recipeItem.innerHTML = `<a href="recipe.html#${recipe.id}">${recipe.name}</a> - ${recipe.description}`;
                resultsContainer.appendChild(recipeItem);
            });
        }
    } else {
        alert("No matching recipe found. Please try again.");
    }
});
