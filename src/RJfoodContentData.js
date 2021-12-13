import React from 'react';
import './RJfoodContentData.css';
import { PageHeader, Descriptions } from 'antd';
import { Badge, Card } from 'antd';
import { Rate } from 'antd';
import { Tag } from 'antd';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const { Meta } = Card;

function RJfoodContentData(props) {

    const history = useHistory();
    const hls = history.location.state;
    const [counter, setCounter] = useState(0);

    let handleIncrementClick = () => setCounter(counter + 1);

    let handleDecrementClick = () => setCounter(counter - 1);
    if (counter <= 0) {
        handleDecrementClick = () => setCounter(0);
    }


    return (
        <div className="RJfoodContentData">

            <div className="header">

                <PageHeader ghost={false} title={hls.hotel_name} subTitle={hls.kind_of_food_available}>

                    <div className="hotelMinutes1">
                        <Tag color="orange"> {(hls.offer_available).split("-")[0] + " Off"} </Tag>
                        <Badge count={Math.floor(Math.random() * (30 - 20) + 25) + " min"} style={{ color: '#000000', backgroundColor: '#e0e0e0' }} />
                    </div>

                    <div className="averagePrice1">
                        <Rate disabled defaultValue={Math.floor(Math.random() * (5 - 3) + 3)} />
                        <Meta description={"₹" + hls.average_price_to_order} />
                    </div>

                </PageHeader>

            </div>

            <div className="menuDetails">

                <h2> Veg </h2>
                {hls.menu_available.veg.map(p => (
                    <PageHeader>

                        <div className="emptyContainer">

                            <Card

                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://b.zmtcdn.com/data/dish_photos/c55/f22abc60a6a788ad6ac13ea92281bc55.jpg" />}
                            >

                                <div className="hotelNameDes1">
                                    <Meta title={p.food_name} description={"₹" + p.price} />
                                    <div className="quantity">
                                        <button class="decrement" onClick={handleDecrementClick}> <p id="minus"> - </p> </button>
                                        <h3>{counter}</h3>
                                        <button class="increment" onClick={handleIncrementClick}> <p id="plus"> + </p> </button>
                                    </div>
                                </div>

                                <div className="averagePrice2">
                                    <Rate disabled defaultValue={Math.floor(Math.random() * (5 - 2) + 2)} />
                                    <div className="description"> <Descriptions.Item> {"      " + p.votes + " Votes"} </Descriptions.Item> </div>
                                </div>

                            </Card>

                        </div>

                    </PageHeader>
                ))}

                {/* <h2> Non-Veg </h2>
                {hls.menu_available.non_veg.map(p => (
                    <PageHeader>

                        <div className="emptyContainer">

                            <Card

                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://b.zmtcdn.com/data/dish_photos/c55/f22abc60a6a788ad6ac13ea92281bc55.jpg" />}
                            >

                                <div className="hotelNameDes1">
                                    <Meta title={p.food_name} description={"₹" + p.price} />
                                </div>

                                <div className="averagePrice2">
                                    <Rate disabled defaultValue={Math.floor(Math.random() * (5 - 2) + 2)} />
                                    <div className="description"> <Descriptions.Item> {"      " + p.votes + " Votes"} </Descriptions.Item> </div>
                                </div>

                            </Card>

                        </div>

                    </PageHeader>
                ))} */}

                {/* <h2> Dessert </h2>
                {hls.menu_available.desserts.map(p => (
                    <PageHeader>

                        <div className="emptyContainer">

                            <Card

                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://b.zmtcdn.com/data/dish_photos/c55/f22abc60a6a788ad6ac13ea92281bc55.jpg" />}
                            >

                                <div className="hotelNameDes1">
                                    <Meta title={p.food_name} description={"₹" + p.price} />
                                </div>

                                <div className="averagePrice2">
                                    <Rate disabled defaultValue={Math.floor(Math.random() * (5 - 2) + 2)} />
                                    <div className="description"> <Descriptions.Item> {p.votes + " Votes"} </Descriptions.Item> </div>
                                </div>

                            </Card>

                        </div>

                    </PageHeader>
                ))} */}

            </div>

        </div>
    );
}

export default RJfoodContentData;