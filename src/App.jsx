import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import NavBar from "./components/NavBar"
import SearchBar from "./components/SearchBar";

function App() {
  useEffect(() => {
    fetchData('octocat');
  }, [])
   const [isDarkMode, setDarkMode] = useState(false);
   const [data, setData] = useState('');
   const fetchData = async (username) => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    setData(data);
   }
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    if(checked === false) {
      document.body.classList.remove('dark');
    }
    else document.body.classList.add('dark');
  }

  return (
    <div className={`App`}>
      <NavBar darkModeHandler = {toggleDarkMode} isDarkMode = {isDarkMode}/>
      <SearchBar fetchData={fetchData}/>
      <Card data={data}/>
    </div>
  )
}

export default App;