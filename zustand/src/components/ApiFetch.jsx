import { useEffect } from "react"
import { useApiStore } from "../store/apiStore"

function ApiFetch() {
    const {posts,errors,loading,fetchPosts}=useApiStore()

    useEffect(()=>{
        fetchPosts()
    },[fetchPosts])

    if(posts.length>0){
   
         return (
    <div>
        {loading===true?<p>Data Loading</p>:<p>No Data Loading</p>}
        <h1>You are getting errors:{errors!==null?errors:'No errors'}</h1>
        {posts.map((post)=>(
            <>
            <h1>{post.title}</h1>
            <h1>{post.body}</h1>
            </>
        ))}

    </div>
  )
    }
    if(errors){
        return(
            <h1>You got many errors:{errors}</h1>
        )
    }
    if(loading){
        return(
            <h2>Conent Loading</h2>
        )
    }
 
}

export default ApiFetch