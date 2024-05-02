import { createWebHistory, createRouter } from "vue-router";

import Home from '../views/Home.vue'
import MealList from "../views/MealList.vue"
import MealsByName from "../views/MealsByName.vue"
import MealsByLetter from "../views/MealsByLetter.vue"
import MealsByIngredient from "../views/MealsByIngredient.vue"

import DefaultLayout from "../components/DefaultLayout.vue"
import GuestLayout from "../components/GuestLayout.vue";
import MealDetails from "../views/MealDetails.vue";
import IngredientsList from "../views/IngredientsList.vue";

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '/', component: Home },
      { path: '/letter/:letter', name: "byLetter", component: MealList },
      { path: '/by-letter/:letter?', name: "byLetter", component: MealsByLetter },
      { path: '/by-name/:name?', name: "byName", component: MealsByName },
      { path: '/ingredients', name: "ingredients", component: IngredientsList },
      { path: '/by-ingredient/:ingredient?', name: "byIngredient", component: MealsByIngredient },
      { path: '/meal/:id?', name: "byMealDetails", component: MealDetails },
    ],
  },
  {
    path: '/guest',
    component: GuestLayout,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router