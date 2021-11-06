import React from 'react';
import { Tag } from 'antd';
import { Divider } from 'antd';
import "./NJtagAlone.css"

function NJtagAlone(props) {
    return (
        <div className="NJtagAlone">

            <div className="tA">

                <Tag>
                    <a href=""> Filters </a>
                </Tag>

                <Tag>
                    <a href=""> Mutton Biryani </a>
                </Tag>

                <Tag>
                    <a href=""> Delivery Time </a>
                </Tag>

                <Tag>
                    <a href=""> Rating 4.0+ </a>
                </Tag>

                <Tag>
                    <a href=""> Great Offers </a>
                </Tag>

                <Tag>
                    <a href=""> Cusines </a>
                </Tag>

                <Tag>
                    <a href=""> More Filters </a>
                </Tag>

            </div>
            
            <Divider />

        </div>
    );
}

export default NJtagAlone;