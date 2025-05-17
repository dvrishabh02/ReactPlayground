import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropertyList from './PropertyList'
import Button from '@mui/material/Button';


function App() {
  const properties=[
  { id: 1, name: 'Property 1', price: 100000 },
  { id: 2, name: 'Property 2', price: 200000 },
  { id: 3, name: 'Property 3', price: 300000 },
];
    // const print=()=>{
    //   properties.forEach((property) => {
    //     property.name="Good Property ";
    //   });
    // }


  return (
    <>
      <PropertyList properties={properties} />
      <Button variant="contained">Press Me</Button>
    </>
  )
}

export default App
