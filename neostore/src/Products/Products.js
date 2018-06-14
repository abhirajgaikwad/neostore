import React, { Component } from 'react';
import { Container, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import './Products.css';

class Products extends Component {
    constructor() {
        super();
    
        this.state = {
          rating: 1
        };
    }
    
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
    }
    render() {
        const { rating } = this.state;
        const productData = [
            {
                name: 'Product 1',
                image: 'https://source.unsplash.com/random/250x117',
                price: '10,000',
                rating: 5,
            },
            {
                name: 'Product 2',
                image: 'https://source.unsplash.com/random/250x118',
                price: '20,000',
                rating: 4,
            },
            {
                name: 'Product 3',
                image: 'https://source.unsplash.com/random/250x119',
                price: '5,000',
                rating: 3,
            },
            {
                name: 'Product 4',
                image: 'https://source.unsplash.com/random/250x120',
                price: '4,000',
                rating: 4,
            },
            {
                name: 'Product 5',
                image: 'https://source.unsplash.com/random/250x121',
                price: '30,000',
                rating: 5,
            },
            {
                name: 'Product 6',
                image: 'https://source.unsplash.com/random/250x122',
                price: '15,000',
                rating: 4,
            },
        ];

        return (
            <section className="products">
                <Container>
                    <h3 className="text-center">Popular Products</h3>
                    <ul className="list-unstyled d-flex products-list">
                        {productData.map((product, key) => {
                            return (
                                <li key={key} className="">
                                    <Card>
                                        <CardImg top width="100%" src={product.image} alt="" />
                                        <CardBody>
                                            <CardTitle>{product.name}</CardTitle>
                                            <CardText>Rs. {product.price}</CardText>
                                            <StarRatingComponent name={key} starCount={5} value={product.rating} editing={false} />
                                        </CardBody>
                                    </Card>
                                </li>
                            )
                        })}
                    </ul>
                </Container>
            </section>
        );
    }
}

export default Products;