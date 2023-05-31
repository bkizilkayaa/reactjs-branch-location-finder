import React,{useState} from 'react';
import '../style/Search.css';

const Search = ({branchs,setSearchingBranch}) => {
    const[searchAddress,setSearchAddress]=useState('');
    

  const searchBranch = (branchName) => {
    const similarBranchs = branchs.filter((element) =>
        element.SubeAdi.includes(branchName.toUpperCase()) 
        ||
        element.SubeAdresi.includes(branchName.toUpperCase())
      );
    setSearchingBranch(similarBranchs);
  };  

  return (
    <div className='searchBar'>
      <input
        style={{ padding: "10px", margin: "10px" }}
        value={searchAddress}
        onChange={(e) => setSearchAddress(e.target.value)}
        placeholder="Adres giriniz"
      ></input>
      <button className='button-ara' onClick={() =>{
        if(searchAddress!=="")
          searchBranch(searchAddress);
      }}>Ara</button>
    </div>
  );
}

export default Search;