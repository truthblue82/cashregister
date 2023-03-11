import './App.css';
import { Header } from 'components/apps/Header/Header';
import { Footer } from 'components/apps/Footer/Footer';
import { CashRegister } from 'components/apps/CashRegister/CashRegister';

function App() {
  return (
    <div className="App">
      <Header />
      <CashRegister />
      <Footer />
    </div>
  );
}

export default App;
