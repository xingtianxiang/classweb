import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PartCard = ({ image, title, description, link }) => (
    <Link to={link} className="text-decoration-none">
        <Card className="h-100 shadow-sm">
            <Card.Img variant="top" src={image} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    </Link>
);

export default PartCard;
