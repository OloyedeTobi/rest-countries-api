import  { useState, useEffect, createContext } from 'react';

export const GeneralContext = createContext();

export const GeneralStorage = ({ children }) => {
  const [filter, setFilter] = useState(false);
  const [data, setData] = useState([]);
  const [region, setRegion] = useState("all");
  const [search, setSearch] = useState('');
  const [darkTheme, setDarkTheme] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "true") {
      setDarkTheme(true);
    } else {
      setDarkTheme(false);
    }
    const fetchData = async() =>{
    const response = await fetch("https://restcountries.com/v2/all");
    const jsondata = await response.json();
    setData(jsondata);
    setLoading(false);
 }
 fetchData()
  }, []);

 
  useEffect(() => {
    setLoading(true);
    if (region !== "all") {
      setFilter(false);
      const fetchData = async() =>{
      const response = await fetch(`https://restcountries.com/v2/region/${region}`)
      const jsondata = await response.json();
      setData(jsondata);
      setLoading(false);
      } 
      fetchData()
    } else {
      setFilter(false);
      const fetchData = async() =>{
      const response = await fetch("https://restcountries.com/v2/all");
      const jsondata = await response.json();
      setData(jsondata);
      setLoading(false);
      }
      fetchData()
    }
  }, [region]);

  
  useEffect(() => {
    if (search && search.length >= 3) {
      setLoading(true);
      const fetchData = async() =>{
      const response = await fetch(`https://restcountries.com/v2/name/${search}`);
      const jsondata = await response.json();
      !jsondata.status && setData(jsondata);
      setLoading(false);
      }
      fetchData()
    } else if (search === '') {
      setLoading(true);
      const fetchData = async() =>{
      const response = await fetch("https://restcountries.com/v2/all");
      const jsondata = await response.json();
      setData(jsondata);
      setLoading(false);
      }
      fetchData()
    }
  }, [search]);

  
  useEffect(() => {
    localStorage.setItem("theme", darkTheme);
  }, [darkTheme]);

  return (
    <GeneralContext.Provider value={{filter, setFilter, data, setRegion, search, setSearch, darkTheme, setDarkTheme, loading, setLoading }}>
      {children}
    </GeneralContext.Provider>
  );
};