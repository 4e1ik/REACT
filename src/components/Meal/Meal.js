import {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import MyCard from "../MyCard/MyCard";
import {useParams} from 'react-router-dom'
import data from "bootstrap/js/src/dom/data";


export default function Meal(){

    const {id} = useParams();
    const url = id ? 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id : 'https://www.themealdb.com/api/json/v1/1/random.php';

    const [meals, setMeals] = useState([]);

    async function loadData(){
        const response =await fetch(url);
        const data = await response.json();
        setMeals(data.meals[0]);
    }

    useEffect(()=>{
        loadData();
    }, []);
    return (
        <Container>
            <Row className='mt-4'>
                {/*{meals.map((meal) => {*/}
                {/*    return (*/}
                {/*        <Col xs={3}>*/}
                {/*            <MyCard meal={meal}/>*/}
                {/*        </Col>*/}
                {/*    );*/}
                {/*})}*/}
                <Col lg={{span:6, offset:3}}>
                    <MyCard meal={meals} fullDisc/>
                </Col>
            </Row>
        </Container>
    );
}