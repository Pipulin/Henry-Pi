const axios = require ('axios')
const { Router } = require('express');
const {Recipe, Diet} = require ('../db')
const {getAllRecipes} = require ('../controllers');
const express = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/recipes', async (req, res) =>{
    const name = req.query.name;
    let allRecipes = await getAllRecipes();
    if(name){
        let recipeName = await allRecipes.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
        recipeName.length ?
        res.status(200).send(recipeName):
        res.status(404).send('La receta no Existe')
    }else{
        res.status(200).send(allRecipes)
    }
})




router.get('/diets', async (req, res) =>{
  
const diet = [
    "dairy Free",
    "gluten free",
    "ketogenic",
    "lacto ovo vegetarian",
    "foodmap friendly",
    "paleolithic",
    "vegan",
    "pescetarian",
    "primal",
    "whole 30",
    
    
]
    diet.forEach(el =>{
        Diet.findOrCreate({
            where: { name: el}
        })
    })
const allDiets = await Diet.findAll()
res.send(allDiets)
 
})




router.post('/recipes', async (req, res)=>{
    let {
        name,
        image,
        summary,
        healthScore,
        dishTypes,
        steps,
        diets, 
        createdDB,

    } = req.body

    const recipeCreate = await Recipe.create({
        name,
        image,
        summary,
        healthScore,
        dishTypes,
        steps,
        diets,          
        createdDB ,
    })

    const dietDb = await Diet.findAll({
        where: { name: diets}
        })
    recipeCreate.addDiet(dietDb)
    res.send('Receta creada con Exito!!')
})


router.get('/recipes/:id', async (req, res) =>{
    const id = req.params.id;
    const totalRecipes = await getAllRecipes()
try{
    if(id){
       const recipesId = totalRecipes.filter(el => el.id == id) 
       recipesId.length?
       res.status(200).json(recipesId): 
       res.status(400).send('Receta no encontrada')

    }
}catch(error){
    res.status(400).send({error: error.message})
}})








module.exports = router;
