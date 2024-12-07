import React from 'react';
import './body.css';

const Body = () => {
  return (
  <div className='body-section'>
    <div className="cta-container">
        <div className="title-button">
          <h1 className="cta-title">Bookery</h1>
          <h2 className="cta-subtitle">2024</h2>
          <h2 className="cta-subtitle">Winners</h2>
          <button className="cta-button">Explore Now</button>
        </div>
        <div className="cta-books">
          <div className='image-container'> 
            <img src="/images/livre3.jpg" alt="The Backyard Bird Chronicles" className="book-image zoom-image"/>
          </div>
          <div className='book-info'>
            <h3 className="book-category">Gift Book of the Year</h3>
            <p className="book-title">The Backyard Bird Chronicles</p>
            <p className="book-author">by Amy Tan</p>
          </div>
          <div className='image-container'>
            <img src="/images/livre2.jpg" alt="James" className="book-image zoom-image"/>
          </div>
          <div className='book-info'>
            <h3 className="book-category">Book of the Year</h3>
            <p className="book-title">James</p>
            <p className="book-author">by Percival Everett</p>
          </div>
          <div className='image-container'>
            <img src="/images/livre1-1.jpg" alt="Impossible Creatures" className="book-image zoom-image"/>
          </div>
          <div className='book-info'>
            <h3 className="book-category">Children's Book of the Year</h3>
            <p className="book-title">Impossible Creatures</p>
            <p className="book-author">by Katherine Rundell</p>
          </div>
        </div>
      </div> 

   <div className="section-container">
      <div className="section-header">
        <h2>The Best Books of 2024</h2>
        <h3><a href="#">See All Lists</a></h3>
      </div>

      <div className='section'>
        <div>
            <i className='fa fa-chevron-circle-left left'></i>
        </div>
        <div className="section-content">
          
          <div className='image-container'>
            <img src="/images/livre2.jpg" alt="James" className="book-image zoom-image"/>
          </div>
          <div className='book-info'>
            <p className="book-title">James</p>
            <p className="book-author">by Percival Everett</p>
            <p className="book-price">10 TND</p>
            <div className='stars'>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
             <i className='fa fa-star-half star'></i>
            </div>
            <div className='buttons'>
              <button className="cart-btn">
                <i className="fa fa-cart-plus"></i>
                <span>Add to cart</span>
              </button>
              <div className="see-btn">
                <i className='fa fa-chevron-right'></i>
                <i className='fa fa-chevron-right'></i>
                <i className='fa fa-chevron-right'></i>
              </div>
            </div>
          </div>
        </div>

        <div className="section-content">
          <div className='image-container'>
            <img src="/images/livre3.jpg" alt="James" className="book-image zoom-image"/>
          </div>
          <div className='book-info'>
            <p className="book-title">The Backyard Bird Chronicles</p>
            <p className="book-author">By Amy Tan</p>
            <p className="book-price">7.5 TND</p>
            <div className='stars'>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
             <i className='fa fa-star star-empty'></i>
            </div>
            <div className='buttons'>
              <button className="cart-btn">
                <i className="fa fa-cart-plus"></i>
                <span>Add to cart</span>
              </button>
              <div className="see-btn">
                <i className='fa fa-chevron-right'></i>
                <i className='fa fa-chevron-right'></i>
                <i className='fa fa-chevron-right'></i>
              </div>
            </div>
          </div>
        </div>

        <div className="section-content">
          <div className='image-container'>
            <img src="/images/livre1-1.jpg" alt="Impossible Creatures" className="book-image zoom-image"/>
          </div>
          <div className='book-info'>
            <p className="book-title">Impossible Creatures</p>
            <p className="book-author">by Katherine Rundell</p>
            <p className="book-price">12 TND</p>
            <div className='stars'>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
             <i className='fa fa-star-half star'></i>
            </div>
            <div className='buttons'>
              <button className="cart-btn">
                <i className="fa fa-cart-plus"></i>
                <span>Add to cart</span>
              </button>
              <div className="see-btn">
                <i className='fa fa-chevron-right'></i>
                <i className='fa fa-chevron-right'></i>
                <i className='fa fa-chevron-right'></i>
              </div>
            </div>
          </div>
        </div>

        <div className="section-content">
          <div className='image-container'>
            <img src="/images/livre4.jpg" alt="Impossible Creatures" className="book-image zoom-image"/>
          </div>
          <div className='book-info'>
            <p className="book-title">Intermezzo: A Novel</p>
            <p className="book-author">by Sally Rooney</p>
            <p className="book-price">14.99 TND</p>
            <div className='stars'>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
             <i className='fa fa-star-half star'></i>
            </div>
            <div className='buttons'>
              <button className="cart-btn">
                <i className="fa fa-cart-plus"></i>
                <span>Add to cart</span>
              </button>
              <div className="see-btn">
                <i className='fa fa-chevron-right'></i>
                <i className='fa fa-chevron-right'></i>
                <i className='fa fa-chevron-right'></i>
              </div>
            </div>
          </div>
        </div>

        <div className="section-content">
          <div className='image-container'>
            <img src="/images/livre5.jpg" alt="Impossible Creatures" className="book-image zoom-image"/>
          </div>
          <div className='book-info'>
            <p className="book-title">The Grey Wolf</p>
            <p className="book-author">by Louise Penny</p>
            <p className="book-price">9.99 TND</p>
            <div className="stars">
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star-empty' ></i>
            </div>
            <div className='buttons'>
              <button className="cart-btn">
                <i className="fa fa-cart-plus"></i>
                <span>Add to cart</span>
              </button>
              <div className="see-btn">
                <i className='fa fa-chevron-right'></i>
                <i className='fa fa-chevron-right'></i>
                <i className='fa fa-chevron-right'></i>
              </div>
            </div>
          </div>
        </div>
        <div>
            <i className='fa fa-chevron-circle-right right'></i>
        </div>
      </div>
    </div>

    <div className="section-container">
      <div className="section-header">
        <h2>Explore Our BestSellers</h2>
        <h3><a href="#">See All</a></h3>
      </div>

      <div className='section'>

        <div className="section-content">
          <div className='image-container'>
            <img src="/images/livre6.jpg" alt="James" className="book-image zoom-image"/>
          </div>
          <div className='book-info'>
            <p className="book-title">Phantasma</p>
            <p className="book-author">by Kaylie Smith</p>
            <p className="book-price">8.5 TND</p>
            <div className='stars'>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
             <i className='fa fa-star-half star'></i>
            </div>
            <div className='buttons'>
              <button className="cart-btn">
                <i className="fa fa-cart-plus"></i>
                <span>Add to cart</span>
              </button>
              <div className="see-btn">
                <i className='fa fa-chevron-right'></i>
                <i className='fa fa-chevron-right'></i>
                <i className='fa fa-chevron-right'></i>
              </div>
            </div>
          </div>
        </div>

        <div className="section-content">
          <div className='image-container'>
            <img src="/images/livre7.jpg" alt="James" className="book-image zoom-image"/>
          </div>
          <div className='book-info'>
            <p className="book-title">Wind and Truth</p>
            <p className="book-author">by Brandon Sanderson</p>
            <p className="book-price">7.89 TND</p>
            <div className='stars'>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
             <i className='fa fa-star star-empty'></i>
            </div>
            <div className='buttons'>
              <button className="cart-btn">
                <i className="fa fa-cart-plus"></i>
                <span>Add to cart</span>
              </button>
              <div className="see-btn">
                <i className='fa fa-chevron-right'></i>
                <i className='fa fa-chevron-right'></i>
                <i className='fa fa-chevron-right'></i>
              </div>
            </div>
          </div>
        </div>

        <div className="section-content">
          <div className='image-container'>
            <img src="/images/livre8.jpg" alt="Impossible Creatures" className="book-image zoom-image"/>
          </div>
          <div className='book-info'>
            <p className="book-title">The Spellshop</p>
            <p className="book-author">by Sarah Beth Durst</p>
            <p className="book-price">15 TND</p>
            <div className='stars'>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
             <i className='fa fa-star-half star'></i>
            </div>
            <div className='buttons'>
              <button className="cart-btn">
                <i className="fa fa-cart-plus"></i>
                <span>Add to cart</span>
              </button>
              <div className="see-btn">
                <i className='fa fa-chevron-right'></i>
                <i className='fa fa-chevron-right'></i>
                <i className='fa fa-chevron-right'></i>
              </div>
            </div>
          </div>
        </div>

        <div className="section-content">
          <div className='image-container'>
            <img src="/images/livre9.jpg" alt="Impossible Creatures" className="book-image zoom-image"/>
          </div>
          <div className='book-info'>
            <p className="book-title">We Used to Live Here: A Novel</p>
            <p className="book-author">by Marcus Kliewer</p>
            <p className="book-price">14.99 TND</p>
            <div className='stars'>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
             <i className='fa fa-star-half star'></i>
            </div>
            <div className='buttons'>
              <button className="cart-btn">
                <i className="fa fa-cart-plus"></i>
                <span>Add to cart</span>
              </button>
              <div className="see-btn">
                <i className='fa fa-chevron-right'></i>
                <i className='fa fa-chevron-right'></i>
                <i className='fa fa-chevron-right'></i>
              </div>
            </div>
          </div>
        </div>

        <div className="section-content">
          <div className='image-container'>
            <img src="/images/livre10.jpg" alt="Impossible Creatures" className="book-image zoom-image"/>
          </div>
          <div className='book-info'>
            <p className="book-title">Cone of Shame</p>
            <p className="book-author">by Winnie Au</p>
            <p className="book-price">10.2 TND</p>
            <div className="stars">
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star'></i>
              <i className='fa fa-star star-empty' ></i>
            </div>
            <div className='buttons'>
              <button className="cart-btn">
                <i className="fa fa-cart-plus"></i>
                <span>Add to cart</span>
              </button>
              <div className="see-btn">
                <i className='fa fa-chevron-right'></i>
                <i className='fa fa-chevron-right'></i>
                <i className='fa fa-chevron-right'></i>
              </div>
            </div>
          </div>
        </div>
      

      </div>
    </div>
    
    <img src="/images/Cta1.jpg" alt="cta-img" className="BlackFriday"></img>
     
    
</div> 
  );
};

export default Body;