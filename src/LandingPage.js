import React, { useState } from "react";
import "./LandingPage.css"
import { Input, Space } from 'antd';
import "antd/dist/antd.css";
import { Tag } from 'antd';
import { Popover, Button } from 'antd';

const { Search } = Input;
function LandingPage() {

    var [popVisible, setPopVisible] = useState(false)

    function popVisibleChange() {
        setPopVisible(true);
    }
    function gohide() {
        setPopVisible(false);
    }
    function renderTagInPop() {
        return (
            <div>
                <Tag>
                    <a href="https://www.zomato.com/">Link</a>
                </Tag>
                <Tag>
                    <a href="https://www.zomato.com/">Link1</a>
                </Tag>
                <Tag>
                    <a href="https://www.zomato.com/">Link2</a>
                </Tag>
                <Tag>
                    <a href="https://www.zomato.com/">Link3</a>
                </Tag>
                <Tag>
                    <a href="https://www.zomato.com/">Link4</a>
                </Tag>
                <Tag>
                    <a href="https://www.zomato.com/">Link5</a>
                </Tag>
                <Tag>
                    <a href="https://www.zomato.com/">Link6</a>
                </Tag>
                <Tag>
                    <a href="https://www.zomato.com/">Link7</a>
                </Tag>
                <Tag>
                    <a href="https://www.zomato.com/">Link8</a>
                </Tag>
                <Tag>
                    <a href="https://www.zomato.com/">Link9</a>
                </Tag>
                <Tag>
                    <a href="https://www.zomato.com/">Link10</a>
                </Tag>
            </div>)
    }

    return (

        <div className="LandingPage">

            <div className="container">

                <div>
                    <img className="LP--srcImage" src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" alt="" />
                </div>

                <div className="LP--content">
                    <h1 className="text1"> zomato </h1>
                    <p className="text1"> Discover the Best Food & Drinks in Chennai </p>
                </div>

                <div className="LP--searchBox">

                    <Space direction="center">
                        <Popover
                            content={renderTagInPop}
                            title="Title"
                            trigger="click"
                            placement="bottom"
                            visible={popVisible}
                            onVisibleChange={popVisibleChange}
                        >
                            <Search placeholder="input search text"
                                onBlur={gohide}
                                allowClear
                                // onSearch={onSearch} 
                                style={{ width: 500 }} />
                        </Popover>
                        {/* <div><Tag>
                        <a href="https://www.zomato.com/">Link</a>
                    </Tag></div> */}
                    </Space>
                </div>

            </div>

        </div>
    );
}

export default LandingPage;