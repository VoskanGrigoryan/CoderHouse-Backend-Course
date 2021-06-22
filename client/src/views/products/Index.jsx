import React, { useState } from 'react';
import { Input, Button, Search } from 'antd';
// import { Carousel } from 'antd';
// import anuncio1 from '../../assets/images/anuncio.jpg';
// import anuncio2 from '../../assets/images/anuncio2.jpg';
// import anuncio3 from '../../assets/images/anuncio3.jpg';
import CategoryCard from '../../components/CategoryCard';
import CreateProd from '../../modals/CreateProd';

const Products = () => {
    const { Search } = Input;

    const onSearch = (value) => console.log(value);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    return (
        <div style={{ paddingTop: '60px', paddingLeft: '30px', paddingRight: '30px' }}>
            <div className="row mx-0 justify-content-center">
                {/*<div className="col-12 w-50">
                     <Carousel autoplay className="shadow">
                        <img src={anuncio1} alt="anuncio" />
                        <img src={anuncio2} alt="anuncio" />
                        <img src={anuncio3} alt="anuncio" />
                    </Carousel> 
                </div>*/}
                <div className="col-2 bg-dark p-3">
                    <Search
                        placeholder="Filter by name"
                        onSearch={onSearch}
                        enterButton
                    />
                    <Button type="primary" className="w-100 mt-4" onClick={showModal}>
                        Create product
                    </Button>
                    <CreateProd
                        isModalVisible={isModalVisible}
                        setIsModalVisible={setIsModalVisible}
                        showModal={showModal}
                    />
                </div>
                <div className="col-10 row mx-0 justify-content-around">
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />

                    <CategoryCard />
                    <CategoryCard />
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
