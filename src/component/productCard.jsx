import { Col, Card, Button } from 'react-bootstrap'

const ProductCard = ({ productDetail }) => {
    const {image,title, description, price, rating} = productDetail;
    let nairPrice = (productDetail) = price * 850

       // {
    //     "id": 1,
    //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //     "price": 109.95,
    //     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //     "category": "men's clothing",
    //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //     "rating": {
    //         "rate": 3.9,
    //         "count": 120
    // }
    return (
        <Col md={3} className="mb-3" >
               <Card>
      <Card.Img variant="top" className='img-fluid' src={image} style={{height: '250px'}}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        Some of the prosuct is new in the market, please take your time to lookout for more product in our store
        </Card.Text>
        <Card.Text>
          {nairPrice}
        </Card.Text>
        <Card.Text>
          {rating} 
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
        </Col>
    )
}
export default ProductCard;