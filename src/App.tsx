import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import CatCard from './components/cat_card';
import Cat from './data/cat';
import { catData } from './data/cat-data';
// import { v4 as uuidv4 } from 'uuid';

function App(): JSX.Element {
  const [cats, setCats] = useState<Array<Cat>>(catData);
  const catCount: number = cats.length;

  return (
    <>
      <Navbar />
      <Header catCount={catCount} />

      <main>
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
      </main>

      <Footer />
    </>
  );
}

export default App;
