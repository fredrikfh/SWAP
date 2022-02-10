import './style/styles.css';
import AdCard from './components/AdCard';

function App() {

  function multipleCards() {
    for (let i = 0; i < 10; i++) {
      <AdCard></AdCard>
    }
  }
  
  return (
      <AdCard></AdCard>
  );
}

export default App;