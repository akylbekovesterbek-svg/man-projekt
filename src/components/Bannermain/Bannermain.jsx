import React from 'react'
import "./BannerMain.scss"

import Carousel from 'react-bootstrap/Carousel';
import image   from "../../assets/img/image.png"




function BannerMain() {
  return (
    <div className='banner'>
        <div className='sidebar'>
            <ul>
                <li>Woman’s Fashion</li>
                <li>Men’s Fashion</li>
                <li>Electronics</li>
                <li>Home & Lifestyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby’s & Toys</li>
                <li>Groceries & Pets</li>
                <li>Health & Beauty</li>
            </ul>
        </div>
        <div className='carousel'>
            <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={image} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img style={{ width: "892px",
        height: "344px",
        objectFit: "cover"}} src="https://www.shutterstock.com/image-photo/ads-dashboard-screen-digitaldigital-marketing-260nw-2579435835.jpg" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img style={{ width: "892px",
        height: "344px",
        objectFit: "cover"}} src="https://img.freepik.com/fotos-premium/concepto-uso-tecnologia-medios-digitales_122299-440.jpg" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        </div>

    </div>
  )
}

export default BannerMain