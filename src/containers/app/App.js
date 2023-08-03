import React, { Component, useState } from 'react';
import './App.css';
import Etudiant from '../../components/etudiants/Etudiant';
import Classe from '../../components/classes/Classe';
import AddEtudiant from '../../components/add-etudiant/AddEtudiant';

function App() {

  /* state = {
    etudiants : [
      {
        name: "Diop",
        prenom: "Ibou"
      },
      {
        name: "Diop",
        prenom: "Madou"
      },
      {
        name: "Diop",
        prenom: "Doudou"
      }
    ],
    classe: "ESSA",
    color: [
      '#38EA74', '#75F6BC', '#52B1C2', '#7EED3E', '#C720E5', '#7468CD', '#E58B11', '#B33538', '#60ED15', '#12D5B8', '#55517A', '#BB4C56', '#00FD37', '#C022A7', '#29C29C', '#04A25D', '#C6C460', '#9F6C80', '#537D84', '#F9CB16', '#04B6C9', '#54D0A7', '#0C1282', '#FCFBAC', '#2F64F1', '#59F978', '#7DFF60', '#125C5F', '#395FBA', '#77489D'],
    background: "#76C1B5",
    etat: false,
  } */

  //Définit un state en utilisant le Hooks useState()
  const [etudiants, setEtudiants] = useState([
    {
      name: "Diop",
      prenom: "Ibou"
    },
    {
      name: "Diop",
      prenom: "Madou"
    },
    {
      name: "Diop",
      prenom: "Doudou"
    }
  ])

  const [classe] = useState("ESSA")
  const [color] = useState([
    '#38EA74', '#75F6BC', '#52B1C2', '#7EED3E', '#C720E5', '#7468CD', '#E58B11', '#B33538', '#60ED15', '#12D5B8', '#55517A', '#BB4C56', '#00FD37', '#C022A7', '#29C29C', '#04A25D', '#C6C460', '#9F6C80', '#537D84', '#F9CB16', '#04B6C9', '#54D0A7', '#0C1282', '#FCFBAC', '#2F64F1', '#59F978', '#7DFF60', '#125C5F', '#395FBA', '#77489D'
  ])
  const [background, setBackground] = useState("#76C1B5")
  const [etat] = useState(false)
  


  const changeBackground = () => {
    /* let random = Math.floor(Math.random() * 29)
    //this.state.background = this.state.color[random]
    
    
    this.setState({     
      background : this.state.color[random],
      etat: !this.state.etat
    }) */

    let random = Math.floor(Math.random() * 29)
    setBackground(color[random])
  }

  const changeName = (prenom, nom) => {
    //this.state.etudiants[0].prenom = prenom

    /* let newData = [...this.state.etudiants]
    newData[0].prenom = prenom
    newData[0].name = nom

    this.setState({
      etudiants: newData
    }) */

    let newData = [...etudiants]
    newData[0].prenom = prenom
    newData[0].name = nom
    setEtudiants(newData)
  }


  

  return (
    <div className="App">
      <h1>Bienvenue à ESSA</h1>

      <button onClick={changeBackground}>
        {etat === true ? 'Allumer' : 'Eteint'}
      </button>


      <div>
        <AddEtudiant/>
      </div>

      {
        etudiants.map((etudiant) => 
          <Etudiant 
          name={etudiant.prenom + " "+ etudiant.name} 
          classe={classe} couleur={background} clic={changeName.bind(this, "Sokhna", "Diop")}/>
      )}
      
      <Etudiant 
        name={etudiants[0].prenom + " "+ etudiants[0].name} 
        classe={classe} couleur={background} clic={changeName.bind(this, "Sokhna", "Diop")}/>

      <Etudiant 
        name={etudiants[1].prenom + " "+ etudiants[1].name} 
        classe={classe} couleur={background} clic={() => changeName("Fatou", "Sarr")}/>
      
    </div>
  )
    
    
  
}


export default App;
