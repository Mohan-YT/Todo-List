import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const PostLayout = () => {
  return (
        // example for nested router
      <main>
            <li><NavLink to='/postpage/1'>Post 1</NavLink></li>
            <li><NavLink to='/postpage/2'>Post 2</NavLink></li>
            <li><NavLink to='/postpage/3'>Post 3</NavLink></li>
            <li><NavLink to='/postpage/newpost'>NewPost</NavLink></li>
            <Outlet /> {/* used for nested routing.its importent for show the current page like click post 1 show post page */}
      </main>
  )
}

export default PostLayout
