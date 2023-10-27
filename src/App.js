import './App.scss';
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
    </div>
  );
}

export default App;