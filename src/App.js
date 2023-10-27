import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header'
import RecipeLists from './components/RecipeLists'
import { useState } from 'react';

function App() {
  const [loader,setLoader] = useState(true)
  return (
    <div className="main">
      <Header />
      <RecipeLists setLoader={setLoader}/>
      {loader && <div className='loader'>
        <div className='spinner'></div>
        </div>}
      <Footer/>
    </div>
  );
}

export default App;