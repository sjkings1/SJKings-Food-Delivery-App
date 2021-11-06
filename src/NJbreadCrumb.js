import React from 'react';
import { Breadcrumb } from 'antd';
import "./NJbreadCrumb.css"

function NJbreadCrumb(props) {
    return (
        <div className="NJbreadCrumb">

            <div className="bC">

                <Breadcrumb>
                    <Breadcrumb.Item> <a href=""> Home </a> </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href=""> India </a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href=""> Chennai </a>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item> <a href=""> Restaurants </a> </Breadcrumb.Item>
                </Breadcrumb>
            </div>

        </div>
    );
}

export default NJbreadCrumb;