import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Article from './Article';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Article title="On the Street in Brooklyn" imageSrc="/src/images/blog-image-1.jpg" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, quia quo! Commodi eaque labore omnis cumque reiciendis porro ipsa aliquam delectus expedita a dolorum enim voluptatem tempore similique at nisi eos ipsam saepe, ea quasi magnam. Voluptatibus voluptatum quae, nesciunt assumenda ipsam commodi rerum enim sit, dignissimos doloremque soluta ad deserunt quis quas voluptate reiciendis laboriosam neque maiores dolores, consequatur molestias aliquam. Corporis error cupiditate ex ipsa? Cupiditate eum consequuntur atque illum asperiores enim porro." />
      <Article title="Vintage in Vogue" imageSrc="/src/images/blog-image-2.jpg" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat, quia quo! Commodi eaque labore omnis cumque reiciendis porro ipsa aliquam delectus expedita a dolorum enim voluptatem tempore similique at nisi eos ipsam saepe, ea quasi magnam. Voluptatibus voluptatum quae, nesciunt assumenda ipsam commodi rerum enim sit, dignissimos doloremque soluta ad deserunt quis quas voluptate reiciendis laboriosam neque maiores dolores, consequatur molestias aliquam. Corporis error cupiditate ex ipsa? Cupiditate eum consequuntur atque illum asperiores enim porro." />
      <Footer />
    </div>
  );
}

export default App;
