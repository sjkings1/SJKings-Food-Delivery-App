import React, { useEffect, useState } from 'react';
import { Badge, Card } from 'antd';
import { Carousel } from 'antd';
import { Rate } from 'antd';
import { Divider } from 'antd';
import { useHistory } from 'react-router-dom';
import "./NJcardAlone.css";


const { Meta } = Card;

function NJcardAlone(props) {
    const history = useHistory();
    const contentStyle = {
        height: '20px',
        color: '#000000',
        textAlign: 'center',
        background: '#ffffff'
    };

    let historyCarryData = useHistory();
    // console.log(historyCarryData)
    var [displayHotel, setDisplayHotel] = useState([]);

    useEffect(() => {

        let backendDataTo = props.fdData;
        let filterHotels = backendDataTo.map(h => {

            let justifySearch = h.menu_available.non_veg.filter(e => { return e.food_name.includes(historyCarryData.location.state) });

            if (justifySearch.length > 0) {
                return { ...h }
            }

        }).filter(e => { return e != undefined })
        setDisplayHotel(filterHotels);

    }, [])

    function clickForEachRJ(whileClicking) {
        debugger
        history.push({
            pathname: './unique-restaurant',
            state: whileClicking
        });
    }


    return (
        <div className="NJcardAlone">

            <h1> {historyCarryData.location.state} Delivery Restaurants in Chennai </h1>


            <div className="cA">
                {displayHotel.map(h => (
                    <div className="list" onClick={() => { clickForEachRJ(h) }}>

                        <Badge.Ribbon text={(h.offer_available).split("-")[0] + " Off"} color="volcano" placement="start">

                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://b.zmtcdn.com/data/dish_photos/c55/f22abc60a6a788ad6ac13ea92281bc55.jpg" />}
                            >

                                <div className="hotelMinutes">
                                    <Badge count={Math.floor(Math.random() * (30 - 20) + 25) + " min"} style={{ color: '#000000', backgroundColor: '#e0e0e0' }} />
                                </div>

                                <div className="hotelNameDes">
                                    <Meta title={h.hotel_name} description={h.kind_of_food_available} />
                                </div>

                                <div className="averagePrice">
                                    <Rate disabled defaultValue={Math.floor(Math.random() * (5 - 2) + 2)} />
                                    <Meta description={"₹" + h.average_price_to_order} />
                                </div>

                                <Divider />

                                <div className="carouSlider">
                                    <Carousel autoplay effect="fade">
                                        <div className="firstSlide">
                                            <h3 className="first-h3" style={contentStyle}> Follows all Max Safety measures #food </h3>
                                            <img className="first-img" alt="example" src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" />
                                        </div>
                                        <div className="secondSlide">
                                            <img className="second-img" alt="example" src="https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp" />
                                            <h3 className="second-h3" style={contentStyle}> Restaurant partner follows @WHO protocol </h3>
                                        </div>
                                    </Carousel>
                                </div>

                            </Card>

                        </Badge.Ribbon>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default NJcardAlone;