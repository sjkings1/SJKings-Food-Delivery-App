import { useState } from "react";
import "./LandingPage.css";
import { Input, Space } from 'antd';
import "antd/dist/antd.css";
import { Tag } from 'antd';
import { Popover } from 'antd';
import { Card } from 'antd';
import { useHistory } from 'react-router-dom';


const { Search } = Input;
const { Meta } = Card;

function LandingPage(props) {

    var [popVisible, setPopVisible] = useState(false);
    var [inTexToCard, SetInTexToCard] = useState(false);
    var [searchFiltByFdApi, setSearchFiltByFdApi] = useState([]);
    const history = useHistory();

    function popVisibleChange() {
        setPopVisible(true);
    }
    
    function gohide() {
        setPopVisible(false);
    }

    function aboutFoodData(searchFor) {

        let filterReNv = props.fdData.reduce((accumulator, currentObject) => {

            let filterOfNV = currentObject.menu_available.non_veg.filter(f => { return f.food_name.toLowerCase().includes(searchFor.toLowerCase()) });

            accumulator.push(...filterOfNV)
            return accumulator

        }, [])
        let createUnshiftCategory = filterReNv[0].food_name.split(" ").map(e => {
            if (e.toLowerCase().indexOf(searchFor.toLowerCase()) != -1) {
                return e;
            }
        }).filter(f => { return f != undefined })[0];
        let unshiftObject = {
            food_name: createUnshiftCategory,
            price: "200",
            votes: "150",
            category: "Category"
        }

        filterReNv.unshift(unshiftObject)
        setSearchFiltByFdApi(filterReNv);
    }

    function categoryClickForNJ(uniqueCard) {
        // debugger
        history.push({
            pathname : './section-nv',
            state : uniqueCard.food_name
        });

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
                            <div className="landingPage" onClick={() => { categoryClickForNJ(e) }}>
                                <Card
                                    hoverable
                                    style={{ width: 260 }}
                                    cover={<img alt="example" src="https://b.zmtcdn.com/data/homepage_dish_data/2/9af65b8b2fd2bc7e5aba33c062dd2e3e.png" />}
                                >
                                    <Meta title={e.food_name} description={e.category ? e.category : e.price} />
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
                    <h1 className="text1"> Make My Lunch </h1>
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
                                // onBlur={gohide}
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