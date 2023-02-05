const intiallState = {
    token:"",
    id:""
}

const tokenReducer = (prevState = intiallState,action) =>{
          switch(action.type){
            case "storeToken":
                return{
                    ...prevState,
                    token:action.token,
                    id:action.id
                }
                case "removeToken":
                    return{
                        ...prevState,
                        token:"",
                        id:""
                    }
                 default:
                    return intiallState

          }

}

export default tokenReducer;