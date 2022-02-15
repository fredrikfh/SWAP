import React from 'react';
import './style/styles.css';
import AdCard from './components/AdCard';
import AddPost from './components/AddPost';
import 'date-fns';

function App() {
  return (
    <div className="App">
      <AddPost></AddPost>
      <AddPost></AddPost>
      <AdCard></AdCard>
    </div>
  );
}

export default App;
