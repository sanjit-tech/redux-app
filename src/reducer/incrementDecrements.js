const initialState = 10

const changeNumber =(state = initialState, action)=>{
 switch (action.type) {
     case "INCREMENT" : return initialState + 1;
     case "DECREMENT" : return initialState - 1;
     default : return state

 }
}
export default changeNumber