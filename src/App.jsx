
import Nav from './components/Nav'
import Body from './components/Body'
import axios from 'axios';
import { useEffect, useState } from 'react';
// import axiosRetry from 'axios-retry'
function App() {
  const [searchQuery,setSearch] = useState('');

  const [data,setData] = useState([])
 

  useEffect(()=>{
    const apiKey = 'https://api.themoviedb.org/3/search/movie?api_key=f71fe42a32792ec4e29ae6c45af83426&query='+searchQuery;
    async function fetchData() {
      try {
        const response = await axios.get(apiKey);
        setData(response.data.results)
        console.log(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    
    fetchData()
    

  },[searchQuery])


  

  return (
    <div className="App">
      <Nav searchQuery={searchQuery} setSearch={setSearch}></Nav>
      <Body data={data} ></Body>
    </div>
  )
}

export default App
