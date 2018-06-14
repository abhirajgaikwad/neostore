import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Swiper from 'react-id-swiper';
import '../../node_modules/react-id-swiper/src/styles/css/swiper.css';

class Banner extends Component {
    render() {
        const bannerData = [
            {
                image: 'https://source.unsplash.com/random/1200x450',
                altText: 'Slide 1'
            },
            {
                image: 'https://source.unsplash.com/random/1200x451',
                altText: 'Slide 2'
            },
            {
                image: 'https://source.unsplash.com/random/1200x449',
                altText: 'Slide 3'
            }
        ];

        const params = {
            direction: 'horizontal',
            slidesPerView: 'auto',
            speed: 500,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        };

        return (
            <section className="banner">
                <Container>
                    <Swiper {...params} shouldSwiperUpdate={true}>
                        {bannerData.map((banner, key) => {
                            return (
                                <div key={key} className="banner-slider">
                                    <img className="" src={banner.image} alt={banner.altText} />
                                </div>
                            )
                        })}
                    </Swiper>
                </Container>
            </section>
        );
    }
}

export default Banner;