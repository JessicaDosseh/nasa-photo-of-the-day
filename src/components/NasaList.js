import React, {useState, useEffect} from 'react';
import NasaCard from './NasaCard';
import axios from 'axios';

export default function NasaDisplay() {
  const [data, setData] = useState([])

  useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=ZwUKBPgwpfcXn99ZDah8BaLHsdzDA4djyPxwApVp')
      .then(response => {
          console.log(response.data)
          setData(response.data)
      }).catch(error => {
          console.log(error)
      })
  }, [])
  return (
      <div className='container'>
          <NasaCard title={data.title} url={data.url} date={data.date} explanation={data.explanation} />
      </div>
  );
} 