import React from 'react';
import './home.css';
import leaf from './assets/leaf-min.gif';
import 'bootstrap/dist/css/bootstrap.css';


const Home = props => {
  return (
            <div >
               <img class="section-1-gif" src={leaf} alt="leaf-gif" />
            </div>
  );
};



export default Home;