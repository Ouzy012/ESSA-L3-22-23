import React, { Component, useState } from 'react';
import './App.css';
import Etudiant from '../../components/etudiants/Etudiant';
import Classe from '../../components/classes/Classe';
import AddEtudiant from '../../components/add-etudiant/AddEtudiant';
import NavBar from '../../components/ESSA/layouts/navbar/NavBar';
import Accueil from '../../components/ESSA/accueil/Accueil';
import { Route, Routes } from 'react-router-dom';
import Contact from '../../components/ESSA/contact/Contact';
import About from '../../components/ESSA/about/About';
import NotFound from '../../components/404/404';
import Professeur from '../../components/ESSA/ecole/professeurs/Professeur';

function App() {

  
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Accueil/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/essa' element={<About/>}>
          <Route  path='/essa/professeur' element={<Professeur/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
        <Route path='profile/:id' element={<Contact/>}/>
      </Routes>
    </div>
  )
    
    
  
}


export default App;
