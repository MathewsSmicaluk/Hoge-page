import React from 'react'
import './style.css';
import { Card, Carousel } from 'react-bootstrap'
import branco from '../../img/branco.png'

function index(props) {
  return (
    <>

      <div className='flex'>

      <Carousel className='carrossel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn1.mundodastribos.com/446942-vestibulinho-etec-2012-2-semestre.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn1.mundodastribos.com/446942-vestibulinho-etec-2012-2-semestre.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn1.mundodastribos.com/446942-vestibulinho-etec-2012-2-semestre.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        <Card
          className='carouselCard'>
          <Card.Img className='IMG' src={branco} />
          <Card.Body>
            <Card.Title>

              <img/>
            </Card.Title>
          </Card.Body>
        </Card>

      </div>
    </>
  )
}

export default index