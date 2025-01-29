import React from 'react'
import { createContext, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import {format} from 'date-fns'
import api from "../api/post";
import useWindowSize from '../hooks/useWindowSize';
import UseAxiosFetch from '../hooks/UseAxiosFetch';

const DataContaxt = createContext({});


export const DataProvider = ({children})=>{
    const [search,setSearch] = useState('')  //for search input
    const [post,setPost] = useState([])
    const [searchresult,setSearchResult] = useState([])  //for show the searching post
    const [postTitle,setPostTitle] = useState('')
    const [postBody,setPostBody] = useState('')
    const [editTitle,setEditTitle] = useState('')
    const [editBody,setEditBody] = useState('')
    const navigate = useNavigate()
    const {width} = useWindowSize()
    //custome hook
    const {data,error,isLoading} = UseAxiosFetch("http://localhost:3500/post")
    useEffect(()=>{
      setPost(data)
    },[data])
    // useEffect(()=>{
    //   const fetchPost = async ()=>{
    //     try{
    //       const responce = await api.get("/post") //data get from server
    //       setPost(responce.data) //axios is easy to get data not convert json formet directly use data
    //     }catch(error){
    //       if(error.responce){ 
    //         console.log(error.responce.data)
    //         console.log(error.responce.status)
    //         console.log(error.responce.header)
    //       }else{
    //         console.log(`Error ${error.message}`)
    //       }
    //     }
    //   }
    //   fetchPost()
    // },[])
  
    useEffect(()=>{
      const filterResults = post.filter((post)=>
        ((post.body).toLowerCase()).includes(search.toLowerCase())
        || ((post.title).toLowerCase()).includes(search.toLowerCase())) 
                          
      setSearchResult(filterResults.reverse())
    },[post,search])
  
  
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const id = post.length ? post[post.length -1].id + 1 : 1 ;
        const datetime = format( new Date(),'MMMM dd,yyyy pp');
        const newPost = {id,title:postTitle,datetime,body:postBody}
       try{
        const responce = await api.post("/post",newPost)  //data send to server 
        // const allPost = [...post,newPost]
        const allPost = [...post,responce.data]
        setPost(allPost)
        setPostTitle('')
        setPostBody('')
        navigate('/')
       }catch(error){
        if(error.responce){ 
          console.log(error.responce.data)
          console.log(error.responce.status)
          console.log(error.responce.header)
        }else{
          console.log(`Error ${error.message}`)
        }
      }
    }
    const handleDelete = async (id)=>{
      try{
        await api.delete(`/post/${id}`)
        const postAfterDelete = post.filter((item)=>item.id !== id);
        setPost(postAfterDelete)
        navigate('/')
      }catch(err){
        console.log(`Error : ${err.message}`)
      }
        
    }
    const handleEdit = async (id)=>{
        const datetime = format( new Date(),'MMMM dd,yyyy pp');
        const updatedPost = {id,title:editTitle,datetime,body:editBody}
      try{
        const responce = await api.put(`/post/${id}`,updatedPost)
        setPost(post.map(posts =>posts.id === id ? {...responce.data} : posts))
        setEditTitle('')
        setEditBody('')
        navigate('/')
      }catch(err){
        console.log(`Error : ${err.message}`)
      }
    }
    return(
        <DataContaxt.Provider value={{    
            width,search,setSearch,searchresult,error,isLoading,handleSubmit,postTitle,setPostTitle,postBody,setPostBody,post,handleDelete,handleEdit,editBody,setEditBody,editTitle,setEditTitle
        }}>
            {children}  
        </DataContaxt.Provider>
    )
}
export default DataContaxt