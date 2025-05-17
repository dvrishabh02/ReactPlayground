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
   const[page, setPage]=useState("0");
   const GeetaApiUrl ="https://bhagavad-gita3.p.rapidapi.com/v2/chapters/"
   const url = new URL(GeetaApiUrl);
   url.searchParams.append("skip", page);
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
      setChapterName(data[0].name_meaning);
      setChapter(data[0].id);
      setText(data[0].chapter_summary);
    }
    fetchData();
  }
  , [page]);

  const handleNext = () => {
    setPage((page) => {
      if(page=="17"){
        return "17";
      }
      const newPage = parseInt(page) + 1;
      page = newPage;
      return newPage.toString();
    });
  }
  const handlePrev = () => {
    setPage((page) => {
      if(page=="0"){
        return "0";
      }
      const newPage = parseInt(page) - 1;
      page = newPage;
      return newPage.toString();
    });
  }
  return (
    <>
      <Card text={text} chapter={chapter} chapterName={chapterName} />
      <Button variant="contained" onClick={handlePrev}>Prev</Button>   <Button variant="contained" onClick={handleNext}>Next</Button>
    </>
  )
}

export default App
