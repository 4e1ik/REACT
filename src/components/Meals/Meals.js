import {useEffect, useState} from "react";
import MyCard from '../MyCard/MyCard';
import data from "bootstrap/js/src/dom/data";
import {Col, Container, Row} from "react-bootstrap";

export default function Meals(){

    const [meals, setMeals] = useState([]);

    async function loadData(){
        const response =await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        const data = await response.json();
        setMeals(data.meals);
        console.log(data);
    }

    useEffect(()=>{
        loadData();
    }, []);
    return (
        <Container>
            <Row className='mt-4'>
                {meals.map((meal) => {
                    return (
                        <Col xs={3}>
                            <MyCard meal={meal}/>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
}

// <div>
//     <h1>Meals</h1>
//     {/*<ol>*/}
//     {/*    {meals.map((meal) => {*/}
//     {/*        return <li key={meal.idMeal}>{meal.strMeal}</li>;*/}
//     {/*    })}*/}
//     {/*</ol>*/}
//

// </div>