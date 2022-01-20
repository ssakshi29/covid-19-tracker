import React, { useState, useEffect } from 'react';
import NativeSelect from '@mui/material/NativeSelect';
import FormControl from '@mui/material/FormControl';
import './country.css';
// import styles from './CountryPicker.module.css';

const Countries = ({handleCountryChange}) => {
const [countries, setcountries] = useState([])
  useEffect(() => {
              fetch('https://disease.sh/v3/covid-19/countries')
              .then(response => response.json())
              .then(res=>setcountries(res))
              .catch(err => {
                console.error(err);
      });
  },[]);

  return (
        <div className="section1">
            <FormControl className="formControl">
            <NativeSelect defaultValue="India" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="India">India</option>
                {countries.map((country, i) => <option key={i} value={country.country}>{country.country}</option>)}
            </NativeSelect>
            </FormControl>
        </div>
  );
};

export default Countries;