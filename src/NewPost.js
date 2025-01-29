import React, { useContext } from 'react'
import Post from './Post'
import DataContaxt from './contaxt/DataContaxt'

const NewPost = () => {
  const {handleSubmit,postTitle,setPostTitle,postBody,setPostBody} = useContext(DataContaxt)
  return (
    <main className='newpost'>
        <h2>New Post</h2>
        <form action="" className='newPostForm' onSubmit={handleSubmit}>
            <label htmlFor="postTitle">Title :</label>
            <input type="text"
                    id='postTitle'
                    required
                    value={postTitle}
                    onChange={(e)=>setPostTitle(e.target.value)} />

            <label htmlFor="postBody">Post :</label>
            <input type="text"
                    id='postBody'
                    required
                    value={postBody}
                    onChange={(e)=>setPostBody(e.target.value)} />

            <button type='submit'>Submit</button>
        </form>
    </main>
  )
}

export default NewPost
