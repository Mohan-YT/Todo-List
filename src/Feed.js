import React from 'react'
import Post from './Post'

const Feed = ({posts = []}) => {
  return (
    <section>
    {posts.length ? (
      posts.map(post => <Post key={post.id} post={post} />)
    ) : (
      <p>No posts available</p>
    )}
  </section>

  )
}

export default Feed
