import React from 'react'
import fullBlogCards from '../../pages/fullBlogCards';

const limitedBlogs = (  {articles } ) => {
  return (

    <div>
      {articles.map((article, index) => (
        <div key={index}>
          
        </div>
      ))}
    </div>

  )
}

export default limitedBlogs