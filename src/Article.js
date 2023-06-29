import React from 'react'
import Brooklyn from './images/blog-image-1.jpg'
import Vogue from './images/blog-image-2.jpg'

function Article() {
  return (
   <article>
    <h3>"On the Street in Brooklyn"</h3>
    <img src={Brooklyn} alt="Brooklyn"/>
    <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, quia quo! Commodi eaque labore omnis cumque reiciendis porro ipsa aliquam delectus expedita a dolorum enim voluptatem tempore similique at nisi eos ipsam saepe, ea quasi magnam. Voluptatibus voluptatum quae, nesciunt assumenda ipsam commodi rerum enim sit, dignissimos doloremque soluta ad deserunt quis quas voluptate reiciendis laboriosam neque maiores dolores, consequatur molestias aliquam. Corporis error cupiditate ex ipsa? Cupiditate eum consequuntur atque illum asperiores enim porro."</p>
    <a href="continues" class="continue-reading">Continues...</a>
   

   
    <h3>"Vintage in Vogue"</h3>
    <img src={Vogue} alt="Vogue" />
    <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, quia quo! Commodi eaque labore omnis cumque reiciendis porro ipsa aliquam delectus expedita a dolorum enim voluptatem tempore similique at nisi eos ipsam saepe, ea quasi magnam. Voluptatibus voluptatum quae, nesciunt assumenda ipsam commodi rerum enim sit, dignissimos doloremque soluta ad deserunt quis quas voluptate reiciendis laboriosam neque maiores dolores, consequatur molestias aliquam. Corporis error cupiditate ex ipsa? Cupiditate eum consequuntur atque illum asperiores enim porro."</p>
    <a href="continues" class="continue-reading">Continues...</a>
   </article>
  )
}

export default Article