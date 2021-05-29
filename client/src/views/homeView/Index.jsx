import React from 'react';
import phoneShopping from '../../assets/icons/phoneShopping.svg';
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
        <div
            style={{
                paddingTop: '70px',
                paddingRight: '30px',
                paddingLeft: '30px',
                paddingBottom: '50px',
            }}
        >
            <Tooltip title="TOP">
                <img src={logo} alt="logo" className="logo" width="70px" />
            </Tooltip>

            <div className="row justify-content-center">
                <div className="col-12 header-home row mx-0 text-end justify-content-center">
                    <h2 className="col-xl-4 col-lg-5 col-md-6">
                        <b>eCommerce, </b>Buy all the random useless crap you think you
                        need to get social status but at the end it's just a bunch of shit
                        that will get you nothing
                    </h2>
                    <img
                        className="col-xl-3 col-lg-4 col-md-6"
                        src={phoneShopping}
                        alt="asdasd"
                        height="250px"
                        width=""
                    />
                </div>
                <div className="justify-content-center d-flex">
                    <PopularItems />
                </div>

                <div className="row my-4 p-2 bg-dark mx-0 rounded align-items-center justify-content-around w-75">
                    <div className="col-xl-6 col-lg-6 row">
                        <div className="col-xl-4 col-lg-4">
                            <img
                                src={selectingProduct}
                                alt="product selection"
                                height="150px"
                            />
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <h4 className="text-light">
                                Find everything you need in a simple yet efficient store.
                                <br />
                                Browse within our categories and find everything you need
                                for men & women clothing!
                            </h4>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 row text-center bg-light rounded p-2">
                        <div className="col-2">
                            <img src={hat} alt="hat" className="text-light" />
                        </div>
                        <div className="col-2">
                            <img src={jacket} alt="hat" />
                        </div>
                        <div className="col-2">
                            <img src={shirt} alt="hat" />
                        </div>
                        <div className="col-2">
                            <img src={dress} alt="hat" />
                        </div>
                        <div className="col-2">
                            <img src={shoe} alt="hat" />
                        </div>
                        <div className="col-2">
                            <img src={pants} alt="hat" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default homeView;
