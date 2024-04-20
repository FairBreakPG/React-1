import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MyCard = ({nombrePerro, src, descripcionCard}) => {
  return (
    <Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="top" src={src}  className='imagenCard'/>
      <Card.Body>
        <Card.Title>{nombrePerro}</Card.Title>
        <Card.Text>
              {descripcionCard}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
    
export default MyCard;
