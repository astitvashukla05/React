import {create} from 'zustand'

export const useApiStore=create((set)=>({
    posts:[],
    loading:false,
    errors:null,
    fetchPosts:async ()=>{
        set({loading:true,errors:null})
        try {
            const res=await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            const data=await res.json()
            set({loading:false,errors:null,posts:data})

            
        } catch (error) {
            set({loading:true,errors:error})
            
        }
    }

}))