import React from "react"
import Loading from "../Loading"
const withLoading = (Component)=>{
    return props=>props.isLoading||props.data.length===0?<Loading />:<Component {...props}/>
}
export default withLoading