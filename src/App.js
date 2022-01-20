import React, {useState,useEffect} from 'react';
import Header from './component/Header/Header';
import Card1 from './component/Card/Card';
import Countries from './component/CountryPicker/CountryPicker';
import Map from './component/Map/Map';
import './App.css';


const App = () => {
  const [data, setdata] = useState([])
  const [selected, setselected] = useState("India")
  const [loading, setloading] = useState(false)

  useEffect(() => {
      fetch('https://disease.sh/v3/covid-19/countries')
          .then(response =>response.json())
          .then(res=>{setdata(res);
            setloading(true);})
          .catch(err => {
              console.error(err);
          });
  },[])


  const handleCountryChange=(e)=>{
    setselected(e)
}

  return (
  

    <div >
        <Header/>
       
        <div >
        {     data.map(e=>{
              const {active , deaths , recovered} = e
                    if(e.country===selected)
                    {
                      return(<Card1 key={deaths} active={active} recovered={recovered} deaths={deaths}/>)
                    }
                    return null;
                    })
          }
          </div>

          <div className='countries'>
              <Countries handleCountryChange={handleCountryChange}/>
          </div>
        
                            
        
         
              <Map/>
        
    </div>
  );
}

export default App;
