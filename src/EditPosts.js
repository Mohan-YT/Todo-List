import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContaxt from './contaxt/DataContaxt'

const EditPosts = () => {
    const {post,handleEdit,editBody,setEditBody,editTitle,setEditTitle} = useContext(DataContaxt)
    const {id} = useParams()
    const posts = post.find(post=>(post.id).toString() === id)
    useEffect(()=>{
        if(posts){
            setEditTitle(posts.title)
            setEditBody(posts.body)
        }
    },[posts,setEditBody,setEditTitle])
  return (
    <main className='editpost'>
        <h2>Edit Post</h2>
        <form action="" className='editForm' onSubmit={(e)=> e.preventDefault()}>
            <label htmlFor="editTitle">Title :</label>
            <input type="text"
                    id='editTitle'
                    required
                    value={editTitle}
                    onChange={(e)=>setEditTitle(e.target.value)} />

            <label htmlFor="editBody">Post :</label>
            <input type="text"
                    id='editBody'
                    required
                    value={editBody}
                    onChange={(e)=>setEditBody(e.target.value)} />

            <button type='submit' onClick={()=>handleEdit(posts.id)}>Submit</button>
        </form>
    </main>
  )
}

export default EditPosts
