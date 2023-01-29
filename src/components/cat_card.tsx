interface CatCardProps{
  name: string;
  species: string;
  favFoods: Array<string>;
  birthYear: number;
}


const CatCard: React.FC<CatCardProps> = (props) => (
  <div>
    <div className="card">
    <h3 className='card__text card__header'>{props.name}</h3>
    <p className='card__text'>Species: {props.species}</p>
    <p className='card__text'>Favourite Food(s): {props.favFoods}</p>
    <p className='card__text'>{props.birthYear}</p>
    </div>
  </div>
);

export default CatCard;