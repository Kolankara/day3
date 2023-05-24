import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function App() {
  let districts=[
    {
      "id":1,
      "title":"trivandrum",
      "description":"",
      "image":"https://www.oyorooms.com/blog/wp-content/uploads/2019/06/Padmanabha-Swamy-Temple-Famous-8-places-to-visit-in-trivandrum-1.jpg",
    },
    {
      "id":2,
      "title":"kollam",
      "description":"",
      "image":"https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592.jpg"
    },
    {
      "id":3,
      "title":"kozhikode",
      "description":"",
      "image":"https://yometro.com/images/places/kozhikode-beach.jpg",
    },
    {
      "id":4,
      "title":"pathanamthitta",
      "description":"",
      "image":"https://static.javatpoint.com/tourist-places/images/tourist-places-in-pathanamthitta1.png"
    },
    {
      "id":5,
      "title":"idukki",
      "description":"",
      "image":"https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/812.jpg",
    },
    {
      "id":6,
      "title":"Alapuzha",
      "description":"",
      "image":"https://www.tourmyindia.com/blog//wp-content/uploads/2021/09/Best-Places-to-Visit-in-Alleppey-Kerala.jpg"
    },
    {
      "id":7,
      "title":"Ernakulam",
      "description":"",
      "image":"https://im.hunt.in/cg/City-Guide/hill-palace-erna.jpg",
    },
    {
      "id":8,
      "title":"thrissur",
      "description":"",
      "image":"https://img.traveltriangle.com/blog/wp-content/uploads/2018/03/cover6.jpg",
    },
    {
      "id":9,
      "title":"malappuram",
      "description":"",
      "image":"https://keralatourism.travel/images/destinations/headers/malappuram-kerala-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    },
    {
      "id":10,
      "title":"kannur",
      "description":"",
      "image":"https://www.trawell.in/admin/images/thumbs/682559714Kannur_Lighthouse_thumb.jpg",
    },
    {
      "id":11,
      "title":"kasargod",
      "description":"",
      "image":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/42/51/31/bekal-fort.jpg?w=500&h=400&s=1",
    },
    {
      "id":12,
      "title":"wayanad",
      "description":"",
      "image":"https://www.fabhotels.com/blog/wp-content/uploads/2021/04/Banasura_Sagar_Dam_1000x650.jpg",
    },
    {
      "id":13,
      "title":"palakkad",
      "description":"",
      "image":"https://www.tourmyindia.com/blog//wp-content/uploads/2021/11/Best-Places-to-Visit-in-Palakkad-Kerala.jpg",
    },
    {
      "id":14,
      "title":"kottayam",
      "description":"",
      "image":"https://assets.traveltriangle.com/blog/wp-content/uploads/2016/02/Vaikom-Beer-House-in-Kottayam.jpg",
    },

  ]
  return (
    <div className="bg-info-subtle">
    <Container className="bg-danger-subtle">
      <h1 className="text-center">KERALA DISTRICTS</h1>
      <Row>
        {

        districts.map((item,index) =>{
          return(
            <Col sm={3} key={index} className='mt-5'>
            <Card className="bg-secondary-subtle"style={{width: '18rem',height:'350p'}}>
            <Card.Header>Featured</Card.Header>
              <Card.Img variant="top" src={item.image} />
          <Card.Body >
            <Card.Title>{item.title}</Card.Title>
            <Card.Text >
              {item.description}
            </Card.Text>
            <Button variant="primary">Visit</Button>
          </Card.Body>
          <Card.Footer className="text-muted">Visit now</Card.Footer>
        </Card>
        </Col>
            )
          })
      }
      </Row>
    </Container>
    </div>
  )
    }

            

