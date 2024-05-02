import axiosClient from "../axiosClient";

export function handleKeyword({ commit }, keyword) {
	commit('setKeyword', keyword)
}

export function searchMeal({ commit }, keyword) {
	axiosClient
		.get(`search.php?s=${keyword}`)
		.then(({ data }) => {
			commit('setSearchedMeals', data.meals)
		})
}

export function searchMealByLetter({ commit }, letter) {
	axiosClient
		.get(`search.php?f=${letter}`)
		.then(({ data }) => {
			commit('setSearchedMealsByLetter', data.meals)
		})
}

export function searchedIngredients({ commit }) {
	axiosClient
		.get(`list.php?i=list`)
		.then(({ data }) => {
			commit('setSearchedIngredients', data.meals)
		})
}

export function searchMealsByIngredient({ commit }, ingredient) {
	axiosClient
		.get(`filter.php?i=${ingredient}`)
		.then(({ data }) => {
			commit('setSearchedMealsByIngredient', data.meals)
		})
}