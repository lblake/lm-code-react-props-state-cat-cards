import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import Cat from './data/cat';
import {CatData} from './data/cat-data';

function App(): JSX.Element {
  const [cats, setCats] = useState<Array<Cat>>(CatData);

  return (
    <>
      <Navbar />
      <Header />

      <main>
        <div className='cards__wrapper'>{/* JSX code can go here */}</div>
      </main>

      <Footer />
    </>
  );
}

export default App;
