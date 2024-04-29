import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-blue-950 text-white flex justify-center text-center p-2'>
        <p>copyright &copy; {currentYear} Get me a coffee - All Rights Reserved!</p>
    </footer>
  )
}

export default Footer
