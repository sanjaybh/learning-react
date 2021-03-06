import React from 'react';
//import ReactDOM from 'react-dom';

import Header from "./Header.js"
import MyInfo from "./MyInfo.js"
import Footer from "./Footer.js"
import TodoMain from "./TodoMain.js"

import ContactCardContainer from "./contactCard/ContactCardContainer.js"
import JokesContainer from "./jokes/JokesContainer.js"

import ProdCont from "./products/ProdCont.js"

function MainContainer(){
    return <div>
        <Header />
        <br />

        <h3>Personal Info</h3>
        <MyInfo />
        <br />

        <h3>Jokes List</h3>
        <JokesContainer />
        <br />

        <ContactCardContainer />
        <br />

        <TodoMain />
        <br />

        <Footer />
        <br />

        <h3>Products List</h3>
        <ProdCont />
      </div>;
    /*
    <div>
        <Header />
        <br/>
        <MyInfo />
        <br />

        <h3>Jokes List</h3>
        <JokesContainer />
        <br />
        <ContactCardContainer />
        <br />
        <TodoMain />
        <br />
        <Footer />
        <br />

        <h3>Products List</h3>
        <ProdCont />
    </div>
    */        
}

export default MainContainer