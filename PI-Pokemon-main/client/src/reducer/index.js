
const initialState = {
    pokemones : [],
    allPokemones:[],
    types:[],
    detail:[]

}


 function rootReducer(state = initialState, action){
   
    switch(action.type) {
        case 'GET_POKEMONS':          
            return {
                ...state,
                pokemones: action.payload,
                allPokemones:action.payload
            }

        case 'GET_NAME_POKEMON':          
            let nombres =
        action.payload === ""
          ? state.allPokemones
          : state.pokemones.filter((e) =>
              e.name.toLowerCase().includes(action.payload.toLowerCase())
            );
         return {
        ...state,
        pokemones: nombres
        };

        case 'GET_TYPES':
            return{
                ...state,
                types: action.payload
            }

        case 'POST_POKEMON':
            return{
                ...state,
            }


        case 'FILTER_BY_TYPES':
            const todosPokemones= state.allPokemones
            const typesFiltered = action.payload === "type"? todosPokemones : todosPokemones.filter(el=>// el.type === action.payload
            
            {
                if(Array.isArray(el.type)){
                        let tipo1=el.type.map((t)=>t)
                    return tipo1.includes(action.payload.charAt(0).toUpperCase()+ action.payload.slice(1)+ ' ');
                    }
                if(Array.isArray(el.types)){
                    let tipo=el.types.map((t)=>t.name)
                return tipo.includes(action.payload)}
                    return true                
            }
            )
            return{
                ...state,
                pokemones: typesFiltered
            }
        
        case 'FILTER_CREATED':
            const todosPokemones2= state.allPokemones
            const createdFilter = action.payload === 'created'? todosPokemones2.filter(el => el.createdDB): todosPokemones2.filter(el=> !el.createdDB)
            
            return{
                ...state,
                pokemones:  createdFilter
            }
        case 'FILTER_AZZA':
            let sortedA= action.payload ==='asc'? state.pokemones.sort(function (a,b) {//.sort me va a ir comparando los dos valores.
                if(a.name.lowerCase() > b.name.lowerCase()){
                    return 1;
                }
                if(b.name.lowerCase() > a.name.lowerCase()){
                    return -1
                }
                return 0;
            }) :
            state.pokemones.sort(function(a,b){
                if(a.name.lowerCase() > b.name.lowerCase()){
                    return -1;
                }
                if(b.name.lowerCase() > a.name.lowerCase()){
                    return 1
                }
                return 0;

            })
            return {
                ...state,
                pokemones: sortedA
            }
        case 'FILTER_ATACK':
            let atk = action.payload ==='mayor'? state.pokemones.sort(function(a,b){

                if(a.strength > b.strength){
                    return 1;
                }
                if(b.strength > a.strength){
                    return -1
                }
                return 0;
            }) :
            state.pokemones.sort(function(a,b){
                if(a.strength > b.strength){
                    return -1;
                }
                if(b.strength > a.strength){
                    return 1
                }
                return 0;

            }) 
        case 'GET_DETAIL':
            
            return {
              ...state,
              detail: action.payload 
            }
        
        case 'RESET':
            return{
                ...state,
                pokemones: state.allPokemones,
            }
        
       
            
            default:
                return state;
                
        } 
    }

    export default rootReducer;







