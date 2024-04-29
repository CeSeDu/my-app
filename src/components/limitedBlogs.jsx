import React from 'react'
import fullBlogCards from '../../pages/fullBlogCards';

const limitedBlogs = (  {articles } ) => {
  return (

    <div>
      {articles.map((article, index) => (
        <div key={index}>
          {/* Makale detaylarını burada göster */}
        </div>
      ))}
    </div>

  )
}

export default limitedBlogs