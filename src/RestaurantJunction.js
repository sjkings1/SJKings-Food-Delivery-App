import React from 'react';
import NJbreadCrumb from './NJbreadCrumb';
import NJnavBar from './NJnavBar';
import NJtagAlone from './NJtagAlone';
import './RestaurantJunction.css';
import RJfoodContentData from './RJfoodContentData';
import RJtitleImages from './RJtitleImages';

function RestaurantJunction(props) {
    return (
        <div className="restaurantJunction">

            <div className="navBar1">
                <NJnavBar fdData={props.fdData} />
            </div>

            <div className="breadCrumb1">
                <NJbreadCrumb />
            </div>

            <div className="tagAlone1">
                <NJtagAlone />
            </div>

            <div className="titleImages">
                <RJtitleImages />
            </div>

            <div className="foodContentData">
                <RJfoodContentData fdData={props.fdData} />
            </div>

        </div>
    );
}

export default RestaurantJunction;