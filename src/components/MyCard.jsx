import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tags from './Tags'; 
import Badge from 'react-bootstrap/Badge';


const MyCard = ({nombrePerro, src, descripcionCard, tagText, tagColor}) => {
  return (
    <Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="top" src={src}  className='imagenCard'/>
      <Card.Body>
        <Card.Title>{nombrePerro}</Card.Title>
        <Card.Text>
              {descripcionCard}
        </Card.Text>
        <Card.Text>
        {tagText && tagColor && <Tags text={tagText} color={tagColor} />}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
    
export default MyCard;
