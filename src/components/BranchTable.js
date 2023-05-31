import React, { useState } from 'react';
import Map from './Map';
import '../style/BranchTable.css';

const BranchTable = ({ searchingBranch }) => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchingBranch.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(searchingBranch.length / itemsPerPage);

  const handleOnClick = (branch) => {
    setSelectedBranch(branch);
    handleScrollToBottom();
  };

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <h2>{searchingBranch.length} Şube bulundu</h2>
      <table>
        <tbody>
          <tr>
            <th>Sube Adi</th>
            <th>Sube Durumu</th>
            <th>Sube Adresi</th>
            <th>Sube Telefon</th>
            <th></th>
          </tr>
          {currentItems.map((branch) => (
            <tr key={branch.SubeTelefon}>
              <td>{branch.SubeAdi}</td>
              <td>{branch.AktifMi ? "AÇIK" : "KAPALI"}</td>
              <td>{branch.SubeAdresi}</td>
              <td>{branch.SubeTelefon}</td>
              <td>
                <button onClick={() => handleOnClick(branch)}>Haritada Göster</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {selectedBranch && <Map branch={selectedBranch} key={selectedBranch.SubeTelefon} />}
    </>
  );
};

export default BranchTable;
