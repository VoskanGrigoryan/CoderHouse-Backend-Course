import React from 'react';
import { Card } from 'antd';
import Test from '../../assets/icons/webShopping.svg';

const PopularItems = () => {
    const gridStyle = {
        width: 'auto',
        textAlign: 'center',
    };

    const headerStyle = {
        backgroundColor: '#fb1116',
        color: 'white',
    };

    return (
        <Card
            title="Check the most popular items theis week!"
            className="shadow mt-4 text-center justify-content-center"
            headStyle={headerStyle}
        >
            <Card.Grid style={gridStyle}>
                <img src={Test} alt="test" height="100px" />
                <div>
                    <p>Product #1</p>
                    <b>$1499</b>
                </div>
            </Card.Grid>

            <Card.Grid style={gridStyle}>
                <img src={Test} alt="test" height="100px" />
                <div>
                    <p>Product #1</p>
                    <b>$1499</b>
                </div>
            </Card.Grid>

            <Card.Grid style={gridStyle}>
                <img src={Test} alt="test" height="100px" />
                <div>
                    <p>Product #1</p>
                    <b>$1499</b>
                </div>
            </Card.Grid>

            <Card.Grid style={gridStyle}>
                <img src={Test} alt="test" height="100px" />
                <div>
                    <p>Product #1</p>
                    <b>$1499</b>
                </div>
            </Card.Grid>

            <Card.Grid style={gridStyle}>
                <img src={Test} alt="test" height="100px" />
                <div>
                    <p>Product #1</p>
                    <b>$1499</b>
                </div>
            </Card.Grid>
        </Card>
    );
};

export default PopularItems;
