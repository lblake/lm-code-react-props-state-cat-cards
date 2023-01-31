import { catImages } from '../data/cat-image-data';
import CatImage from '../components/cat_image';

interface CatCardProps {
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
  catIndex: number;
}

const CatCard: React.FC<CatCardProps> = (props) => (
  <div>
    <div className='card'>
      <h3 className='card__text card__header'>{props.name}</h3>
      <p className='card__text'>Species: {props.species}</p>
      <p className='card__text'>Favourite Food(s): {props.favFoods}</p>
      <p className='card__text'>{props.birthYear}</p>
      <div>
        {props.catIndex < catImages.length && (
          <CatImage
            image={catImages[props.catIndex].image}
            altText={catImages[props.catIndex].altText}
            licenceType={catImages[props.catIndex].licenceType}
            licenceUrl={catImages[props.catIndex].licenceUrl}
            attributionName={catImages[props.catIndex].attributionName}
            attributionUrl={catImages[props.catIndex].attributionUrl}
          />
        )}
      </div>
    </div>
  </div>
);

export default CatCard;
