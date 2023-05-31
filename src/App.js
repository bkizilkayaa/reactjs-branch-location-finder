import React, {useState,useEffect } from 'react';
import './App.css';

const API_URL="https://openapi.izmir.bel.tr/api/izsu/subeler";
 
 const App = () => {
  const[branchs,setBranchs]=useState([]);
  const[searchingBranch,setSearchingBranch]=useState([]);
  
    useEffect(()=>{
      fetch(API_URL)
      .then(res=>{
      if(res.ok && res.status===200){
        return res.json();
      }
      })
      .then(data=>setSubeler(data))
      .catch(err=>{console.log(err)});
    },[])

  return (
    <div className="bg">
      <div className="App">
        <div className="container">
            <h1 className='h1-grad'>Izmir-Izsu Tahsilat Şubesi Bulucu</h1>
            <h2>Arama yapmak icin sube adi veya adresini girebilirsiniz.</h2>
            <Search branchs={branchs} setSearchingBranch={setSearchingBranch}        />
              <div className="sube-container">
              {searchingBranch.length>0 ? (
                <BranchTable
                searchingBranch={searchingBranch}
                />
              ) : (
                  <h2>Arama yapiniz</h2>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
