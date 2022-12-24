// ### **Part 1:**

// Given a list of dish data with category and price, **create a list of key-value pairs from the input**

// **For Example :**

// - **Sample Input**

// ```jsx
// dish = ["Paratha", "Masala Dosa", "Noodles", "Spring Rolls", "Samosa"]
// category = ["North Indian", "South Indian", "Chinese", "Chinese", "North Indian"]
// price  = [40, 80, 50, 60, 25]
// ```

// - **Sample Data Stored**

// ```jsx
// data = [    
// 					{name: "Paratha", price: 40, category: "North Indian"},    
// 					{name: "Masala Dosa" , price: 80, category: "South Indian"},    
// 					{name: "Noodles" , price: 50, category: "Chinese"},    
// 					{name: "Spring Rolls" , price: 60, category: "Chinese"},    
// 					{name: "Samosa" , price: 25, category: "North Indian"},
// 			]
// ```

// ### **Part 2:**

// From the above data, Write a function i.e **getDishesNames(data)** that will take the above data as input and print all the dish's names available in the restaurant.

// **For Example :**

// - **Sample Output**

// ```jsx
// Paratha    
// Masala Dosa    
// Noodles    
// Spring Rolls    
// Samosa
// ```

// ### **Part 3:**

// From the above data, Write a function i.e **getDishInRange(data, price1, price2)** that will take the above data as input with the price1 and price2 value and print objects of a dish having price range in between price1 and price2 (including price1 and price2).

// - **Sample Input**

// ```jsx
// data = [    
// 					{name: "Paratha", price: 40, category: "North Indian"},    
// 					{name: "Masala Dosa" , price: 80, category: "South Indian"},    
// 					{name: "Noodles" , price: 50, category: "Chinese"},    
// 					{name: "Spring Rolls" , price: 60, category: "Chinese"},    
// 					{name: "Samosa" , price: 25, category: "North Indian"},
// 			]

// price1 = 40
// price2 = 80
// ```

// - **Sample Output**

// ```jsx
// {name: "Paratha", price: 40, category: "North Indian"},    
// {name: "Masala Dosa" , price: 80, category: "South Indian"},    
// {name: "Noodles" , price: 50, category: "Chinese"},    
// {name: "Spring Rolls" , price: 60, category: "Chinese"}
// ```

// ### **Part 4:**

// From the above data, Write a function i.e **getMaxPriceDish(data)** that will take the above data as input and return an object of a dish having maximum price.

// - **Sample Output**

// ```jsx
// {name: "Masala Dosa" , price: 80, category: "South Indian"}
// ```