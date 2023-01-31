import { catImages } from '../data/cat-image-data';
import CatImage from '../components/cat_image';

interface CatCardProps {
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
  catIndex: number;
}

const CatCard: React.FC<CatCardProps> = ({name, species, birthYear, catIndex, favFoods}) => (
  <div>
    <div className='card'>
      <h3 className='card__text card__header'>{name}</h3>
      <p className='card__text'>Species: {species}</p>
      <p className='card__text'>Favourite Food(s): {favFoods}</p>
      <p className='card__text'>{birthYear}</p>
      <div>
        {catIndex < catImages.length && (
          <CatImage
            image={catImages[catIndex].image}
            altText={catImages[catIndex].altText}
            licenceType={catImages[catIndex].licenceType}
            licenceUrl={catImages[catIndex].licenceUrl}
            attributionName={catImages[catIndex].attributionName}
            attributionUrl={catImages[catIndex].attributionUrl}
          />
        )}
      </div>
    </div>
  </div>
);

export default CatCard;
