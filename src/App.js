import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// eta main component
function App() {
  //declare state
  // khali array er value empty array []
  const [hero, setHero] = useState([])
  // data from API
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data=> setHero(data))
  },[])
  
  const nayoks = [{name : 'Dipjol', age : '54'},{name : 'Ilias Kanchon', age : '54'},{name : 'Alamgir', age : '54'},{name : 'Omar Sani', age : '54'} ]
  //nayoks.map(nayok=>console.log(nayok.name));
   const heroName =['Arnold', 'Dominic', 'Van Dam', 'Tom Cruise']
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        nayoks.map(nk=><Nayok name ={nk.name} age= {nk.age}></Nayok>)
        
      }
      {
        heroName.map(hero=> <Nayok name ={hero}></Nayok>)
      }
      {

      }
      {
        hero.map(hk=><Nayok name ={hk.name} key={hk.id} ></Nayok>)
      }
      
      {/* Dynamic vabe data dichi
      <Nayok name ={nayoks[0]}></Nayok>
      <Nayok name ={nayoks[1]}></Nayok>
      <Nayok name ={nayoks[2]}></Nayok>
       static vabe data dilam 
       <Nayok name ="Jahsim" age= "56"></Nayok>
      <Nayok name ="Shakib" age= "23"></Nayok>
      <Nayok name ="Rubel" age= "21"></Nayok>  */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     
      </header>
    </div>
  );
}

function MovieCounter(){
  const [movieCount, setCount] = useState(4);
  const countDown =()=>setCount(movieCount+1);
  return(
    <div>
      <button onClick ={countDown}>Add Movie</button>
     <h3 >Numbers of Movies:{movieCount}</h3>
    {/* component er vitore arekta component use korlam */}
    <MovieDisplay movies = {movieCount}></MovieDisplay>
    <MovieDisplay movies = {movieCount + 10}></MovieDisplay>
    <MovieDisplay movies = {movieCount + 5}></MovieDisplay>
    <MovieDisplay movies = {movieCount}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props){
  return <h4>Movies I have acted : {props.movies}</h4>
}


// props will receive the data as object
function Nayok(props){
  const nayokStyle = {border:'2px solid red' , margin: '10px' }
  return (
  <div style ={nayokStyle}>
    {/* show static data */}
    <h1>Dynamic Nayok : {props.name}</h1>
    {/* props namok object er vitorer name property ta nilam */}
    <h1>Ami Nayok :{props.name}</h1>
    {/* kono age na pele 30 nibe */}
    <h3>He is {props.age || 30} years old</h3>
  </div>)
}
export default App;
