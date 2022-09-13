const { Router } = require('express');
const axios = require ('axios')
const {Pokemon, Type} = require('../db')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//***********FUNCIO NESSSSSSSSSS****************/
const getApiInfo = async() =>{
try {    
    const apiResults = await axios.get('https://pokeapi.co/api/v2/pokemon')
    const apiNext = await axios.get(apiResults.data.next)
    const allPokemons = apiResults.data.results.concat(apiNext.data.results);
    for (let p of allPokemons) {
      let url = await axios.get(p.url);
      delete p.url;
      p.id = url.data.id;
      p.img = url.data.sprites.front_default;
      p.hp = url.data.stats[0].base_stat;
      p.strength = url.data.stats[1].base_stat;
      p.defense = url.data.stats[2].base_stat;
      p.speed = url.data.stats[5].base_stat;
      p.height = url.data.height;
      p.weight = url.data.weight;
      p.types = url.data.types.map((el) => el.type.name);
    }
    return allPokemons;
  } catch (error) {
    console.log(error);
  }

}

const getBdInfo = async()=>{
    return await Pokemon.findAll({
        include:{
            model: Type,
            attributes:['name'],
            through:{
                types:[],
            }
        }
    })
}

const getAllPokemons = async() =>{
    const apiInfo = await getApiInfo();
    const dbInfo = await getBdInfo();
    const infoTotal = apiInfo.concat(dbInfo);
    return infoTotal;

}


//***********RUTASSSSSS********** */

router.get('/pokemons', async(req, res) =>{
    const name = req.query.name;
    let pokemonesTotales = await getAllPokemons();
    if(name){
        let pokemonesName = await pokemonesTotales.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
        pokemonesName.length ?
        res.status(200).send(pokemonesName):
        res.status(404).send('El personaje no existe')
    }else{
        res.status(200).send(pokemonesTotales)
    }

})


router.get('/types', async (req,res) => {
    const typesPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const tipo = typesPokemon.data.results.map(el => el.name)
   const pokeEach = tipo.map(el => {
        for (let i= 0; i< el.length; i++)return el[i]})
    pokeEach.forEach(el => {        
        Type.findOrCreate({
            where: {name: el}
        }) 
    })

    const pokemonsAll = await Type.findAll();    
    res.send(pokemonsAll)
  

})



module.exports = router;
