
const initialState = {
    recipes :[],
    allRecipes:[],
    
   
}


function rootReducer (state=initialState, action){
    switch(action.type){
         case 'GET_RECIPES':
                return {
                    ...state,
                    recipes: action.payload,
                    allRecipes: action.payload,
                    
                }


         case 'FILTER_AZZA':            
             let sortA = action.payload ==='asc'? state.recipes.sort(function (a,b) {
                  if(a.name > b.name){
                      return 1;
                        }
                  if(b.name > a.name){
                            return -1
                        }
                        return 0;
             }) :
             state.recipes.sort(function(a,b){
                   if(a.name > b.name){
                            return -1;
                        }
                   if (b.name > a.name) {
                     return 1;
                   }
                        return 0;
        
                    })
                 return {
                        ...state,
                        recipes: sortA
                    }
                    
         case 'FILTER_HEALTH':
             let heal = action.payload ==='low'? state.recipes.sort(function (a,b) {        
                  if (a.healthScore < b.healthScore) {
                    return 1;
                        }
                   if (b.healthScore < a.healthScore){
                            return -1
                        }
                        return 0;
                 }) :
              state.recipes.sort(function(a,b){
                   if (a.healthScore < b.healthScore){
                            return -1;
                        }
                    if (b.healthScore < a.healthScore) {
                      return 1;
                        }
                        return 0;
        
                    })  
                    return {
                      ...state,
                      recipes: heal,
                    };


         case 'FILTER_BY_DIETS':
              const allRecipes = state.allRecipes;
              const filterByDiets = action.payload ==='none'? allRecipes:allRecipes.filter((e) =>
                    e.diets.includes(action.payload)
            );
              return{
                     ...state,
                     recipes: filterByDiets,
            }       



         case 'FILTER_CREATED':
             //const recipesAll = state.allRecipes;
             const filterCreated = action.payload === 'created'? state.allRecipes.filter((e) => e.createdDB) : state.allRecipes.filter((e) => !e.createdDB)

             return{
                    ...state,
                    recipes: action.payload === 'all'? state.allRecipes : filterCreated
             }


         






                default:
                    return state;
    }


}

export default rootReducer;