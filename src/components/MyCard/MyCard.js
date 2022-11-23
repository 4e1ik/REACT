import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import {Loading} from '../Loading/Loading'

function MyCard({meal, fullDisc}) {
    const myStyle = {
        whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'
    }
    return (
        <Card>
            <Card.Img variant="top" src={meal.strMealThumb} />
            <Card.Body>
                <Card.Title>{meal.strMeal}</Card.Title>
                <Card.Text style={fullDisc && myStyle}>
                    {meal.strInstructions}
                </Card.Text>
{/*                 <Loading /> */}
                <Link to={'/meal/'+`${meal.idMeal}`}>
                    <Button variant="primary">{meal.idMeal}</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default MyCard;