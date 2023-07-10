import React from 'react'
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {Home} from './pages/Home/Home.jsx'
import {Cart} from './pages/Cart/Cart'
import {Navbar} from './components/navbar/Navbar.jsx'
import {Menu} from './pages/Menu/Menu.jsx'

const products =[
  {
    image:image1,
    title:'Mens Lace up fashion Shoe',
    tema:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor rem quibusdam, cum possimus dolorem impedit consectetur iure quidem blanditiis voluptatum odit obcaecati corporis voluptatibus illum tempora aperiam molestiae itaque!',
    price:'64,79',
    btn:'ADD TO CART'
  },
  {
    image:image2,
    tema:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor rem quibusdam, cum possimus dolorem impedit consectetur iure quidem blanditiis voluptatum odit obcaecati corporis voluptatibus illum tempora aperiam molestiae itaque!',
    title:'Womens sneakers 20225',
    price:'64,79'
    ,
    btn:'ADD TO CART'
  },
  {
    image:image3,
    title:'Womens T-shirt 2022',
    tema:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor rem quibusdam, cum possimus dolorem impedit consectetur iure quidem blanditiis voluptatum odit obcaecati corporis voluptatibus illum tempora aperiam molestiae itaque!',
    price:'64,79'
    ,
    btn:'ADD TO CART'
  }, 
  {
    image:image4,
    title:'Mens black jacket',
    tema:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor rem quibusdam, cum possimus dolorem impedit consectetur iure quidem blanditiis voluptatum odit obcaecati corporis voluptatibus illum tempora aperiam molestiae itaque!',
    price:'64,79'
    ,
    btn:'ADD TO CART'
  },
  {
    image:image5,
    title:'Brazilia',
    tema:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor rem quibusdam, cum possimus dolorem impedit consectetur iure quidem blanditiis voluptatum odit obcaecati corporis voluptatibus illum tempora aperiam molestiae itaque!',
    price:'64,79'
    ,
    btn:'ADD TO CART'
  },
  {
    image:image6,
    title:'T-shirt for lady',
    tema:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor rem quibusdam, cum possimus dolorem impedit consectetur iure quidem blanditiis voluptatum odit obcaecati corporis voluptatibus illum tempora aperiam molestiae itaque!',
    price:'64,79'
    ,
    btn:'ADD TO CART'
  },
  {
    image:image7,
    title:'For China mens',
    tema:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor rem quibusdam, cum possimus dolorem impedit consectetur iure quidem blanditiis voluptatum odit obcaecati corporis voluptatibus illum tempora aperiam molestiae itaque!',
    price:'64,79'
    ,
    btn:'ADD TO CART'
  },
  {
    image:image8,
    title:'Its only for me',
    tema:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolor rem quibusdam, cum possimus dolorem impedit consectetur iure quidem blanditiis voluptatum odit obcaecati corporis voluptatibus illum tempora aperiam molestiae itaque!',
    price:'64,79'
    ,
    btn:'ADD TO CART'
  }
]


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
         <Route path='/' element={<Home/>}/>                {/* Тут стоить /. Это говорит что это главный сайт основа */}
         <Route path='cart' element={<Cart/>}/> 
        </Routes>
      </Router>
    </div>
  );
 }

export default App;
