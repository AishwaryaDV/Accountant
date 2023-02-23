import Header from "./components/Header";
import Overview from "./components/Overview";
import Stocks from "./components/Stocks";
import Transactions from "./components/Transactions";
import Savings from "./components/Savings";
import Analytics from "./components/Analytics";
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Overview />
      <div className="lower-section">
        <div className="savings-section">
          <Savings />
        </div>
        <div className="analytics-section">
          <Analytics />
        </div>
        <div className="stocks-section">
          <Stocks />
        </div>
      </div>
      <div className="transactions-section">
        <Transactions />
      </div> 
      <Footer />
    </div>
  );
}

export default App;
