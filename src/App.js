
import './App.css';
import Countries from './component/Countries/Countries';


function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}


export default App;


/* 
function Coutries(){
  const [countries, setCountry]= useState([])
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data=>setCountry(data))
  },[])
  return(
    <div>
      <h1>Country</h1>
      <h1>Total Country : {countries.length}</h1>
      {
        countries.map(data=> <Country name={data.name} capital={data.capital}></Country>)
      }
      <h3>end</h3>
    </div>
  )
}
function Country(props){
  return(
    <div>
      <h1>Name : {props.name}</h1>
      <p>Capital  : {props.capital}</p>
    </div>
  )
}
*/