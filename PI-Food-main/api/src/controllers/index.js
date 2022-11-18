const axios = require ('axios')
const express = require('express')
const router = express.Router()
const { Diet, Recipe } = require("../db");



const getApiInfo = async() =>{
    const apiWeb = await axios.get('https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=1b8124b922d44f3c91d68bf7d0313ae7&&addRecipeInformation=true');
    const apiInfo = await apiWeb.data.results.map(el =>{
     return{
            id: el.id,
            name: el.title,
            image: el.image,           
            summary: el.summary,
            healthScore: el.healthScore,
            dishTypes: el.dishTypes,
            diets:el.diets,            
            steps: el.analyzedInstructions[0]?.steps.map(el => {
                return {
                    number: el.number, 
                    step: el.step,
                }
            }),
        }
    });
    return apiInfo;

};



const getDbInfo = async () => {
    return await Recipe.findAll({
        includes:{
            model: Diet,
            attributes: ['name'],
            through:{
                attributes:[],
            }


        }
    })
}

const getAllRecipes = async() =>{
    const apitotal = await getApiInfo();
    const dBTotal = await getDbInfo();
    const all = apitotal.concat(dBTotal);
    return all;
}

module.exports = {
    getApiInfo,
    getDbInfo,
    getAllRecipes,

}