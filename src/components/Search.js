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
        value={searchAddress}
        onChange={(e) => setSearchAddress(e.target.value)}
        placeholder="Adres giriniz -en az 3 karakter-"
      ></input>
      <button className='button-ara' onClick={() =>{
        if(searchAddress.length>2)
          searchBranch(searchAddress);
      }}>Ara</button>
    </div>
  );
}

export default Search;