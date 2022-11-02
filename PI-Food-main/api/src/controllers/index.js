const axios = require ('axios')
const express = require('express')
const router = express.Router()
const { Diet, Recipe } = require("../db");



const getApiInfo = async() =>{
    const apiWeb = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=da706cb3c62c4f88a984b8fa8fb230bd&');
    const apiInfo = await apiWeb.data.results.map(el =>{
     return{
            id: el.id,
            name: el.title,
            image: el.image,           
            summary: el.summary,
            healthyScore: el.healthyScore,
            dishTypes: el.dishTypes,
            diets: el.vegetarian === true ? 
            [...el.diets, 'vegetarian']
            : el.diets,
            steps: el.analyzedInstructions?.steps.map(el => {
                return {
                    number: s.number, 
                    step: s.step,
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
            attributes: ['title'],
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