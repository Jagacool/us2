export const initialstate=0

const Reducer=(state,action)=>{
    switch (action) {
        case "increment":
        return state+1
            
        case "decrement":
        return state-1
        case "reset":
        return initialstate
            
        default:
            return state
    }

}
export default Reducer