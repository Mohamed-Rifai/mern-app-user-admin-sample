export const storeToken = (data)=>{

    return (dispatch)=>{

        dispatch({
            type:"storeToken",
            token:data.token,
            id:data.id
        })
    }
}

export const removeToken = (data)=>{

    return (dispatch)=>{

        dispatch({
            type:"removeToken",
            token:data.token,
            id:data.id
        })
    }
}