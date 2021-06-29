import React from 'react';
import onlineShopping from '../../assets/icons/onlineShopping.svg';
import selectingProduct from '../../assets/icons/selectingProduct.svg';
import hat from '../../assets/icons/hat.svg';
import dress from '../../assets/icons/dress.svg';
import jacket from '../../assets/icons/jacket.svg';
import shirt from '../../assets/icons/shirt.svg';
import shoe from '../../assets/icons/shoe.svg';
import pants from '../../assets/icons/pants.svg';

import logo from '../../assets/images/logo.png';
import { Tooltip } from 'antd';
import PopularItems from './PopularItems';

const homeView = () => {
    return (
        <div className="row justify-content-center mx-0" style={{
            paddingTop: '70px',
        }}>
            <div className="col-8 row mx-0 text-end justify-content-center w-100">
                <h2 className="col-xl-4 col-lg-5 col-md-6">
                    <b>eCommerce, </b>Buy all the random useless crap you think you
                    need to get social status but at the end it's just a bunch of shit
                    that will get you nothing
                </h2>
                <img
                    className="col-xl-3 col-lg-4 col-md-6"
                    src={onlineShopping}
                    alt="asdasd"
                    height="250px"
                    width=""
                />
            </div>
            <div className="justify-content-center d-flex">
                <PopularItems />
            </div>
        </div>
    );
};

export default homeView;
