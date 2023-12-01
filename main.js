// var mashedPotatoesRecipe = {
//     name: "Mashed Potatoes",
//     serves: 4,
//     ingredients: [
//       {
//         "name": "water"
//       },
//       {
//         "name": "potatoes",
//         "count": 2
//       },
//       {
//         "name": "salt",
//         "count": 0.5,
//         "unit": "teaspoons"
//       },
//       {
//         "name": "butter",
//         "count": 2,
//         "unit": "tablespoons"
//       },
//       {
//         "name": "pepper",
//         "count": 0.25,
//         "unit": "teaspoons"
//       }
//     ],
//     directions: [
//       "Add potatoes to a pot and cover with an inch of water.",
//       "Bring the water to a boil over high heat, then reduce to a simmer and cover.",
//       "Simmer for 20 minutes or until potatoes are fork tender.",
//       "Drain water from potatoes, leaving the potatoes in the original pot.",
//       "Add remaining ingredients to the pot with the potatoes.",
//       "Mash potatoes until they reach the desired consistency.",
//       "Serve immediately, or cover and refrigerate."
//     ]
//   };

let menu = {
    courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        let dish = {
            name: dishName,
            price: dishPrice
        };

        this.courses[courseName].push(dish);
    },

    getRandomDishFromCourse(courseName) {
        let dishes = this.courses[courseName];

    let randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex]
        },
    
        generateRandomMeal() {
            let appetizer = this.getRandomDishFromCourse('appetizers');
            let main = this.getRandomDishFromCourse('mains');
            let dessert = this.getRandomDishFromCourse('desserts');
        

        let totalPrice = appetizer.price + main.price + dessert.price;

        return `Appetizer: ${appetizer.name}, Main: ${main.name}, Dessert: ${dessert.name}. Total Price: $${totalPrice.toFixed(2)}`;


}};
        menu.addDishToCourse('appetizers', 'mozzerella', 20);
        menu.addDishToCourse('mains', 'spaghetti', 14);
        menu.addDishToCourse('desserts', 'pie', 7);
        menu.addDishToCourse('desserts', 'ice cream', 5);

        let meal = menu.generateRandomMeal();
        console.log(meal);
