import { useState } from 'react';
import Cat from '../data/cat';
import Dog from '../data/dog';

interface AddAnimalFormProps {
  addNewAnimal: (animal: Dog | Cat, isCat: boolean) => void;
}

const AddAnimalForm: React.FC<AddAnimalFormProps> = (props) => {
  const basicAnimal = {
    name: '',
    species: '',
    favFoods: Array<string>(),
    birthYear: 0,
  };
  const [newAnimal, setNewAnimal] = useState(basicAnimal);
  const [isCat, setIsCat] = useState(true);

  return (
    <div className='animal__container'>
      <div className='animal__radiobuttons'>
        <label>
          <input
            value='cat'
            type='radio'
            checked={isCat === true}
            onChange={() => setIsCat(true)}
          />
          Add new Cat
        </label>
        <label>
          <input
            type='radio'
            value='dog'
            checked={isCat === false}
            onChange={() => setIsCat(false)}
          />
          Add new Dog
        </label>
      </div>

      <div className='animal__input'>
        <label htmlFor='animal-name' className='add-animal__input-label'>
          Name:
        </label>
        <input
          name='animal-name'
          className='animal__input-field'
          value={newAnimal.name}
          placeholder='Name'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewAnimal({
              ...newAnimal,
              name: e.target.value,
            });
          }}
        />
      </div>

      <div className='animal__input'>
        <label htmlFor='animal-species' className='animal__input-label'>
          Species:
        </label>
        <input
          name='animal-species'
          className='animal__input-field'
          value={newAnimal.species}
          placeholder='Species'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNewAnimal({
              ...newAnimal,
              species: e.target.value,
            });
          }}
        />
      </div>

      <div className='animal__input'>
        <label htmlFor='animal-favfoods' className='animal__input-label'>
          Favourite Foods:
        </label>
        <textarea
          name='animal-favfoods'
          rows={4}
          cols={10}
          className='animal__input-field'
          value={newAnimal.favFoods}
          placeholder='Favorite Foods'
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setNewAnimal({
              ...newAnimal,
              favFoods: e.target.value.split(','),
            });
          }}
        />
      </div>

      <div className='animal__input'>
        <label htmlFor='animal-birthyear' className='animal__input-label'>
          Birth Year:
        </label>
        <input
          name='animal-birthyear'
          className='animal__input-field'
          value={newAnimal.birthYear === 0 ? '' : newAnimal.birthYear}
          placeholder='Birth Year (numbers)'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            let value = 0;
            if (e.target.value) {
              value = parseInt(e.target.value);
              if (isNaN(value)) {
                value = 0;
              }
            }
            setNewAnimal({
              ...newAnimal,
              birthYear: value,
            });
          }}
        />
      </div>

      <button
        className='animal__btn'
        onClick={() => {
          props.addNewAnimal(newAnimal, isCat);
          setNewAnimal(basicAnimal);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default AddAnimalForm;
