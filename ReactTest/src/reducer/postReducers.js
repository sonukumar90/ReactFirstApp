import  {FATCH_POSTS, NEW_POSTS,SINGLE_POSTS} from '../action/type'


const initialStats={
    items:[],
    item:[],
    singleItem:[],
}

export default function(state=initialStats,action){
    switch(action.type){
        case FATCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POSTS:
                return {
                    ...state,
                    item: action.payload
            }
        case SINGLE_POSTS:
            return{
                ...state,
                singleItem:action.singleResponse
            }
        default:
           return state;
    }
}