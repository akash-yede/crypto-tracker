import React from 'react';
import './Coin.css';

const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {
    return (
        <div classname="coin-container" style={{display:"flex", "justify-content": "center"}}>
            <div classname="coin-row" style={{display:"flex", "flex-direction": "row", "justify-items": "start", "align-items": "center", height: "80px", "border-bottom": "1px solid #d7d7d7", width: "900px"}}>
                <div classname="coin" style={{display: "flex", "align-items": "center", "padding-right": "24px", "min-width": "300px"}}>
                    <img style={{height: "30px", width: "30px", "margin-right": "10px"}} src={image} alt="crypto" />
                    <h1 style={{"font-size": "16px", "width": "150px"}}>{name}</h1>
                    <p classname="coin-symbol" style={{"text-transform": "uppercase"}}>{symbol}</p>
                </div>
                <div classname="coin-data" style={{display: "flex", "text-align": "center", "justify-content": "space-between", width: "100%"}}>
                    <p classname="coin-price" style={{"min-width":"140px"}}>${price}</p>
                    <p classname="coin-volume" style={{width:"155px"}}>${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (<p classname="coin-percent red" style={{width:"100%", color: "#f00606"}}>{priceChange.toFixed(2)}%</p>
                    ) : (
                    <p classname="coin-percent green" style={{width:"100%", color: "#11d811"}}>{priceChange.toFixed(2)}%</p>)
                    }
                    <p classname="coin-marketcap" style={{width:"230px"}}>
                        Mkt Cap: ${marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin
