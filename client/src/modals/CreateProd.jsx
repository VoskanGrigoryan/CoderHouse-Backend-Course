import React, { useState } from 'react';
import { Modal, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { createProd } from '../redux/actions/products';

const { TextArea } = Input;

const CreateProd = ({ isModalVisible, setIsModalVisible }) => {
    const dispatch = useDispatch();
    const handleOk = (e) => {
        e.preventDefault();
        setIsModalVisible(false);

        dispatch(createProd(prodData));
        console.log(prodData);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const [prodData, setProdData] = useState({
        title: '',
        description: '',
        price: '',
    });
    const { title, description, price } = prodData;

    const handleChange = (e) => {
        setProdData({
            ...prodData,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <>
            <Modal
                title="Create a product"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Input
                    value={title}
                    onChange={handleChange}
                    name="title"
                    placeholder="Product title"
                    className="my-1 w-75"
                    autoComplete="off"
                />
                <TextArea
                    value={description}
                    onChange={handleChange}
                    name="description"
                    placeholder="Product description"
                    className="my-1 w-75"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    autoComplete="off"
                />
                <Input
                    value={price}
                    onChange={handleChange}
                    name="price"
                    placeholder="Price"
                    className="my-1 w-75"
                    type="Number"
                    autoComplete="off"
                />
            </Modal>
        </>
    );
};

export default CreateProd;
