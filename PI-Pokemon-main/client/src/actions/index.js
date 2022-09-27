import axios from 'axios';


export function getApiInfo(){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/pokemons');             
        return dispatch({
            type:'GET_POKEMONS',
            payload: json.data
        })
    }

}

export function getNamePokemones(name){
    return {
        type: "GET_NAME_POKEMON",
        payload: name,
      };
    }


export function filterPokemonesByType(payload){
    
    return{
        type: 'FILTER_BY_TYPES',
        payload
    } 
   
}


export function filterCreated(payload){//payload es el value de la opcion que elegimos en el menu select
    return{
        type: 'FILTER_CREATED',
        payload
    }

}

export function filterAzZa(payload){
    return{
        type: 'FILTER_AZZA',
        payload
    }
}

export function filterAttack(payload){
    return{
        type: 'FILTER_ATACK',
        payload
    }
} 


