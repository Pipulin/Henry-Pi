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
export function getDiets(){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/diets');
        return dispatch({
            type: 'GET_DIETS',
            payload: json.data
        })
    }
}

export function getDetail(id){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/recipes/'+ id);
        return dispatch({
            type: 'GET_DETAILS',
            payload: json.data
        })
    }
}

export function postRecipes(payload){
    return async function (dispatch){
      const post = await axios.post("http://localhost:3001/recipes", payload);
      return post;
    }
}



export function getNameRecipes(name){   
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


