import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import CatCard from './components/cat_card';
import DogCard from './components/dog_card';
import AddAnimalForm from './components/addAnimalForm';
import { catData } from './data/cat-data';
import { dogData } from './data/dog-data';
import Cat from './data/cat';
import Dog from './data/dog';

function App(): JSX.Element {
  const [cats, setCats] = useState<Array<Cat>>(catData);
  const [dogs, setDogs] = useState<Array<Dog>>(dogData);
  const dogCount: number = dogs.length;
  const catCount: number = cats.length;

  const addNewAnimal = (animal: Cat | Dog, isCat: boolean) => {
    console.log(animal);

    if (isCat === true) {
      setCats([...cats, animal]);
    } else {
      setDogs([...dogs, animal]);
    }
  };

  return (
    <>
      <Navbar />
      <Header catCount={catCount} dogCount={dogCount} />

      <main>
        <AddAnimalForm
          addNewAnimal={(animal: Cat | Dog, isCat: boolean) =>
            addNewAnimal(animal, isCat)
          }
        />

        <div className='cards__wrapper'>
          {cats.map((cat, index) => (
            <CatCard
              name={cat.name}
              species={cat.species}
              favFoods={cat.favFoods}
              birthYear={cat.birthYear}
              catIndex={index}
              key={cat.id}
            />
          ))}
        </div>

        <div className='cards__wrapper'>
          {dogs.map((dog, index) => (
            <DogCard
              name={dog.name}
              species={dog.species}
              favFoods={dog.favFoods}
              birthYear={dog.birthYear}
              dogIndex={index}
              key={dog.id}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
