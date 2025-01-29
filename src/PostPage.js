// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const PostPage = () => {
//   return (
//     <h1>PostPage</h1>
//     // <main>
//     //   <li><NavLink to='/postpage/1'>Post 1</NavLink></li>
//     //   <li><NavLink to='/postpage/2'>Post 2</NavLink></li>
//     //   <li><NavLink to='/postpage/3'>Post 3</NavLink></li>
//     //   <li><NavLink to='/postpage/newpost'>NewPost</NavLink></li>
//     // </main>
//   )
// }
// export default PostPage



import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContaxt from './contaxt/DataContaxt';

const PostPage = () => {
  const {post,handleDelete} = useContext(DataContaxt)
  const {id} = useParams();
  const posts = post.find(item =>(item.id).toString() === id)
  return (
    <main className='postPage'>
        {
          posts && 
            <>
              <h2>{posts.title}</h2>
              <p>{posts.datetime}</p>
              <p>{posts.body}</p>
              <Link to={`/edit/${posts.id}`}>
                  <button className='edit-btn'>Edit Post</button>
              </Link>
              <button className='delete-btn' onClick={()=>handleDelete(posts.id)}>Delete Post</button>
            </>
        }
        {
          !posts &&
          <>
              <h1>Page Not Found</h1>
          </>
        }
    </main>
  )
}

export default PostPage
