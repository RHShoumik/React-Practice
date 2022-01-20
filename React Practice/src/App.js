import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Hello World</h1>
      <Person/>
    </div>
  );

  //React Libray method key
  //return React.createElement('div', {className : "App"}, React.createElement('h1' , null , "Hello world"),<Person/>);
}
function Person(){
  return(
    <div>
      <h2> I am from Person Component</h2>
      <Age/>
    </div>

  );
}
function Age(){
  return(
    <h2>Age : 25</h2>
  );
}

export default App;
