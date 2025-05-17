import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropertyList from './PropertyList'
import Button from '@mui/material/Button';
import Card from './BasicCard'

function App() {

   const [text, setText] = useState("");
   const[chapter, setChapter]=useState();
   const[chapterName, setChapterName]=useState();
   const GeetaApiUrl ="https://bhagavad-gita3.p.rapidapi.com/v2/chapters/"
   const url = new URL(GeetaApiUrl);
   url.searchParams.append("skip", "0");
   url.searchParams.append("limit", "1");
   const apiKey = "2168c0bfe5msh8e0d117776bc0f5p1f5350jsnada1d955a6ab"
   const headers = {
      "X-RapidAPI-Key": apiKey
   }
   useEffect(() => {
    async function fetchData() {
      const response = await fetch(url,{method: 'GET', headers});
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      console.log(data[0].name);
      setChapterName(data[0].name);
      setChapter(data[0].id);
      console.log(data[0].chapter_summary_hindi);
      setText(data[0].chapter_summary_hindi);
      setChapterName(data[0].name);
    }
    fetchData();
  }
  , []);

  return (
    <>
      <Card text={text} chapter={chapter} chapterName={chapterName} />
    </>
  )
}

export default App
