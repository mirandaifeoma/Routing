import './App.css';
import { Routes, Route} from 'react-router-dom'
import {Login} from './pages/Login';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Contact} from './pages/Contact';
import {Email} from './pages/Email';
import {Founders} from './pages/Founders';
import {Details} from './pages/Details';
import {Product} from './pages/Product';
import {Accounts} from './pages/Accounts';
import {SocialAccounts} from './pages/Social-account';

function App() {
  return (
    <div className="App">  
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Email' element={<Email/>}/>
        <Route path='/Founders' element={<Founders/>}/>
        <Route path='/Founders/:id' element={<Details/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/Accounts' element={<Accounts/>}/>
        <Route path='/Accounts/SocialAccounts' element={<SocialAccounts/>}/>
      </Routes>
    </div>
  );
}

export default App;
