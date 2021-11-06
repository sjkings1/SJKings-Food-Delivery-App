import React from 'react';
import "./NextJunction.css";
import NJbreadCrumb from './NJbreadCrumb';
import NJcardAlone from './NJcardAlone';
import NJnavBar from './NJnavBar';
import NJtagAlone from './NJtagAlone';

function NextJunction(props) {
    return (
        <div className="NextJunction">

            <div className="navBar">
                <NJnavBar fdData={props.fdData} />
            </div>

            <div className="breadCrumb">
                <NJbreadCrumb />
            </div>

            <div className="tagAlone">
                <NJtagAlone />
            </div>

            <div className="cardAlone">
                <NJcardAlone />
            </div> 

        </div>
    );
}

export default NextJunction;

