import { useEffect } from "react";
import './App.css';
import logo from './assets/logo.png';



const embedCodes: { name: string; code: string }[] = [
  {
    name: "SUI/USD",
    code: `<div class="cr-price-ticker-widget" data-site-url="https://cryptorank.io" data-api-url="https://api.cryptorank.io/v0" data-coin-key="sui" data-base-key="united-states-dollar" data-secondary-key="none" data-stat-key="united-states-dollar" data-ticker="true" data-rank="true" data-market-cap="true" data-volume="true" data-stats="true"><a target="_blank" rel="noopener" href="https://cryptorank.io/price/sui">Sui Price by Cryptorank</a></div>`
  },
  {
    name: "DEEP/USD",
    code: `<div class="cr-price-ticker-widget" data-site-url="https://cryptorank.io" data-api-url="https://api.cryptorank.io/v0" data-coin-key="deepbook" data-base-key="united-states-dollar" data-secondary-key="none" data-stat-key="united-states-dollar" data-ticker="true" data-rank="true" data-market-cap="true" data-volume="true" data-stats="true"><a target="_blank" rel="noopener" href="https://cryptorank.io/price/deepbook">DeepBook Price by Cryptorank</a></div>`
  },
  {
    name: "WAL/USD",
    code: `<div class="cr-price-ticker-widget" data-site-url="https://cryptorank.io" data-api-url="https://api.cryptorank.io/v0" data-coin-key="walrus-protocol" data-base-key="united-states-dollar" data-secondary-key="none" data-stat-key="united-states-dollar" data-ticker="true" data-rank="true" data-market-cap="true" data-volume="true" data-stats="true"><a target="_blank" rel="noopener" href="https://cryptorank.io/price/walrus-protocol">Walrus Price by Cryptorank</a></div>`
  },
  {
    name: "NS/USD",
    code: `<div class="cr-price-ticker-widget" data-site-url="https://cryptorank.io" data-api-url="https://api.cryptorank.io/v0" data-coin-key="suins" data-base-key="united-states-dollar" data-secondary-key="none" data-stat-key="united-states-dollar" data-ticker="true" data-rank="true" data-market-cap="true" data-volume="true" data-stats="true"><a target="_blank" rel="noopener" href="https://cryptorank.io/price/suins">SuiNS Price by Cryptorank</a></div>`
  },
  {
    name: "BLUE/USD",
    code: `<div class="cr-price-ticker-widget" data-site-url="https://cryptorank.io" data-api-url="https://api.cryptorank.io/v0" data-coin-key="bluefin" data-base-key="united-states-dollar" data-secondary-key="none" data-stat-key="united-states-dollar" data-ticker="true" data-rank="true" data-market-cap="true" data-volume="true" data-stats="true"><a target="_blank" rel="noopener" href="https://cryptorank.io/price/bluefin">Bluefin Price by Cryptorank</a></div>`
  },
  {
    name: "SEND/USD",
    code: `<div class="cr-price-ticker-widget" data-site-url="https://cryptorank.io" data-api-url="https://api.cryptorank.io/v0" data-coin-key="suilend" data-base-key="united-states-dollar" data-secondary-key="none" data-stat-key="united-states-dollar" data-ticker="true" data-rank="true" data-market-cap="true" data-volume="true" data-stats="true"><a target="_blank" rel="noopener" href="https://cryptorank.io/price/suilend">Suilend Price by Cryptorank</a></div>`
  },
  {
    name: "BTC/USD",
    code: `<div class="cr-price-ticker-widget" data-site-url="https://cryptorank.io" data-api-url="https://api.cryptorank.io/v0" data-coin-key="bitcoin" data-base-key="united-states-dollar" data-secondary-key="none" data-stat-key="united-states-dollar" data-ticker="true" data-rank="true" data-market-cap="true" data-volume="true" data-stats="true"><a target="_blank" rel="noopener" href="https://cryptorank.io/price/bitcoin">Bitcoin Price by Cryptorank</a></div>`
  },
  {
    name: "ETH/USD",
    code: `<div class="cr-price-ticker-widget" data-site-url="https://cryptorank.io" data-api-url="https://api.cryptorank.io/v0" data-coin-key="ethereum" data-base-key="united-states-dollar" data-secondary-key="none" data-stat-key="united-states-dollar" data-ticker="true" data-rank="true" data-market-cap="true" data-volume="true" data-stats="true"><a target="_blank" rel="noopener" href="https://cryptorank.io/price/ethereum">Ethereum Price by Cryptorank</a></div>`
  },
  {
    name: "SOL/USD",
    code: `<div class="cr-price-ticker-widget" data-site-url="https://cryptorank.io" data-api-url="https://api.cryptorank.io/v0" data-coin-key="solana" data-base-key="united-states-dollar" data-secondary-key="none" data-stat-key="united-states-dollar" data-ticker="true" data-rank="true" data-market-cap="true" data-volume="true" data-stats="true"><a target="_blank" rel="noopener" href="https://cryptorank.io/price/solana">Solana Price by Cryptorank</a></div>`
  },
  {
    name: "NAVX/USD",
    code: `<div class="cr-price-ticker-widget" data-site-url="https://cryptorank.io" data-api-url="https://api.cryptorank.io/v0" data-coin-key="navi-protocol" data-base-key="united-states-dollar" data-secondary-key="none" data-stat-key="united-states-dollar" data-ticker="true" data-rank="true" data-market-cap="true" data-volume="true" data-stats="true"><a target="_blank" rel="noopener" href="https://cryptorank.io/price/navi-protocol">NAVI Protocol Price by Cryptorank</a></div>`
  },
  {
    name: "CETUS/USD",
    code: `<div class="cr-price-ticker-widget" data-site-url="https://cryptorank.io" data-api-url="https://api.cryptorank.io/v0" data-coin-key="cetus-protocol" data-base-key="united-states-dollar" data-secondary-key="none" data-stat-key="united-states-dollar" data-ticker="true" data-rank="true" data-market-cap="true" data-volume="true" data-stats="true"><a target="_blank" rel="noopener" href="https://cryptorank.io/price/cetus-protocol">Cetus Protocol Price by Cryptorank</a></div>`
  }
];

interface WidgetProps {
  code: string;
}

const Widget: React.FC<WidgetProps> = ({ code }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cryptorank.io/widget/price-ticker.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="widget" dangerouslySetInnerHTML={{ __html: code }} />;
};

function App() {
  return (
    <>
      <div className="logoo"><img src={logo} className="App-logo" alt="logo" /></div>
      <div className="container">
        
        <div className="grid-container">
          {embedCodes.map((widget, index) => (
            <div key={index} className="widget-box">
              <Widget code={widget.code} />
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
}

export default App;
