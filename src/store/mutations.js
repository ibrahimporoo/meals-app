export function setKeyword(state, keyword) {
	state.keyword = keyword
}

export function setSearchedMeals(state, meals) {
	state.searchedMeals = meals
}

export function setSearchedMealsByLetter(state, meals) {
	state.mealsByLetter = meals
}

export function setSearchedIngredients(state, meals) {
	state.ingredients = meals
}

export function setSearchedMealsByIngredient(state, meals) {
	state.mealsByIngredient = meals
}