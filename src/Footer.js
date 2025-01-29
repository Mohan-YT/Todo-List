import React from 'react'

const Footer = () => {
  const date = new Date()
  return (
    <footer className='footer'>
      <h1>Footer</h1>
      <p style={{textAlign:'center'}}>{date.getFullYear()}</p>
    </footer>
  )
}

export default Footer
