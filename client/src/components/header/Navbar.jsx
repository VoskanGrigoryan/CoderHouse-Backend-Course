import React, { useState } from 'react';
import { Menu } from 'antd';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

const Navbar = () => {
    const handleClick = (e) => {
        console.log('click ', e);
        setNavValue(e.key);
    };

    const [navValue, setNavValue] = useState('');

    return (
        <>
            <Menu
                onClick={handleClick}
                selectedKeys={[navValue]}
                mode="horizontal"
                className="text-center shadow-sm w-100 position-fixed"
                style={{ zIndex: '10' }}
            >
                <SubMenu key="products" title="Products">
                    <Menu.ItemGroup title="Choose:">
                        <Menu.Item key="subcat-clothing">
                            <Link to="/products">Clothing</Link>
                        </Menu.Item>

                        <Menu.Item key="subcat-beauty">
                            <Tooltip title="Not yet implemented.." placement="left">
                                Beauty
                            </Tooltip>
                        </Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>

                <Menu.Item key="settings">
                    <Tooltip title="Not yet implemented.." placement="bottom">
                        Settings
                    </Tooltip>
                </Menu.Item>
                <Menu.Item key="user">
                    <Tooltip title="Login to buy and sell stuff!" placement="bottom">
                        <Link to="/login">User</Link>
                    </Tooltip>
                </Menu.Item>
                <Menu.Item key="help">
                    <Link to="/">Help</Link>
                </Menu.Item>
            </Menu>
        </>
    );
};

export default Navbar;
