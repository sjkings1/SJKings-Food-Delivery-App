import { useState } from "react";
import "./LandingPage.css"
import { Input, Space } from 'antd';
import "antd/dist/antd.css";
import { Tag } from 'antd';
import { Popover } from 'antd';
import { Card } from 'antd';


const { Search } = Input;
const { Meta } = Card;

function LandingPage(props) {

    var [popVisible, setPopVisible] = useState(false);
    var [clickedTagName, setClickedTagName] = useState("");
    var [inTexToCard, SetInTexToCard] = useState(false);
    var [searchFiltByFdApi, setSearchFiltByFdApi] = useState([]);

    function popVisibleChange() {
        setPopVisible(true);
    }
    function gohide() {
        setPopVisible(false);
    }
    function handleTagsClick(nameOfTag) {
        setClickedTagName(nameOfTag)
    }
    function aboutFoodData(searchFor) {

        let filterReNv = props.fdData.reduce((accumulator, currentObject) => {

        let filterOfNV = currentObject.menu_available.non_veg.filter(f => { return f.food_name.includes(searchFor) })

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
                        <Tag> <a onClick={(e) => { handleTagsClick(e.currentTarget.innerText) }} href="https://www.zomato.com/"> Link 1 </a> </Tag>
                        <Tag> <a onClick={(e) => { handleTagsClick(e.currentTarget.innerText) }} href="https://www.swiggy.com/"> Link 2 </a> </Tag>
                        <Tag> <a onClick={(e) => { handleTagsClick(e.currentTarget.innerText) }} href="https://www.zomato.com/"> Link 3 </a> </Tag>
                    </div>
                ) : (
                    <div>
                        {searchFiltByFdApi.map((e) => (
                            <div>
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
                                // value={clickedTagName}
                                placeholder="input search text"
                                onBlur={gohide}
                                allowClear
                                // onSearch={onSearch} 
                                style={{ width: 700 }} />
                        </Popover>
                    </Space>
                </div>

            </div>

        </div>
    );
}

export default LandingPage;