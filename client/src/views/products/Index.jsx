import React from 'react';
import { Carousel } from 'antd';
import anuncio1 from '../../assets/images/anuncio.jpg';
import anuncio2 from '../../assets/images/anuncio2.jpg';
import anuncio3 from '../../assets/images/anuncio3.jpg';
import CategoryCard from '../../components/CategoryCard';

const Products = () => {
    // const test = (e) => {
    //     console.log(e);
    // };

    return (
        <div style={{ paddingTop: '60px', paddingLeft: '30px', paddingRight: '30px' }}>
            <div className="row justify-content-center">
                <div className="col-12 w-50">
                    <Carousel autoplay className="shadow">
                        <img src={anuncio1} alt="anuncio" />
                        <img src={anuncio2} alt="anuncio" />
                        <img src={anuncio3} alt="anuncio" />
                    </Carousel>
                </div>
                <div className="col-12 row justify-content-around mt-4 w-75">
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                </div>
            </div>
        </div>
    );
};

export default Products;
