import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
const [nayoks, setNayoks] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setNayoks(data))
  },[])
      // const nayoks = [{name: 'Jasim', age: 56}, { name: 'DeepJol', age: 61}, {name: 'BappaRaz', age: 15}, {name: 'Omar Sani', age: 35}];

return (
  <div className="App">
    <MovieCounter></MovieCounter>
    
    {
      nayoks.map(nk => <Nayok name={nk.name} key={nk.id} email={nk.email}></Nayok>)
    }
    
  </div>
);
}

function MovieDisplay(props){
  return (
    <div>
      I have done {props.movie} movies.
    </div>
  );
};


function MovieCounter(){
  let [count, setCount] = useState(0);

  const handleClick = () => 
    setCount(count + 1);
  
  return(
    <div>
      <h2>Number of movies : {count}</h2>
      <button onClick={handleClick}>Add Movies</button>
      <MovieDisplay movie={count*3}></MovieDisplay>
    </div>
  )
}

function Nayok(props){
  // console.log(props)
  const nayokStyle = {
    border: '2px solid green',
    marginBottom: '20px',
    backgroundColor: 'whitesmoke'
  }
  return (
    <div style={nayokStyle}>
      <h1> Name : {props.name}</h1>
      <h3>Email : {props.email || 25}</h3>
      
    </div>
  )
}

export default App;
