import React from 'react';
import { Card } from 'antd';

const CategoryCard = () => {
    const headerStyle = {
        backgroundColor: '#fb1116',
        color: 'white',
    };

    return (
        <Card
            hoverable
            title="Category"
            className="my-2 rounded"
            headStyle={headerStyle}
            style={{ width: 300 }}
        >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    );
};

export default CategoryCard;
