import {
  db,
  doc,
  setDoc,
  getDoc,
  addDoc,
  getDocs,
  collection,
} from "./firebaseConfig.js";

// fetchApi.js
export default async function fetchApi() {
  try {
    const res = await fetch("https://dummyjson.com/recipes");
    const data = await res.json();
    let sortedRecipes = data.recipes.sort((a, b) => a.id - b.id);
    let reversedRecipes = sortedRecipes.reverse();
    return reversedRecipes;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export const edamam = async () => {
  const app_id = "3cedd0b9";
  const app_key = "4a9da6dbf7878a34264dfbf4237edd2a";
  const query = "Spicy";
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${app_id}&app_key=${app_key}`;
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw new Error("Error in Fetching Data .");
  }
};

export const recipes = [
  {
    id: "1",
    recipeTitle: "Chicken Biryani",
    recipeImg:
      "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-biryani-awadhi-01.jpg",
    cookTime: "1 hour",
    prepTime: "30 minutes",
    nutritions: { fats: "12g", iron: "4mg", carbs: "55g" },
    servings: 4,
    instructions: [
      "Step 1: Wash and soak rice for 30 minutes.",
      "Step 2: Marinate chicken with spices and yogurt.",
      "Step 3: Cook onions until golden brown, then add marinated chicken.",
    ],
    longDescription:
      "A rich and aromatic rice dish made with spices, chicken, and basmati rice, layered together and slow-cooked to perfection.",
    shortDescription:
      "A fragrant and spicy Pakistani rice dish with marinated chicken.",
    ratings: 4.9,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Spicy", "Non-Vegetarian"],
    dishCountry: ["Pakistani ", "Indian "],
    tips: "Use aged basmati rice for the best texture. Adding saffron-infused milk enhances the aroma and taste.",
    difficulty: "Medium",
    tags: ["Biryani", "Pakistani", "Indian"],
  },
  {
    id: "2",
    recipeTitle: "Margherita Pizza",
    recipeImg:
      "https://www.abeautifulplate.com/wp-content/uploads/2015/08/the-best-homemade-margherita-pizza-1-4.jpg",
    cookTime: "25 minutes",
    prepTime: "15 minutes",
    nutritions: { fats: "18g", iron: "2mg", carbs: "60g" },
    servings: 2,
    instructions: [
      "Step 1: Prepare pizza dough and let it rise.",
      "Step 2: Spread tomato sauce on the rolled-out dough.",
      "Step 3: Add fresh mozzarella and bake until crispy.",
    ],
    longDescription:
      "A classic Italian pizza topped with fresh tomato sauce, mozzarella cheese, and basil, baked to perfection.",
    shortDescription:
      "A simple yet flavorful Italian pizza with a crispy crust.",
    ratings: 4.7,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Vegetarian"],
    dishCountry: ["Italian "],
    tips: "Use fresh mozzarella and basil for authentic flavor. Bake at a high temperature for a crispy crust.",
    difficulty: "Easy",
    tags: ["Pizza", "Italian", "Vegetarian"],
  },
  {
    id: "3",
    recipeTitle: "Chocolate Brownies",
    recipeImg:
      "https://gingerwithspice.com/wp-content/uploads/2018/06/Easy-Fudgy-Chocolate-Brownies-17-720x720.jpg",
    cookTime: "40 minutes",
    prepTime: "15 minutes",
    nutritions: { fats: "22g", iron: "3mg", carbs: "45g" },
    servings: 6,
    instructions: [
      "Step 1: Melt butter and mix with cocoa powder.",
      "Step 2: Add sugar, eggs, and vanilla essence.",
      "Step 3: Fold in flour and bake until set.",
    ],
    longDescription:
      "Rich, fudgy chocolate brownies with a crispy top and gooey center, perfect for dessert lovers.",
    shortDescription:
      "Delicious, homemade chocolate brownies with a soft, fudgy center.",
    ratings: 4.8,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Dessert", "Sweets"],
    dishCountry: ["American "],
    tips: "Do not overmix the batter for the perfect fudgy texture. Use high-quality cocoa powder for the best taste.",
    difficulty: "Easy",
    tags: ["Dessert", "Cookies", "Chocolate"],
  },
  {
    id: "4",
    recipeTitle: "Turkish Kebabs",
    recipeImg:
      "https://www.shutterstock.com/image-photo/greek-grilled-chicken-skewers-served-600nw-2452325659.jpg",
    cookTime: "45 minutes",
    prepTime: "20 minutes",
    nutritions: { fats: "15g", iron: "6mg", carbs: "30g" },
    servings: 4,
    instructions: [
      "Step 1: Mix minced meat with spices and herbs.",
      "Step 2: Shape into kebabs and skewer them.",
      "Step 3: Grill over charcoal for authentic flavor.",
    ],
    longDescription:
      "Juicy and flavorful Turkish-style kebabs, grilled to perfection and served with yogurt sauce and flatbread.",
    shortDescription:
      "A classic grilled meat dish from Turkey, perfect for BBQ lovers.",
    ratings: 4.9,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Spicy", "Non-Vegetarian"],
    dishCountry: ["Turkish "],
    tips: "Use fresh herbs for a more aromatic taste. Grill over charcoal for a smoky flavor.",
    difficulty: "Medium",
    tags: ["Turkish", "BBQ", "Kebabs", "Grilled"],
  },
  {
    id: "5",
    recipeTitle: "Japanese Sushi",
    recipeImg:
      "https://www.shutterstock.com/image-photo/flying-sushi-pieces-placed-between-600nw-2277466479.jpg",
    cookTime: "30 minutes",
    prepTime: "40 minutes",
    nutritions: { fats: "5g", iron: "2mg", carbs: "35g" },
    servings: 2,
    instructions: [
      "Step 1: Cook sushi rice and season with vinegar.",
      "Step 2: Place seaweed on a bamboo mat and spread rice.",
      "Step 3: Add filling and roll tightly.",
    ],
    longDescription:
      "Traditional Japanese sushi rolls made with fresh fish, seasoned rice, and seaweed, served with soy sauce and wasabi.",
    shortDescription:
      "A popular Japanese dish consisting of rice, fish, and seaweed.",
    ratings: 4.6,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Vegetarian"],
    dishCountry: ["Japanese "],
    tips: "Use sushi-grade fish for safety. Keep your hands wet while handling rice to avoid sticking.",
    difficulty: "Hard",
    tags: ["Japanese", "Sushi", "Rice"],
  },
  {
    id: "6",
    recipeTitle: "French Croissants",
    recipeImg:
      "https://www.simplytrinicooking.com/wp-content/uploads/croissant.jpg",
    cookTime: "2 hours",
    prepTime: "3 hours",
    nutritions: { fats: "20g", iron: "3mg", carbs: "40g" },
    servings: 6,
    instructions: [
      "Step 1: Prepare and chill the dough overnight.",
      "Step 2: Roll and fold with butter multiple times.",
      "Step 3: Shape into croissants and bake until golden brown.",
    ],
    longDescription:
      "Classic flaky and buttery French croissants, perfect for breakfast or an afternoon snack.",
    shortDescription:
      "A delicate, buttery French pastry with a crispy outer layer.",
    ratings: 4.9,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Dessert"],
    dishCountry: ["French "],
    tips: "Use high-quality butter for the best flavor. Ensure proper chilling between folds for flaky layers.",
    difficulty: "Hard",
    tags: ["French", "Croissant", "Pastry"],
  },
  {
    id: "7",
    recipeTitle: "Mexican Tacos",
    recipeImg:
      "https://beyondmeresustenance.com/wp-content/uploads/2023/05/Mexican-Shrimp-Tacos-Portrait-2.jpg",
    cookTime: "25 minutes",
    prepTime: "15 minutes",
    nutritions: { fats: "10g", iron: "4mg", carbs: "30g" },
    servings: 3,
    instructions: [
      "Step 1: Cook seasoned meat in a pan until fully done.",
      "Step 2: Warm up tortillas on a skillet.",
      "Step 3: Assemble with toppings and serve fresh.",
    ],
    longDescription:
      "Authentic Mexican tacos made with spiced meat, fresh salsa, and soft corn tortillas.",
    shortDescription:
      "A flavorful street-style Mexican dish with meat and fresh toppings.",
    ratings: 4.8,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Spicy"],
    dishCountry: ["Mexican "],
    tips: "Use fresh cilantro and lime juice for an authentic Mexican taste.",
    difficulty: "Easy",
    tags: ["Mexican", "Tacos", "Street food", "Spicy"],
  },
  {
    id: "8",
    recipeTitle: "Thai Green Curry",
    recipeImg:
      "https://media.istockphoto.com/id/1267610826/photo/famous-internationally-renowned-thai-green-coconut-curry-gaeng-keow-wan-gai-with-chicken-in-a.jpg?s=612x612&w=0&k=20&c=jXhnFi2TPqQKpvuLAPinL5HeuwnINKyS0hIqom46aV4=",
    cookTime: "45 minutes",
    prepTime: "20 minutes",
    nutritions: { fats: "15g", iron: "5mg", carbs: "50g" },
    servings: 4,
    instructions: [
      "Step 1: Sauté green curry paste in coconut oil.",
      "Step 2: Add chicken and vegetables, then pour in coconut milk.",
      "Step 3: Simmer until flavors blend well.",
    ],
    longDescription:
      "A creamy and spicy Thai curry made with coconut milk, green curry paste, and fresh herbs.",
    shortDescription:
      "A fragrant and spicy Thai curry with coconut milk and chicken.",
    ratings: 4.7,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Spicy", "Non-Vegetarian"],
    dishCountry: ["Thai "],
    tips: "Use fresh lemongrass and kaffir lime leaves for an authentic taste.",
    difficulty: "Medium",
    tags: ["Thai", "Curry", "Spicy", "Chicken"],
  },
  {
    id: "9",
    recipeTitle: "Greek Salad",
    recipeImg:
      "https://i.pinimg.com/736x/35/11/68/35116884d117438413b6100fe8ac4e8e.jpg",
    cookTime: "10 minutes",
    prepTime: "10 minutes",
    nutritions: { fats: "8g", iron: "3mg", carbs: "20g" },
    servings: 2,
    instructions: [
      "Step 1: Chop cucumbers, tomatoes, and onions.",
      "Step 2: Mix with olives, feta cheese, and dressing.",
      "Step 3: Toss gently and serve chilled.",
    ],
    longDescription:
      "A refreshing and healthy Greek salad made with fresh vegetables, feta cheese, and olives.",
    shortDescription:
      "A light and healthy Mediterranean salad with fresh ingredients.",
    ratings: 4.6,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Vegetarian"],
    dishCountry: ["Greek "],
    tips: "Use high-quality feta cheese and extra virgin olive oil for the best taste.",
    difficulty: "Easy",
    tags: ["Greek", "Vegetarian"],
  },
  {
    id: "10",
    recipeTitle: "Brazilian Feijoada",
    recipeImg:
      "https://as1.ftcdn.net/jpg/05/25/12/20/1000_F_525122047_ZKmHc5ziwKwGpKyLDR77By8mTFC1SgZB.jpg",
    cookTime: "2 hours",
    prepTime: "30 minutes",
    nutritions: { fats: "25g", iron: "8mg", carbs: "40g" },
    servings: 5,
    instructions: [
      "Step 1: Soak black beans overnight.",
      "Step 2: Cook beans with meats and seasonings.",
      "Step 3: Simmer until thick and flavorful.",
    ],
    longDescription:
      "A traditional Brazilian black bean stew cooked with pork, sausage, and spices.",
    shortDescription: "A rich and hearty Brazilian stew with beans and pork.",
    ratings: 4.9,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Non-Vegetarian"],
    dishCountry: ["Brazilian "],
    tips: "Serve with rice and orange slices for an authentic experience.",
    difficulty: "Medium",
    tags: ["Brazilian", "Feijoada", "Stew", "Pork"],
  },
  {
    id: "11",
    recipeTitle: "American Cheeseburger",
    recipeImg:
      "https://img.freepik.com/premium-photo/homemade-juicy-burgers-with-beef-cheese-arugula-wooden-table-american-cuisine-fast-food_286393-3255.jpg",
    cookTime: "30 minutes",
    prepTime: "15 minutes",
    nutritions: { fats: "25g", iron: "6mg", carbs: "45g" },
    servings: 2,
    instructions: [
      "Step 1: Shape ground beef into patties and season well.",
      "Step 2: Cook patties on a grill until done.",
      "Step 3: Assemble with cheese, lettuce, and sauces in a bun.",
    ],
    longDescription:
      "A classic American cheeseburger with a juicy beef patty, melted cheese, fresh vegetables, and a soft bun.",
    shortDescription:
      "A delicious and juicy American-style cheeseburger with fresh toppings.",
    ratings: 4.8,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Non-Vegetarian"],
    dishCountry: ["American "],
    tips: "Use fresh beef for the best taste. Toast the buns lightly for extra crispiness.",
    difficulty: "Easy",
    tags: ["American", "Burger", "Grilled"],
  },
  {
    id: "12",
    recipeTitle: "Italian Lasagna",
    recipeImg:
      "https://cdn.create.vista.com/api/media/small/619485310/stock-photo-piece-tasty-hot-lasagna-light-background-traditional-italian-lasagna-italian",
    cookTime: "1 hour",
    prepTime: "30 minutes",
    nutritions: { fats: "22g", iron: "5mg", carbs: "50g" },
    servings: 4,
    instructions: [
      "Step 1: Cook ground meat with tomato sauce and spices.",
      "Step 2: Layer lasagna sheets with meat and cheese sauce.",
      "Step 3: Bake until golden and bubbling.",
    ],
    longDescription:
      "A rich and cheesy Italian lasagna layered with meat sauce, pasta sheets, and a creamy béchamel sauce.",
    shortDescription:
      "A hearty and comforting Italian pasta dish with layers of meat and cheese.",
    ratings: 4.9,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Non-Vegetarian"],
    dishCountry: ["Italian "],
    tips: "Let the lasagna rest before cutting for perfect slices.",
    difficulty: "Medium",
    tags: ["Italian", "Pasta", "Lasagna", "Baked"],
  },
  {
    id: "13",
    recipeTitle: "Korean Bibimbap",
    recipeImg:
      "https://i0.wp.com/jonathangayman.com/wp-content/uploads/2012/01/Korean-Bibimbap-4185.jpg?fit=950%2C1425&ssl=1",
    cookTime: "40 minutes",
    prepTime: "20 minutes",
    nutritions: { fats: "12g", iron: "4mg", carbs: "55g" },
    servings: 3,
    instructions: [
      "Step 1: Cook rice and prepare assorted vegetables.",
      "Step 2: Sauté vegetables and cook marinated meat.",
      "Step 3: Assemble in a bowl and top with a fried egg.",
    ],
    longDescription:
      "A flavorful and colorful Korean rice dish topped with sautéed vegetables, meat, and a fried egg.",
    shortDescription:
      "A healthy and vibrant Korean rice dish with assorted toppings.",
    ratings: 4.7,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Spicy", "Non-Vegetarian"],
    dishCountry: ["Korean "],
    tips: "Mix everything with spicy gochujang sauce before eating.",
    difficulty: "Medium",
    tags: ["Korean", "Rice", "Spicy"],
  },
  {
    id: "14",
    recipeTitle: "Indian Butter Chicken",
    recipeImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Butter_Chicken_%26_Butter_Naan_-_Home_-_Chandigarh_-_India_-_0006.jpg/640px-Butter_Chicken_%26_Butter_Naan_-_Home_-_Chandigarh_-_India_-_0006.jpg",
    cookTime: "1 hour",
    prepTime: "25 minutes",
    nutritions: { fats: "18g", iron: "6mg", carbs: "45g" },
    servings: 4,
    instructions: [
      "Step 1: Marinate chicken in yogurt and spices.",
      "Step 2: Cook in a creamy tomato-based sauce.",
      "Step 3: Simmer until the chicken is tender.",
    ],
    longDescription:
      "A rich and creamy Indian curry made with tender chicken pieces cooked in a spiced tomato and butter sauce.",
    shortDescription:
      "A flavorful and creamy Indian butter chicken curry served with naan or rice.",
    ratings: 4.9,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Spicy", "Non-Vegetarian"],
    dishCountry: ["Indian ", "Pakistani "],
    tips: "Use cashew paste for extra creaminess. Serve with garlic naan for the best experience.",
    difficulty: "Medium",
    tags: ["Indian", "Butter Chicken", "Curry", "Spicy"],
  },
  {
    id: "15",
    recipeTitle: "Turkish Baklava",
    recipeImg:
      "https://i.pinimg.com/736x/0a/46/ad/0a46ad53000c301e2a7782c220912f2c.jpg",
    cookTime: "1 hour",
    prepTime: "30 minutes",
    nutritions: { fats: "20g", iron: "3mg", carbs: "60g" },
    servings: 6,
    instructions: [
      "Step 1: Layer phyllo dough with melted butter and chopped nuts.",
      "Step 2: Bake until golden and crisp.",
      "Step 3: Drizzle with sugar syrup and let it soak.",
    ],
    longDescription:
      "A rich and flaky Turkish dessert made with layers of phyllo pastry, chopped nuts, and a Sweets syrup.",
    shortDescription:
      "A traditional Turkish dessert with crispy layers and a Sweets, nutty filling.",
    ratings: 4.8,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Dessert", "Sweets"],
    dishCountry: ["Turkish "],
    tips: "Use clarified butter for a crispier texture. Let it sit overnight for better syrup absorption.",
    difficulty: "Medium",
    tags: ["Turkish", "Baklava", "Dessert", "Sweets"],
  },
  {
    id: "16",
    recipeTitle: "Japanese Ramen",
    recipeImg:
      "https://watermark.lovepik.com/photo/20211208/large/lovepik-japanese-ramen-picture_501633183.jpg",
    cookTime: "45 minutes",
    prepTime: "20 minutes",
    nutritions: { fats: "15g", iron: "4mg", carbs: "60g" },
    servings: 2,
    instructions: [
      "Step 1: Prepare broth with soy sauce and miso.",
      "Step 2: Cook noodles and soft-boil eggs.",
      "Step 3: Assemble with toppings and serve hot.",
    ],
    longDescription:
      "A traditional Japanese noodle soup with rich broth, fresh vegetables, and tender meat.",
    shortDescription:
      "A comforting and flavorful Japanese ramen with a rich umami taste.",
    ratings: 4.8,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Spicy", "Non-Vegetarian"],
    dishCountry: ["Japanese "],
    tips: "Use homemade broth for the best flavor. Let the eggs marinate in soy sauce for extra taste.",
    difficulty: "Medium",
    tags: ["Japanese", "Ramen", "Noodles", "Soup"],
  },
  {
    id: "17",
    recipeTitle: "Pakistani Nihari",
    recipeImg:
      "https://static.vecteezy.com/system/resources/previews/015/933/420/non_2x/indian-style-mutton-or-gosht-masala-or-indian-lamb-meat-rogan-josh-served-with-naan-free-photo.jpg",
    cookTime: "4 hours",
    prepTime: "30 minutes",
    nutritions: { fats: "30g", iron: "8mg", carbs: "50g" },
    servings: 5,
    instructions: [
      "Step 1: Sauté onions and spices in oil.",
      "Step 2: Add meat and slow-cook for several hours.",
      "Step 3: Garnish with ginger, coriander, and serve hot.",
    ],
    longDescription:
      "A rich and spicy slow-cooked Pakistani beef stew infused with deep flavors and aromatic spices.",
    shortDescription:
      "A slow-cooked, flavorful Pakistani beef stew, best served with naan or rice.",
    ratings: 4.9,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Spicy", "Non-Vegetarian"],
    dishCountry: ["Pakistani "],
    tips: "Cook on low heat for the best texture. Serve with lemon and fresh coriander for extra taste.",
    difficulty: "Hard",
    tags: ["Pakistani", "Nihari", "Slow Cooked", "Spicy"],
  },
  {
    id: "18",
    recipeTitle: "Chinese Dim Sum",
    recipeImg:
      "https://cdn.create.vista.com/api/media/small/375239174/stock-photo-assorted-asian-food-dim-sum-bamboo-steamer-plate",
    cookTime: "40 minutes",
    prepTime: "30 minutes",
    nutritions: { fats: "10g", iron: "3mg", carbs: "35g" },
    servings: 4,
    instructions: [
      "Step 1: Prepare dumpling filling with minced meat and vegetables.",
      "Step 2: Wrap the filling in thin dough sheets.",
      "Step 3: Steam or pan-fry until fully cooked.",
    ],
    longDescription:
      "A variety of bite-sized Chinese dumplings filled with savory meat and vegetables, steamed or fried.",
    shortDescription:
      "A light and flavorful Chinese delicacy, perfect as an appetizer or snack.",
    ratings: 4.7,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Non-Vegetarian"],
    dishCountry: ["Chinese "],
    tips: "Use thin wrappers for a delicate texture. Serve with soy sauce and chili oil for dipping.",
    difficulty: "Medium",
    tags: ["Chinese", "Dim Sum", "Dumplings"],
  },
  {
    id: "19",
    recipeTitle: "Greek Moussaka",
    recipeImg:
      "https://static.vecteezy.com/system/resources/previews/024/678/867/non_2x/flavorful-moussaka-with-eggplant-and-beef-greek-style-generative-ai-free-photo.jpeg",
    cookTime: "1 hour 30 minutes",
    prepTime: "40 minutes",
    nutritions: { fats: "22g", iron: "5mg", carbs: "45g" },
    servings: 4,
    instructions: [
      "Step 1: Layer eggplant slices with seasoned ground meat.",
      "Step 2: Add béchamel sauce on top and bake.",
      "Step 3: Serve warm with fresh herbs.",
    ],
    longDescription:
      "A traditional Greek dish made with layers of eggplant, spiced meat, and a creamy béchamel topping.",
    shortDescription:
      "A rich and hearty Greek baked dish with layers of meat and eggplant.",
    ratings: 4.8,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Non-Vegetarian"],
    dishCountry: ["Greek "],
    tips: "Salt the eggplant before cooking to remove bitterness. Let it rest before slicing.",
    difficulty: "Medium",
    tags: ["Greek", "Moussaka", "Baked", "Eggplant"],
  },
  {
    id: "20",
    recipeTitle: "Brazilian Açaí Bowl",
    recipeImg:
      "https://static.vecteezy.com/system/resources/previews/039/584/189/non_2x/ai-generated-a-healthy-bowl-of-fresh-fruit-yogurt-and-granola-generated-by-ai-free-photo.jpg",
    cookTime: "10 minutes",
    prepTime: "10 minutes",
    nutritions: { fats: "5g", iron: "2mg", carbs: "55g" },
    servings: 2,
    instructions: [
      "Step 1: Blend frozen açaí with bananas and berries.",
      "Step 2: Pour into a bowl and top with granola and fresh fruit.",
      "Step 3: Drizzle with honey and serve chilled.",
    ],
    longDescription:
      "A refreshing and nutritious Brazilian açaí bowl topped with fresh fruits, granola, and honey.",
    shortDescription:
      "A healthy and energizing smoothie bowl packed with antioxidants and fresh toppings.",
    ratings: 4.7,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Vegetarian", "Dessert"],
    dishCountry: ["Brazilian "],
    tips: "Use unSweetsened açaí for a natural taste. Add chia seeds for extra nutrition.",
    difficulty: "Easy",
    tags: ["Brazilian", "Açaí", "Smoothie Bowl"],
  },
  {
    id: "21",
    recipeTitle: "French Croissant",
    recipeImg:
      "https://static.vecteezy.com/system/resources/previews/036/492/607/non_2x/ai-generated-bakery-bliss-breakfast-scene-with-croissant-cup-bokeh-morning-ambiance-for-social-media-post-size-free-photo.jpg",
    cookTime: "2 hours",
    prepTime: "12 hours",
    nutritions: { fats: "18g", iron: "2mg", carbs: "50g" },
    servings: 6,
    instructions: [
      "Step 1: Prepare and laminate the dough with butter.",
      "Step 2: Roll, shape, and proof the croissants.",
      "Step 3: Bake until golden and flaky.",
    ],
    longDescription:
      "A buttery and flaky French pastry with a crisp outer layer and a soft, airy interior.",
    shortDescription:
      "A classic French pastry known for its rich buttery layers and delicate texture.",
    ratings: 4.9,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Dessert"],
    dishCountry: ["French "],
    tips: "Use high-quality butter for the best taste. Chill the dough between folds for perfect layers.",
    difficulty: "Hard",
    tags: ["French", "Pastry", "Croissant"],
  },
  {
    id: "22",
    recipeTitle: "Mexican Tacos",
    recipeImg:
      "https://static.vecteezy.com/system/resources/previews/002/950/170/non_2x/tacos-with-meat-and-vegetables-mexican-food-style-free-photo.jpg",
    cookTime: "30 minutes",
    prepTime: "20 minutes",
    nutritions: { fats: "12g", iron: "3mg", carbs: "40g" },
    servings: 3,
    instructions: [
      "Step 1: Prepare taco filling with seasoned meat and vegetables.",
      "Step 2: Warm tortillas and fill them with toppings.",
      "Step 3: Serve with salsa and lime.",
    ],
    longDescription:
      "Authentic Mexican tacos filled with seasoned meat, fresh vegetables, and a zesty salsa.",
    shortDescription:
      "A popular Mexican street food with soft tortillas and flavorful fillings.",
    ratings: 4.8,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Spicy", "Non-Vegetarian"],
    dishCountry: ["Mexican "],
    tips: "Use fresh lime juice for a tangy kick. Try homemade tortillas for an authentic taste.",
    difficulty: "Medium",
    tags: ["Mexican", "Tacos", "Spicy", "Street Food"],
  },
  {
    id: "23",
    recipeTitle: "Thai Green Curry",
    recipeImg:
      "https://media.istockphoto.com/id/610763810/photo/green-curry-with-chicken.jpg?s=612x612&w=0&k=20&c=ttyE_YyzzcURwwSm77T0n-hawOqbU64oN_Iu7et6osc=",
    cookTime: "45 minutes",
    prepTime: "20 minutes",
    nutritions: { fats: "15g", iron: "4mg", carbs: "55g" },
    servings: 4,
    instructions: [
      "Step 1: Sauté green curry paste in coconut milk.",
      "Step 2: Add chicken and vegetables, simmer until tender.",
      "Step 3: Serve hot with jasmine rice.",
    ],
    longDescription:
      "A creamy and aromatic Thai curry made with coconut milk, green curry paste, and fresh herbs.",
    shortDescription:
      "A flavorful Thai dish with a balance of spicy, Sweets, and savory flavors.",
    ratings: 4.7,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Spicy", "Non-Vegetarian"],
    dishCountry: ["Thai "],
    tips: "Use fresh kaffir lime leaves for an authentic aroma. Adjust spice levels with coconut milk.",
    difficulty: "Medium",
    tags: ["Thai", "Curry", "Spicy", "Chicken"],
  },
  {
    id: "24",
    recipeTitle: "Indian Samosa",
    recipeImg:
      "https://media.istockphoto.com/id/980106992/photo/samosa-snack-served-with-tomato-ketchup-and-mint-chutney.jpg?s=612x612&w=0&k=20&c=GEbt-l44Uj-Guvt89HVer3bI5Kd5RSMn6QFkJW6oN7k=",
    cookTime: "40 minutes",
    prepTime: "30 minutes",
    nutritions: { fats: "20g", iron: "3mg", carbs: "50g" },
    servings: 6,
    instructions: [
      "Step 1: Prepare spicy potato filling with peas and spices.",
      "Step 2: Wrap filling in thin dough and shape into triangles.",
      "Step 3: Deep fry until golden and crispy.",
    ],
    longDescription:
      "A crispy and savory Indian snack with a spiced potato filling wrapped in a golden crust.",
    shortDescription:
      "A popular Indian street food snack, best enjoyed with chutney.",
    ratings: 4.9,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Spicy", "Vegetarian"],
    dishCountry: ["Indian ", "Pakistani "],
    tips: "Use cold water for the dough to keep it crispy. Fry on medium heat for even cooking.",
    difficulty: "Medium",
    tags: ["Indian", "Pakistani", "Samosa", "Street Food"],
  },
  {
    id: "25",
    recipeTitle: "Turkish Shawarma",
    recipeImg:
      "https://media.istockphoto.com/id/888366454/photo/chicken-wrap.jpg?s=612x612&w=0&k=20&c=smy2oTsWnDDDEaS_Rkn6Jj-7KXll4FlO_aYR9BoKcu0=",
    cookTime: "50 minutes",
    prepTime: "20 minutes",
    nutritions: { fats: "18g", iron: "5mg", carbs: "45g" },
    servings: 4,
    instructions: [
      "Step 1: Marinate meat in yogurt and spices.",
      "Step 2: Grill or roast until perfectly cooked.",
      "Step 3: Serve in pita bread with fresh vegetables and sauces.",
    ],
    longDescription:
      "A flavorful and juicy Turkish shawarma served in soft pita bread with fresh toppings.",
    shortDescription:
      "A delicious Middle Eastern-style grilled meat wrap with flavorful seasonings.",
    ratings: 4.8,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Spicy", "Non-Vegetarian"],
    dishCountry: ["Turkish ", "Lebanese"],
    tips: "Use a vertical rotisserie for authentic taste. Let the meat rest before slicing.",
    difficulty: "Medium",
    tags: ["Turkish", "Shawarma", "Grilled"],
  },
  {
    id: "26",
    recipeTitle: "Lebanese Hummus",
    recipeImg:
      "https://img.freepik.com/free-photo/top-view-tasty-hummus-with-chickpeas_23-2149483841.jpg",
    cookTime: "10 minutes",
    prepTime: "15 minutes",
    nutritions: { fats: "8g", iron: "2mg", carbs: "20g" },
    servings: 4,
    instructions: [
      "Step 1: Blend chickpeas, tahini, lemon juice, and garlic.",
      "Step 2: Add olive oil and blend until smooth.",
      "Step 3: Garnish with paprika and serve with pita bread.",
    ],
    longDescription:
      "A creamy and delicious Middle Eastern dip made with chickpeas, tahini, and lemon juice.",
    shortDescription:
      "A smooth and flavorful hummus, perfect as a dip or spread.",
    ratings: 4.7,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Vegetarian"],
    dishCountry: ["Lebanese"],
    tips: "Use ice-cold water while blending for a fluffy texture. Adjust tahini for creaminess.",
    difficulty: "Easy",
    tags: ["Lebanese", "Hummus", "Dip"],
  },
  {
    id: "27",
    recipeTitle: "Korean Bibimbap",
    recipeImg:
      "https://thefoodietakesflight.com/wp-content/uploads/2020/05/vegan-bibimbap.jpg",
    cookTime: "40 minutes",
    prepTime: "20 minutes",
    nutritions: { fats: "12g", iron: "4mg", carbs: "55g" },
    servings: 2,
    instructions: [
      "Step 1: Cook rice and sauté vegetables separately.",
      "Step 2: Cook marinated beef and fry an egg.",
      "Step 3: Assemble in a bowl, top with egg, and serve with gochujang sauce.",
    ],
    longDescription:
      "A traditional Korean rice dish with assorted vegetables, meat, and a spicy sauce.",
    shortDescription:
      "A colorful and flavorful Korean mixed rice bowl topped with egg and spicy sauce.",
    ratings: 4.8,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Spicy", "Non-Vegetarian"],
    dishCountry: ["Korean "],
    tips: "Use a hot stone bowl for crispy rice. Mix well before eating for the best taste.",
    difficulty: "Medium",
    tags: ["Korean", "Bibimbap", "Rice Bowl", "Spicy"],
  },
  {
    id: "28",
    recipeTitle: "Italian Tiramisu",
    recipeImg:
      "https://www.marcellinaincucina.com/wp-content/uploads/2019/11/Tiramisu-blog-1-500x500.jpg",
    cookTime: "30 minutes",
    prepTime: "20 minutes",
    nutritions: { fats: "16g", iron: "1mg", carbs: "35g" },
    servings: 6,
    instructions: [
      "Step 1: Whisk mascarpone cheese with sugar and cream.",
      "Step 2: Dip ladyfingers in coffee and layer with cream mixture.",
      "Step 3: Dust with cocoa powder and refrigerate before serving.",
    ],
    longDescription:
      "A classic Italian dessert made with layers of coffee-soaked ladyfingers and creamy mascarpone.",
    shortDescription:
      "A rich and creamy Italian coffee-flavored dessert, perfect for  occasions.",
    ratings: 4.9,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Dessert", "Sweets"],
    dishCountry: ["Italian "],
    tips: "Use strong espresso for authentic flavor. Chill overnight for the best texture.",
    difficulty: "Medium",
    tags: ["Italian", "Tiramisu", "Dessert"],
  },
  {
    id: "29",
    recipeTitle: "American BBQ Ribs",
    recipeImg:
      "https://media.istockphoto.com/id/481754150/photo/chicken-on-a-hot-flaming-barbecue.jpg?s=612x612&w=0&k=20&c=QWA3qlprrjiKzlclNHIzIqMTmKYoY9ZJlFRCieZEvhw=",
    cookTime: "3 hours",
    prepTime: "30 minutes",
    nutritions: { fats: "25g", iron: "3mg", carbs: "40g" },
    servings: 4,
    instructions: [
      "Step 1: Marinate ribs with BBQ rub and let sit overnight.",
      "Step 2: Slow cook in the oven or grill until tender.",
      "Step 3: Glaze with BBQ sauce and serve hot.",
    ],
    longDescription:
      "Juicy and flavorful American-style BBQ ribs slow-cooked to perfection and glazed with smoky BBQ sauce.",
    shortDescription:
      "A classic American barbecue dish with tender, fall-off-the-bone ribs.",
    ratings: 4.8,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Spicy", "Non-Vegetarian"],
    dishCountry: ["American "],
    tips: "Slow-cook for the best tenderness. Brush extra sauce for a glossy finish.",
    difficulty: "Hard",
    tags: ["American", "BBQ", "Ribs", "Grilled"],
  },
  {
    id: "30",
    recipeTitle: "Greek Baklava",
    recipeImg:
      "https://recipesfromanormalmum.com/wp-content/uploads/2016/09/brazil-nut-baklava-portrait-smaller-683x1024.jpg",
    cookTime: "1 hour",
    prepTime: "30 minutes",
    nutritions: { fats: "20g", iron: "2mg", carbs: "50g" },
    servings: 8,
    instructions: [
      "Step 1: Layer filo pastry with butter and chopped nuts.",
      "Step 2: Bake until golden and crispy.",
      "Step 3: Drizzle with honey syrup and let soak before serving.",
    ],
    longDescription:
      "A Sweets and crispy Greek dessert made with layers of filo pastry, nuts, and honey syrup.",
    shortDescription:
      "A rich and flaky Greek dessert soaked in honey syrup, perfect with tea or coffee.",
    ratings: 4.9,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Dessert", "Sweets"],
    dishCountry: ["Greek "],
    tips: "Use high-quality honey for the best taste. Cut before baking to keep layers intact.",
    difficulty: "Medium",
    tags: ["Greek", "Baklava", "Dessert", "Sweets"],
  },
  {
    id: "31",
    recipeTitle: "Spaghetti Carbonara",
    recipeImg:
      "https://thumbs.dreamstime.com/b/classic-spaghetti-carbonara-recipe-visually-appealing-plate-showcasing-perfectly-cooked-pasta-coated-creamy-sauce-made-343825447.jpg",
    cookTime: "20 minutes",
    prepTime: "10 minutes",
    nutritions: { fats: "15g", iron: "3mg", carbs: "60g" },
    servings: 4,
    instructions: [
      "Step 1: Boil pasta until al dente.",
      "Step 2: Cook pancetta until crispy.",
      "Step 3: Mix eggs, cheese, and seasonings, then combine with pasta.",
    ],
    longDescription:
      "A classic Italian pasta dish with a creamy, savory sauce made from eggs, cheese, pancetta, and pepper.",
    shortDescription:
      "Delicious and creamy spaghetti carbonara made with eggs, cheese, pancetta, and black pepper.",
    ratings: 4.9,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Spicy"],
    dishCountry: ["Italian "],
    tips: "Use freshly grated Parmesan for the best taste. Don't overcook the eggs to avoid scrambling.",
    difficulty: "Medium",
    tags: ["Pasta", "Italian"],
  },
  {
    id: "32",
    recipeTitle: "Chicken Biryani",
    recipeImg:
      "https://t3.ftcdn.net/jpg/04/41/20/18/360_F_441201852_XQqp1wbAQj9udOC3iT7D0ahKgaf71bns.jpg",
    cookTime: "1 hour",
    prepTime: "30 minutes",
    nutritions: { fats: "20g", iron: "5mg", carbs: "70g" },
    servings: 6,
    instructions: [
      "Step 1: Marinate chicken with spices and yogurt.",
      "Step 2: Cook rice separately with whole spices.",
      "Step 3: Layer chicken and rice, then cook on low heat.",
    ],
    longDescription:
      "A flavorful and aromatic South Asian rice dish cooked with spiced chicken and fragrant basmati rice.",
    shortDescription:
      "Authentic Pakistani-style chicken biryani with rich spices and fragrant rice.",
    ratings: 4.8,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Spicy"],
    dishCountry: ["Pakistani ", "Indian "],
    tips: "Use aged basmati rice for better texture. Layer rice and chicken properly for best flavor.",
    difficulty: "Hard",
    tags: ["Biryani", "Pakistani", "Indian"],
  },
  {
    id: "33",
    recipeTitle: "Classic Cheesecake",
    recipeImg:
      "https://thumbs.dreamstime.com/b/exquisite-png-cheesecake-portrait-creamy-layered-cake-fresh-berries-whipped-cream-perfect-dessert-lovers-indulge-353267714.jpg",
    cookTime: "1 hour 30 minutes",
    prepTime: "15 minutes",
    nutritions: { fats: "25g", iron: "2mg", carbs: "55g" },
    servings: 8,
    instructions: [
      "Step 1: Prepare crust and press into the pan.",
      "Step 2: Mix cream cheese, sugar, and eggs until smooth.",
      "Step 3: Bake in a water bath until set.",
    ],
    longDescription:
      "A rich and creamy cheesecake with a buttery graham cracker crust, perfect for dessert lovers.",
    shortDescription:
      "Smooth and creamy cheesecake with a golden graham cracker crust.",
    ratings: 4.7,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Dessert", "Sweets"],
    dishCountry: ["American ", "French "],
    tips: "Bake in a water bath to prevent cracks. Let it chill overnight for the best texture.",
    difficulty: "Medium",
    tags: ["Dessert", "Cheesecake"],
  },
  {
    id: "34",
    recipeTitle: "Grilled Salmon with Lemon Butter",
    recipeImg:
      "https://img.freepik.com/premium-photo/photo-with-presentation-delicious-grilled-salmon-with-lemon-butter-food-photography_933496-115.jpg",
    cookTime: "25 minutes",
    prepTime: "15 minutes",
    nutritions: { fats: "12g", iron: "2mg", carbs: "5g" },
    servings: 2,
    instructions: [
      "Step 1: Season salmon with salt, pepper, and lemon juice.",
      "Step 2: Grill salmon for 5 minutes per side.",
      "Step 3: Drizzle with melted butter and serve.",
    ],
    longDescription:
      "A flavorful grilled salmon dish enhanced with a tangy lemon butter sauce, perfect for a healthy meal.",
    shortDescription:
      "Juicy grilled salmon with a delicious lemon butter sauce for a fresh and light meal.",
    ratings: 4.7,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Non-Vegetarian"],
    dishCountry: ["American ", "Greek "],
    tips: "Marinate the salmon for at least 30 minutes for better flavor. Use fresh herbs to enhance the taste.",
    difficulty: "Medium",
    tags: ["Seafood", "Dinner", "Salmon"],
  },
  {
    id: "35",
    recipeTitle: "Vegetable Stir-Fry",
    recipeImg:
      "https://static.vecteezy.com/system/resources/thumbnails/053/314/710/small_2x/delicious-chicken-vegetable-stir-fry-in-wok-steaming-hot-food-photo.jpeg",
    cookTime: "15 minutes",
    prepTime: "10 minutes",
    nutritions: { fats: "5g", iron: "3mg", carbs: "40g" },
    servings: 3,
    instructions: [
      "Step 1: Chop all vegetables into bite-sized pieces.",
      "Step 2: Heat oil and sauté garlic, then add vegetables.",
      "Step 3: Stir-fry for 5 minutes and season with soy sauce.",
    ],
    longDescription:
      "A quick and easy vegetable stir-fry loaded with fresh, colorful veggies and a savory sauce.",
    shortDescription:
      "A healthy and delicious vegetable stir-fry cooked with soy sauce and aromatic seasonings.",
    ratings: 4.8,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Vegetarian"],
    dishCountry: ["Chinese ", "Thai "],
    tips: "Use high heat for a quick stir-fry. Add sesame oil for extra flavor.",
    difficulty: "Easy",
    tags: ["Stir-fry", "Vegetarian"],
  },
  {
    id: "36",
    recipeTitle: "Chocolate Lava Cake",
    recipeImg:
      "https://t4.ftcdn.net/jpg/11/02/57/15/360_F_1102571576_5cg6TVVOgID3TE6pFsHQk3bNaKbjRXQi.jpg",
    cookTime: "30 minutes",
    prepTime: "10 minutes",
    nutritions: { fats: "22g", iron: "4mg", carbs: "65g" },
    servings: 4,
    instructions: [
      "Step 1: Melt chocolate and butter together.",
      "Step 2: Mix eggs, sugar, and flour, then combine with chocolate.",
      "Step 3: Bake in ramekins until the center is slightly soft.",
    ],
    longDescription:
      "A rich and decadent chocolate dessert with a gooey molten center, perfect for chocolate lovers.",
    shortDescription:
      "Delicious molten lava cake with a warm, gooey chocolate center and a soft outer layer.",
    ratings: 4.9,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Dessert", "Sweets"],
    dishCountry: ["French ", "American "],
    tips: "Do not overbake the cake to ensure a molten center. Serve warm with ice cream.",
    difficulty: "Medium",
    tags: ["Dessert", "Chocolate", "Cake"],
  },
  {
    id: "37",
    recipeTitle: "Tandoori Chicken",
    recipeImg:
      "https://img.freepik.com/free-photo/closeup-shot-deliciously-prepared-chicken-served-with-onions-chili-sauce_181624-61705.jpg?semt=ais_hybrid",
    cookTime: "40 minutes",
    prepTime: "4 hours (marination)",
    nutritions: { fats: "15g", iron: "6mg", carbs: "30g" },
    servings: 4,
    instructions: [
      "Step 1: Marinate chicken with yogurt and spices for at least 4 hours.",
      "Step 2: Preheat oven to high heat and roast chicken.",
      "Step 3: Serve hot with chutney and naan.",
    ],
    longDescription:
      "A flavorful Indian-style roasted chicken marinated in yogurt and aromatic spices, cooked in a tandoor or oven.",
    shortDescription:
      "Spicy and smoky tandoori chicken with a vibrant red color and aromatic seasoning.",
    ratings: 4.8,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Spicy", "Non-Vegetarian"],
    dishCountry: ["Indian ", "Pakistani "],
    tips: "Use Kashmiri red chili for color without too much heat. Marinate overnight for deeper flavors.",
    difficulty: "Hard",
    tags: ["Indian", "Pakistani", "Chicken", "Spicy"],
  },
  {
    id: "38",
    recipeTitle: "Greek Salad",
    recipeImg:
      "https://media.istockphoto.com/id/1461256163/photo/feta-cheese-salad-on-wooden-table.jpg?s=612x612&w=0&k=20&c=JISWAr9aTfUdLkgoR2rSWQN-ZzfQvOrhG9stauCUqSE=",
    cookTime: "10 minutes",
    prepTime: "10 minutes",
    nutritions: { fats: "8g", iron: "2mg", carbs: "15g" },
    servings: 2,
    instructions: [
      "Step 1: Chop tomatoes, cucumbers, onions, and bell peppers.",
      "Step 2: Toss vegetables with olives and feta cheese.",
      "Step 3: Drizzle with olive oil and lemon juice, then serve.",
    ],
    longDescription:
      "A refreshing and healthy Greek salad made with crisp vegetables, feta cheese, and a tangy olive oil dressing.",
    shortDescription:
      "Fresh Greek salad with olives, feta cheese, cucumbers, and a zesty dressing.",
    ratings: 4.7,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Vegetarian"],
    dishCountry: ["Greek "],
    tips: "Use high-quality olive oil for better flavor. Add fresh oregano for a traditional touch.",
    difficulty: "Easy",
    tags: ["Salad", "Vegetarian", "Greek"],
  },
  {
    id: "39",
    recipeTitle: "Mushroom Risotto",
    recipeImg:
      "https://img.freepik.com/free-photo/edible-mushroom-risotto-with-parsley-parmesan-cheese-generated-by-ai_188544-38463.jpg",
    cookTime: "35 minutes",
    prepTime: "15 minutes",
    nutritions: { fats: "9g", iron: "3mg", carbs: "55g" },
    servings: 4,
    instructions: [
      "Step 1: Sauté onions and garlic in olive oil until soft.",
      "Step 2: Add arborio rice and cook until slightly translucent.",
      "Step 3: Gradually add broth while stirring until rice is creamy.",
    ],
    longDescription:
      "A creamy and flavorful Italian dish made with arborio rice, mushrooms, and Parmesan cheese, cooked to perfection.",
    shortDescription:
      "Rich and creamy mushroom risotto infused with Parmesan and white wine.",
    ratings: 4.9,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Vegetarian"],
    dishCountry: ["Italian "],
    tips: "Stir constantly for a creamy texture. Use warm broth for even cooking.",
    difficulty: "Medium",
    tags: ["Pasta", "Vegetarian", "Italian", "Risotto"],
  },
  {
    id: "40",
    recipeTitle: "Spicy Beef Tacos",
    recipeImg:
      "https://www.cookingforkeeps.com/wp-content/uploads/2017/09/Best-Spicy-Shredded-Beef-Tacos-3.jpg.webp",
    cookTime: "20 minutes",
    prepTime: "10 minutes",
    nutritions: { fats: "14g", iron: "4mg", carbs: "45g" },
    servings: 3,
    instructions: [
      "Step 1: Cook ground beef with taco seasoning until browned.",
      "Step 2: Warm tortillas and fill them with cooked beef and toppings.",
      "Step 3: Garnish with fresh cilantro, salsa, and cheese.",
    ],
    longDescription:
      "A delicious Mexican-inspired dish featuring spicy ground beef in soft tortillas, topped with fresh garnishes.",
    shortDescription:
      "Tasty spicy beef tacos with fresh toppings and a hint of lime.",
    ratings: 4.7,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Spicy"],
    dishCountry: ["Mexican "],
    tips: "Use freshly made tortillas for the best flavor. Adjust spice level to taste.",
    difficulty: "Easy",
    tags: ["Mexican", "Beef", "Tacos", "Spicy"],
  },
  {
    id: "41",
    recipeTitle: "Japanese Ramen",
    recipeImg:
      "https://i.pinimg.com/736x/2c/77/76/2c77760f638f4792c9ee5c49ec0b3976.jpg",
    cookTime: "50 minutes",
    prepTime: "20 minutes",
    nutritions: { fats: "18g", iron: "5mg", carbs: "60g" },
    servings: 2,
    instructions: [
      "Step 1: Prepare a rich broth by simmering bones and aromatics.",
      "Step 2: Cook fresh ramen noodles separately.",
      "Step 3: Assemble the bowl with broth, noodles, and toppings.",
    ],
    longDescription:
      "A flavorful Japanese ramen dish with a rich, umami-packed broth and tender noodles, topped with eggs and scallions.",
    shortDescription:
      "Authentic Japanese ramen with deep flavors and fresh toppings.",
    ratings: 4.9,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Spicy", "Non-Vegetarian"],
    dishCountry: ["Japanese "],
    tips: "Simmer the broth for hours to develop deep flavors. Use fresh noodles for the best texture.",
    difficulty: "Hard",
    tags: ["Japanese", "Ramen", "Noodles", "Soup"],
  },
  {
    id: "42",
    recipeTitle: "Butter Chicken",
    recipeImg:
      "https://img.freepik.com/premium-photo/compilation-mouthwatering-butter-chicken-images-stock-photo-portfolio_198067-494252.jpg",
    cookTime: "40 minutes",
    prepTime: "20 minutes",
    nutritions: { fats: "20g", iron: "6mg", carbs: "35g" },
    servings: 4,
    instructions: [
      "Step 1: Marinate chicken with yogurt and spices for 1 hour.",
      "Step 2: Cook the marinated chicken in a creamy tomato sauce.",
      "Step 3: Serve hot with naan or rice.",
    ],
    longDescription:
      "A rich and creamy Indian dish made with tender chicken pieces cooked in a spiced tomato-based gravy.",
    shortDescription:
      "Authentic butter chicken with a creamy, aromatic tomato-based sauce.",
    ratings: 4.8,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Spicy", "Non-Vegetarian"],
    dishCountry: ["Indian ", "Pakistani "],
    tips: "Marinate overnight for better flavor. Use fresh cream for a smoother sauce.",
    difficulty: "Medium",
    tags: ["Indian", "Pakistani", "Chicken", "Curry"],
  },
  {
    id: "43",
    recipeTitle: "French Croissants",
    recipeImg:
      "https://media.istockphoto.com/id/629455902/photo/french-boulangerie-fresh-croissant-for-sale.jpg?s=612x612&w=0&k=20&c=ImE0C1nh-Nq_FROYD3IcbeC1GrvA2RUH1zzbKPOY2Lg=",
    cookTime: "3 hours",
    prepTime: "1 hour",
    nutritions: { fats: "25g", iron: "2mg", carbs: "50g" },
    servings: 6,
    instructions: [
      "Step 1: Prepare and laminate the dough with butter.",
      "Step 2: Fold and roll the dough multiple times.",
      "Step 3: Bake until golden brown and flaky.",
    ],
    longDescription:
      "Classic French croissants with a buttery, flaky texture, made with a traditional lamination process.",
    shortDescription:
      "Golden, buttery croissants that are crispy on the outside and soft inside.",
    ratings: 4.9,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Dessert", "Sweets"],
    dishCountry: ["French "],
    tips: "Use high-quality butter for a richer taste. Chill dough between folds for better layers.",
    difficulty: "Hard",
    tags: ["Baking", "French", "Pastry", "Croissant"],
  },
  {
    id: "44",
    recipeTitle: "Stuffed Bell Peppers",
    recipeImg:
      "https://t4.ftcdn.net/jpg/05/17/79/61/360_F_517796104_wgWnFwCjS97vJjhUPDe2PG8Njh5D7LKi.jpg",
    cookTime: "40 minutes",
    prepTime: "15 minutes",
    nutritions: { fats: "12g", iron: "6mg", carbs: "35g" },
    servings: 4,
    instructions: [
      "Step 1: Preheat oven to 375°F and prepare bell peppers.",
      "Step 2: Cook ground meat with onions and spices.",
      "Step 3: Stuff peppers and bake until tender.",
    ],
    longDescription:
      "A delicious and healthy dish featuring bell peppers stuffed with seasoned meat and rice, baked to perfection.",
    shortDescription:
      "Stuffed bell peppers filled with a savory mixture of meat, rice, and seasonings, baked until tender and flavorful.",
    ratings: 4.7,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Vegetarian", "Non-Vegetarian"],
    dishCountry: ["Mexican ", "Greek "],
    tips: "For best flavor, use a mix of colorful bell peppers and season the stuffing well. Adding cheese on top enhances the taste.",
    difficulty: "Medium",
    tags: ["Stuffed", "Bell Peppers", "Mexican"],
  },
  {
    id: "45",
    recipeTitle: "Garlic Butter Shrimp",
    recipeImg:
      "https://media.istockphoto.com/id/984444796/photo/jumbo-tiger-prawn-scampi.jpg?s=612x612&w=0&k=20&c=zRjnCK9sogLudzPsyw8i7adrwT6lvkqwX0zkDFs3Qu4=",
    cookTime: "15 minutes",
    prepTime: "10 minutes",
    nutritions: { fats: "8g", iron: "3mg", carbs: "10g" },
    servings: 2,
    instructions: [
      "Step 1: Heat butter in a pan and sauté garlic.",
      "Step 2: Add shrimp and cook until pink.",
      "Step 3: Garnish with parsley and serve warm.",
    ],
    longDescription:
      "A quick and easy shrimp dish cooked in a flavorful garlic butter sauce, perfect as an appetizer or main course.",
    shortDescription:
      "Tender shrimp sautéed in rich garlic butter sauce, making it an easy yet elegant dish.",
    ratings: 4.9,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Vegetarian"],
    dishCountry: ["Italian ", "French "],
    tips: "For extra flavor, add a squeeze of lemon juice and a sprinkle of red pepper flakes.",
    difficulty: "Easy",
    tags: ["Shrimp", "Garlic", "Quick"],
  },
  {
    id: "46",
    recipeTitle: "Beef Stroganoff",
    recipeImg:
      "https://preview.redd.it/1wyfk1b6j1r41.jpg?width=640&crop=smart&auto=webp&s=a23653e4ce4b4e7205dff0e258155df135bb7c6f",
    cookTime: "30 minutes",
    prepTime: "10 minutes",
    nutritions: { fats: "15g", iron: "7mg", carbs: "40g" },
    servings: 4,
    instructions: [
      "Step 1: Sauté beef strips until browned.",
      "Step 2: Add onions, mushrooms, and creamy sauce.",
      "Step 3: Serve over egg noodles or rice.",
    ],
    longDescription:
      "A classic Russian dish featuring tender beef cooked in a creamy mushroom sauce, served over noodles or rice.",
    shortDescription:
      "Beef stroganoff is a creamy, rich dish with sautéed beef and mushrooms, perfect for a hearty meal.",
    ratings: 4.8,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Non-Vegetarian"],
    dishCountry: ["Russian ", "European "],
    tips: "Use tender cuts of beef and cook on low heat for a smooth and creamy sauce. Serve with fresh parsley.",
    difficulty: "Medium",
    tags: ["Beef", "Stroganoff", "Creamy"],
  },
  {
    id: "47",
    recipeTitle: "Spicy Mango Chicken",
    recipeImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_TdvXwgUfbUfyv1NL3SFIRo6jcI1GwPP25A&s",
    cookTime: "40 minutes",
    prepTime: "20 minutes",
    nutritions: { fats: "12g", iron: "4mg", carbs: "35g" },
    servings: 4,
    instructions: [
      "Step 1: Marinate chicken with mango puree, spices, and yogurt.",
      "Step 2: Cook on medium heat until tender.",
      "Step 3: Serve with steamed rice and fresh cilantro.",
    ],
    longDescription:
      "A delightful fusion of Sweets and spicy flavors, combining mango puree with seasoned chicken for a mouthwatering experience.",
    shortDescription:
      "A spicy and tangy mango-infused chicken dish, perfect for summer dinners.",
    ratings: 4.7,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Spicy", "Non-Vegetarian"],
    dishCountry: ["Mexican "],
    tips: "Use ripe mangoes for natural Sweetsness and balance the spice levels according to your preference.",
    difficulty: "Medium",
    tags: ["Chicken", "Spicy", "Mango", "Indian"],
  },
  {
    id: "48",
    recipeTitle: "Japanese Matcha Pancakes",
    recipeImg:
      "https://omnivorescookbook.com/wp-content/uploads/2018/05/1804_Matcha-Pancakes_002.jpg",
    cookTime: "30 minutes",
    prepTime: "15 minutes",
    nutritions: { fats: "6g", iron: "2mg", carbs: "55g" },
    servings: 2,
    instructions: [
      "Step 1: Mix matcha powder, flour, sugar, and eggs to form a batter.",
      "Step 2: Cook on low heat until golden brown.",
      "Step 3: Serve with whipped cream and maple syrup.",
    ],
    longDescription:
      "Fluffy and vibrant green pancakes infused with premium Japanese matcha for a rich umami taste.",
    shortDescription:
      "Soft and airy matcha-flavored pancakes, a perfect Japanese breakfast delight.",
    ratings: 4.9,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Dessert"],
    dishCountry: ["Japanese "],
    tips: "Sift the matcha powder before mixing to prevent clumps and enhance the flavor.",
    difficulty: "Medium",
    tags: ["Dessert", "Pancakes", "Matcha", "Japanese"],
  },
  {
    id: "49",
    recipeTitle: "Brazilian Feijoada",
    recipeImg:
      "https://media.istockphoto.com/id/1313384844/photo/feijoada-a-typical-brazilian-food.jpg?s=612x612&w=0&k=20&c=A-ggbcJIlkR8_KePtO-B7oKQ8ixA1dvnTWFa-4WkTWE=",
    cookTime: "2 hours",
    prepTime: "30 minutes",
    nutritions: { fats: "15g", iron: "8mg", carbs: "45g" },
    servings: 6,
    instructions: [
      "Step 1: Slow cook black beans with various meats and spices.",
      "Step 2: Simmer until flavors blend well.",
      "Step 3: Serve hot with rice and orange slices.",
    ],
    longDescription:
      "A traditional Brazilian stew made with black beans and a variety of meats, cooked to perfection.",
    shortDescription:
      "A rich and hearty Brazilian black bean stew with flavorful meats.",
    ratings: 4.8,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Non-Vegetarian"],
    dishCountry: ["Brazilian "],
    tips: "Use smoked meats for enhanced flavor and let the dish sit for a few hours before serving.",
    difficulty: "Hard",
    tags: ["Stew", "Brazilian", "Beans", "Traditional"],
  },
  {
    id: "50",
    recipeTitle: "Maxicon Shawarma",
    recipeImg:
      "https://media.istockphoto.com/id/888366454/photo/chicken-wrap.jpg?s=612x612&w=0&k=20&c=smy2oTsWnDDDEaS_Rkn6Jj-7KXll4FlO_aYR9BoKcu0=",
    cookTime: "50 minutes",
    prepTime: "20 minutes",
    nutritions: { fats: "18g", iron: "5mg", carbs: "45g" },
    servings: 4,
    instructions: [
      "Step 1: Marinate meat in yogurt and spices.",
      "Step 2: Grill or roast until perfectly cooked.",
      "Step 3: Serve in pita bread with fresh vegetables and sauces.",
    ],
    longDescription:
      "A flavorful and juicy Turkish shawarma served in soft pita bread with fresh toppings.",
    shortDescription:
      "A delicious Middle Eastern-style grilled meat wrap with flavorful seasonings.",
    ratings: 4.8,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Spicy", "Non-Vegetarian"],
    dishCountry: ["Turkish "],
    tips: "Use a vertical rotisserie for authentic taste. Let the meat rest before slicing.",
    difficulty: "Medium",
    tags: ["Turkish", "Shawarma", "Grilled"],
  },
  {
    id: "51",
    recipeTitle: "Chicken Congee with Coconut and Ginger",
    recipeImg:
      "https://www.shutterstock.com/image-photo/chicken-porridgerice-soup-sliced-breast-600nw-2094242494.jpg",
    cookTime: "1 hour",
    prepTime: "15 minutes",
    nutritions: { fats: "12g", iron: "3mg", carbs: "35g" },
    servings: 4,
    instructions: [
      "Step 1: Rinse rice until water runs clear.",
      "Step 2: In a pot, combine rice, chicken broth, coconut milk, and ginger.",
      "Step 3: Bring to a boil, then simmer until rice breaks down.",
      "Step 4: Add shredded chicken; cook until heated.",
      "Step 5: Season with salt and pepper; garnish with green onions.",
    ],
    longDescription:
      "This Chicken Congee with Coconut and Ginger is a comforting Asian rice porridge. The addition of coconut milk and fresh ginger adds a creamy texture and a warming flavor, making it an ideal dish for chilly days or when you're feeling under the weather.",
    shortDescription:
      "A creamy rice porridge with chicken, coconut milk, and ginger.",
    ratings: 4.8,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Non-Vegetarian"],
    dishCountry: ["Chinese "],
    tips: "For a richer flavor, use bone-in chicken pieces during cooking and remove bones before serving. Top with fried shallots or a drizzle of sesame oil for extra depth.",
    difficulty: "Easy",
    tags: ["Rice", "Chicken"],
  },
  {
    id: "52",
    recipeTitle: "Margherita Pizza",
    recipeImg:
      "https://t3.ftcdn.net/jpg/06/08/19/46/360_F_608194671_BNXAs98uEbTi1OXYHSN3GiVtJPbTIom6.jpg",
    cookTime: "15 minutes",
    prepTime: "1 hour",
    nutritions: { fats: "10g", iron: "2mg", carbs: "55g" },
    servings: 4,
    instructions: [
      "Step 1: Prepare pizza dough and let it rise for an hour.",
      "Step 2: Roll out the dough and add tomato sauce.",
      "Step 3: Place fresh mozzarella and basil on top.",
      "Step 4: Bake in a preheated oven at 475°F for 12-15 minutes.",
      "Step 5: Drizzle with olive oil and serve hot.",
    ],
    longDescription:
      "A classic Italian pizza topped with fresh tomato sauce, mozzarella cheese, and basil.",
    shortDescription:
      "A simple yet flavorful Italian pizza with fresh ingredients.",
    ratings: 4.7,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Vegetarian"],
    dishCountry: ["Italian "],
    tips: "Use high-quality tomatoes and fresh basil for authentic flavor.",
    difficulty: "Medium",
    tags: ["Pizza", "Italian", "Vegetarian"],
  },
  {
    id: "53",
    recipeTitle: "Spicy Chicken Karahi",
    recipeImg:
      "https://thumbs.dreamstime.com/b/culinary-journey-to-pakistan-authentic-chicken-karahi-zarda-rice-flavorful-feast-every-occasion-indulge-vibrant-351473261.jpg",
    cookTime: "40 minutes",
    prepTime: "20 minutes",
    nutritions: { fats: "15g", iron: "6mg", carbs: "30g" },
    servings: 4,
    instructions: [
      "Step 1: Heat oil and sauté onions until golden brown.",
      "Step 2: Add chicken and cook until it turns white.",
      "Step 3: Mix in tomatoes and spices, cook until tender.",
      "Step 4: Stir occasionally and cook until oil separates.",
      "Step 5: Garnish with fresh coriander and serve hot.",
    ],
    longDescription:
      "A traditional Pakistani chicken dish cooked with aromatic spices and a thick tomato-based gravy.",
    shortDescription:
      "A flavorful and spicy Pakistani dish cooked in a wok with tomatoes and spices.",
    ratings: 4.9,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Spicy", "Non-Vegetarian"],
    dishCountry: ["Pakistani "],
    tips: "For an authentic taste, use fresh tomatoes and cook on high flame until oil separates from the masala.",
    difficulty: "Medium",
    tags: ["Pakistani", "Karahi", "Chicken", "Spicy"],
  },
  {
    id: "54",
    recipeTitle: "Thai Green Curry",
    recipeImg:
      "https://www.recipetineats.com/tachyon/2019/02/Thai-Green-Curry_1.jpg",
    cookTime: "40 minutes",
    prepTime: "20 minutes",
    nutritions: { fats: "15g", iron: "5mg", carbs: "50g" },
    servings: 4,
    instructions: [
      "Step 1: Sauté curry paste in coconut oil.",
      "Step 2: Add chicken and cook until tender.",
      "Step 3: Simmer with coconut milk and serve.",
    ],
    longDescription:
      "A rich and aromatic Thai green curry made with fresh herbs, coconut milk, and tender chicken.",
    shortDescription:
      "A creamy and spicy Thai curry that pairs perfectly with jasmine rice.",
    ratings: 4.8,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Spicy", "Non-Vegetarian"],
    dishCountry: ["Thai "],
    tips: "Use fresh Thai basil and lime leaves for an authentic taste, and let the curry simmer for deeper flavors.",
    difficulty: "Medium",
    tags: ["Curry", "Thai", "Chicken", "Spicy"],
  },
  {
    id: "55",
    recipeTitle: "Caprese Salad",
    recipeImg:
      "https://media.istockphoto.com/id/1345888788/photo/caprese-salad.jpg?s=612x612&w=0&k=20&c=cvxuF6osxtSktuBP4tsHkb46547-HU9W-K8_rSq5UGY=",
    cookTime: "10 minutes",
    prepTime: "5 minutes",
    nutritions: { fats: "10g", iron: "2mg", carbs: "15g" },
    servings: 2,
    instructions: [
      "Step 1: Slice fresh mozzarella and tomatoes.",
      "Step 2: Layer with basil leaves.",
      "Step 3: Drizzle with olive oil and balsamic glaze.",
    ],
    longDescription:
      "A fresh and simple Italian salad with mozzarella, tomatoes, and basil.",
    shortDescription:
      "A refreshing Caprese salad with fresh ingredients and a drizzle of balsamic glaze.",
    ratings: 4.7,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Vegetarian"],
    dishCountry: ["Italian "],
    tips: "Use high-quality mozzarella and ripe tomatoes for the best taste.",
    difficulty: "Easy",
    tags: ["Italian", "Vegetarian", "Caprese"],
  },
  {
    id: "56",
    recipeTitle: "Paneer Tikka",
    recipeImg:
      "https://media.istockphoto.com/id/1252422687/photo/tandoori-paneer-tikka.jpg?s=612x612&w=0&k=20&c=yxMA7ukEuobnkaYbl_hP6vTa02ZLwDP9TVDMlE_OF-E=",
    cookTime: "30 minutes",
    prepTime: "20 minutes",
    nutritions: { fats: "12g", iron: "6mg", carbs: "35g" },
    servings: 4,
    instructions: [
      "Step 1: Marinate paneer cubes with yogurt and spices.",
      "Step 2: Skewer and grill until charred.",
      "Step 3: Serve hot with mint chutney.",
    ],
    longDescription:
      "A smoky and flavorful Indian appetizer made with marinated paneer cubes grilled to perfection.",
    shortDescription:
      "A delicious Indian starter, Paneer Tikka is a must-have for vegetarians who love grilled flavors!",
    ratings: 4.9,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Vegetarian", "Spicy"],
    dishCountry: ["Indian "],
    tips: "Marinate the paneer for at least an hour to absorb the flavors properly, and grill on high heat for the perfect char.",
    difficulty: "Medium",
    tags: ["Indian", "Paneer", "Vegetarian", "Spicy"],
  },
  {
    id: "57",
    recipeTitle: "Korean Bibimbap",
    recipeImg:
      "https://img.freepik.com/free-photo/fresh-gourmet-meal-wooden-table-close-up-generative-ai_188544-8192.jpg",
    cookTime: "40 minutes",
    prepTime: "25 minutes",
    nutritions: { fats: "14g", iron: "5mg", carbs: "60g" },
    servings: 4,
    instructions: [
      "Step 1: Cook rice and prepare assorted vegetables.",
      "Step 2: Sauté veggies and protein separately.",
      "Step 3: Assemble everything in a bowl and top with gochujang sauce.",
    ],
    longDescription:
      "A Korean mixed rice dish with sautéed vegetables, protein, and a flavorful gochujang sauce.",
    shortDescription:
      "Bibimbap is a colorful and wholesome Korean dish packed with flavors and textures.",
    ratings: 4.8,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Spicy", "Non-Vegetarian", "Vegetarian"],
    dishCountry: ["Korean "],
    tips: "Use fresh vegetables and mix well before eating to enjoy all the flavors evenly.",
    difficulty: "Medium",
    tags: ["Korean", "Rice", "Vegetarian", "Spicy"],
  },
  {
    id: "58",
    recipeTitle: "Turkish Pide",
    recipeImg:
      "https://img.freepik.com/free-photo/pide-with-stuffed-meat-cheese-pieces-fried-meat-wooden-bowl_140725-5376.jpg",
    cookTime: "50 minutes",
    prepTime: "30 minutes",
    nutritions: { fats: "18g", iron: "8mg", carbs: "70g" },
    servings: 4,
    instructions: [
      "Step 1: Prepare and roll out the dough.",
      "Step 2: Add the filling and shape the pide.",
      "Step 3: Bake until golden and crispy.",
    ],
    longDescription:
      "A delicious Turkish flatbread filled with meat, cheese, or vegetables, baked to perfection.",
    shortDescription:
      "Turkish Pide is a boat-shaped flatbread filled with flavorful toppings, a popular street food.",
    ratings: 4.9,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Non-Vegetarian"],
    dishCountry: ["Turkish "],
    tips: "Use high-quality flour for the dough, and brush the edges with egg wash for a golden crust.",
    difficulty: "Medium",
    tags: ["Turkish", "Flatbread", "Cheese", "Meat"],
  },
  {
    id: "59",
    recipeTitle: "Mexican Churros",
    recipeImg:
      "https://thumbs.dreamstime.com/b/mexican-churros-hot-chocolate-fried-wheat-flour-dough-very-popular-Sweets-snack-spain-mexico-other-countries-where-348360617.jpg",
    cookTime: "25 minutes",
    prepTime: "15 minutes",
    nutritions: { fats: "11g", iron: "4mg", carbs: "55g" },
    servings: 4,
    instructions: [
      "Step 1: Mix flour, water, and butter into a dough.",
      "Step 2: Pipe the dough into hot oil and fry until golden.",
      "Step 3: Roll in cinnamon sugar and serve with chocolate sauce.",
    ],
    longDescription:
      "Crispy and golden deep-fried dough sticks coated in cinnamon sugar, served with a rich chocolate dip.",
    shortDescription:
      "A classic Mexican dessert, churros are crispy, Sweets, and perfect for dipping in chocolate sauce!",
    ratings: 4.9,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Dessert", "Sweets"],
    dishCountry: ["Mexican "],
    tips: "Fry churros at the right temperature for a crispy outside and a soft inside. Avoid overcrowding the fryer.",
    difficulty: "Medium",
    tags: ["Mexican", "Dessert", "Sweets"],
  },
  {
    id: "60",
    recipeTitle: "Greek Moussaka",
    recipeImg:
      "https://media.istockphoto.com/id/1649030858/photo/moussaka-a-traditional-greek-dish.jpg?s=612x612&w=0&k=20&c=4Yu23AnEjgyfrNug_9pk6ST8sPFYWWgkZSUN966LQMQ=",
    cookTime: "60 minutes",
    prepTime: "30 minutes",
    nutritions: { fats: "22g", iron: "7mg", carbs: "50g" },
    servings: 4,
    instructions: [
      "Step 1: Cook ground meat with onions and spices.",
      "Step 2: Layer eggplants, meat sauce, and béchamel sauce.",
      "Step 3: Bake until golden and bubbly.",
    ],
    longDescription:
      "A traditional Greek layered dish made with eggplant, meat sauce, and creamy béchamel, baked to perfection.",
    shortDescription:
      "A hearty Greek comfort dish, Moussaka is rich, flavorful, and baked until golden brown.",
    ratings: 4.9,
    recipeVideoUrl: "https://www.youtube.com/@RubyKaKitchen",
    dishType: ["Non-Vegetarian"],
    dishCountry: ["Greek "],
    tips: "Salt eggplant slices before cooking to remove bitterness, and let the moussaka rest before serving for better texture.",
    difficulty: "Medium",
    tags: ["Greek", "Eggplant", "Meat"],
  },
];

// --------------------------setting recipes into firebase firestore

try {
  recipes.forEach(async (recipe) => {
    await setDoc(doc(db, "recipes", recipe.id), {
      id: recipe.id,
      recipeTitle: recipe.recipeTitle,
      recipeImg: recipe.recipeImg,
      cookTime: recipe.cookTime,
      prepTime: recipe.prepTime,
      nutritions: recipe.nutritions,
      servings: recipe.servings,
      instructions: recipe.instructions,
      longDescription: recipe.longDescription,
      tags: recipe.tags,
    });
  });
  console.log("Recipes saved successfully!");
} catch (error) {
  console.log("Error: ", error);
}

// --------------------------getting recipes from firebase firestore

export const getRecipes = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "recipes"));
    const Recipes = querySnapshot.docs.map((doc) => doc.data());
    return Recipes;
  } catch (error) {
    console.error("Error getting recipes: ", error);
  }
};

// -------------------Tasty api-------------------
// export const fetchTastyApi = async () => {
//   const url =
//     "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes";
//     const options = {
//       method: 'GET',
//       headers: {
//         'x-rapidapi-key': 'cbb7bff6e1msh355941c444e018ep17d674jsna176489edf46',
//         'x-rapidapi-host': 'tasty.p.rapidapi.com'
//       }
//     };

//   try {
//     const response = await fetch(url, options);
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const result = await response.json();
//     return result.results;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };
