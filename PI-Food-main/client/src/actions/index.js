import axios from 'axios';




export function getRecipes(){
    return async function(dispatch){
       var json = await axios.get('http://localhost:3001/recipes');
       return dispatch({
            type: 'GET_RECIPES',
            payload: json.data
       }) 
    }
} 

export function getNameRecipes(name){
   /*  return async function (dispatch){
        var json = await axios.get('http://localhost:3001/recipes?name' + name)
        return dispatch({
            type: 'GET_NAME',
            payload: json.data
        })

    } */
    return {
        type: "GET_NAME",
        payload: name,
      };
    }



export function filterHealth(payload){
    return{
        type: 'FILTER_HEALTH',
        payload
    }
} 

export function filterAzZa(payload){
    return{
        type: 'FILTER_AZZA',
        payload
    }
}

export function filterDietsTypes(payload){
    return{
        type: 'FILTER_BY_DIETS',
        payload
    }
}

export function filterByCreated(payload){
    return{
        type: 'FILTER_CREATED',
        payload

    }
}


