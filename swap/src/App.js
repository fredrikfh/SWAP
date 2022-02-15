import React, { useEffect, useState } from 'react';
import './style/styles.css';
import AdCard from './components/AdCard';
import AddPost from './components/AddPost';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

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
