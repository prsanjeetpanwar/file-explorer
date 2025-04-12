
import './App.css';
import explorer from './data/folderData';
import Folder from './components/Folder';
import { useState } from 'react';

function App() {
  const [explorerData, SetExplorerData]=useState(explorer)
  console.log(explorerData)
  return (
    <div >
 
  <Folder explorer={explorerData}/>
    </div>
  );
}

export default App;
