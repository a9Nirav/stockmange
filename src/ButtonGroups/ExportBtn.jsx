import React from 'react';
import { useDispatch } from 'react-redux';
import { setExportedData } from "../features/dataExportSlice";

function ExportBtn() {
  const dispatch = useDispatch();

  const handleExport = () => {
    const dataToExport = [/* Array of data fetched or generated */];
    dispatch(setExportedData(dataToExport));

    console.log('Data exported:', dataToExport);
  };

  return (
    <>
     
      <button onClick={handleExport}>Export</button>
    </>
  );
}

export default ExportBtn;
