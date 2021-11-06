import React from 'react';
import "./NJnavBar.css";
import "antd/dist/antd.css";
import { Input, Space } from 'antd';
import { Tag } from 'antd';
import { Popover } from 'antd';
import { Card } from 'antd';
import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useState } from "react";


const { Search } = Input;
const { Meta } = Card;
const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href=""> Profile </a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href=""> Notification </a>
        </Menu.Item>
        <Menu.Item key="2">
            <a href=""> BookMarks </a>
        </Menu.Item>
        <Menu.Item key="3">
            <a href=""> Reviews </a>
        </Menu.Item>
        <Menu.Item key="4">
            <a href=""> Network </a>
        </Menu.Item>
        <Menu.Item key="5">
            <a href=""> Find Friends </a>
        </Menu.Item>
        <Menu.Item key="6">
            <a href=""> Settings </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="7"><a href=""> Log Out </a></Menu.Item>
    </Menu>
);

function NJnavBar(props) {

    var [popVisible, setPopVisible] = useState(false);
    var [inTexToCard, SetInTexToCard] = useState(false);
    var [searchFiltByFdApi, setSearchFiltByFdApi] = useState([]);

    function popVisibleChange() {
        setPopVisible(true);
    }
    function gohide() {
        setPopVisible(false);
    }

    function aboutFoodData(searchFor) {

        let filterReNv = props.fdData.reduce((accumulator, currentObject) => {

            let filterOfNV = currentObject.menu_available.non_veg.filter(f => { return f.food_name.toLowerCase().includes(searchFor.toLowerCase()) })

            accumulator.push(...filterOfNV)
            return accumulator

        }, [])

        setSearchFiltByFdApi(filterReNv)
    }

    function renderTagInPop() {
        return (
            <div>
                {inTexToCard == false ? (
                    <div>
                        <Tag> <a href="https://www.zomato.com/"> Link 1 </a> </Tag>
                        <Tag> <a href="https://www.swiggy.com/"> Link 2 </a> </Tag>
                        <Tag> <a href="https://www.zomato.com/"> Link 3 </a> </Tag>
                    </div>
                ) : (
                    <div>
                        {searchFiltByFdApi.map((e) => (
                            <div className="NJnavBar">
                                <Card
                                    hoverable
                                    style={{ width: 260 }}
                                    cover={<img alt="example" src="https://b.zmtcdn.com/data/homepage_dish_data/2/9af65b8b2fd2bc7e5aba33c062dd2e3e.png" />}
                                >
                                    <Meta title={e.food_name} description={e.price} />
                                </Card>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (

        <div className="NJnavBar">

            <div className="NJ-content">

                <div className="title"> <h1 > zomato </h1> </div>

                <div className="searchBar">
                    <Space direction="center">
                        <Popover
                            content={renderTagInPop}
                            title="Results"
                            trigger="click"
                            placement="bottom"
                            visible={popVisible}
                            onVisibleChange={popVisibleChange}
                        >
                            <Search
                                onChange={(e) => {
                                    aboutFoodData(e.currentTarget.value)
                                    SetInTexToCard(true)
                                }}
                                placeholder="input search text"
                                // onBlur={gohide}
                                allowClear
                                style={{ width: 700 }} />
                        </Popover>
                    </Space>
                </div>

                <div className="avatarDown">
                    <Avatar src={<Image src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp" style={{ width: 32 }}  />} />
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            SIGN UP / LOGIN <DownOutlined />
                        </a>
                    </Dropdown>
                </div>

            </div>

        </div>

    );
}

export default NJnavBar;