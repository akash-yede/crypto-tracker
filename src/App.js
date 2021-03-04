import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';
import Coin from './Coin';


function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
      }).catch(error => console.log(error));
  })

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())

  )

  return (
    <div classname="header" style={{display:"grid", "background-image": "linear-gradient(-225deg, #ac32ef 0%, #7918f2 48%, #4801ff 100%)", height:"50px"}}>
    <span style={{display:"contents", "font-style":"italic", "font-size":"xx-large", "font-weight":"bold", "font-family":"system-ui"}}>COIN 4 COIN</span>
    <div className="coin-app" style={{display: "flex", "flex-direction": "column", "align-items": "center", "margin-top": "64px", color: "#fff"}}>
      <div classname="coin-search" style={{"margin-bottom": "64px", "display": "flex", "flex-direction": "column", "justify-content": "center", "align-items": "center"}}>
        <h1 classname="coin-text" style={{"margin-bottom": "32px", "text-align": "center"}}>Search a currency</h1>
        <form>
          <input type="text" placeholder="Search" classname="coin-input" onChange={handleChange} 
          style={{"padding-left": "15px", width: "300px", height: "50px", "border-radius": "4px", border: "none", "background-image": "linear-gradient(-225deg, #ac32ef 0%, #7918f2 48%, #4801ff 100%)", color: "#e2e2e2"}} />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return(
          <Coin 
          key={coin.id} 
          name={coin.name} 
          image={coin.image}
          symbol={coin.symbol}
          volume={coin.total_volume}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          marketcap = {coin.market_cap}
          />
        )
      })}
    </div>
    </div>
  );
}

export default App;
