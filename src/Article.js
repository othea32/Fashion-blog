import React from 'react'

function Article({ title, imageSrc, content}) {
  return (
   <article>
    <h3>{title}</h3>
    <img src={imageSrc} alt={`Blog Post ${title}`} />
    <p>{content}</p>
    <a href="continues" class="continue-reading">Continues...</a>
   </article>
  )
}

export default Article