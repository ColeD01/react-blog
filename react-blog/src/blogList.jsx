import { useState } from 'react'



export default function blogList(blog) {
    
    return(
        <div className='blogList'>
            <h2>{blog.title}</h2>
            <h3>{blog.subTitle}</h3>
            <span>{`Posted by ${blog.author} on ${blog.date}`}</span>
            <hr className='break' />
        </div>
    )
}