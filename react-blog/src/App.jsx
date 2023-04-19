import { useState } from 'react'

import Header from "./header.jsx"
import Blog from "./blogList.jsx"
import Data from "./data.js"
import Footer from "./footer.jsx"

export default function App() {
  const blogElements = Data.map(blog => {
    return <Blog title={blog.title} subTitle={blog.subTitle} author={blog.author} date={blog.date} />
  })
  return(
    <div>
      <Header />
      {blogElements}
      <Footer />
    </div>
  )
}

// http://127.0.0.1:5173/ 