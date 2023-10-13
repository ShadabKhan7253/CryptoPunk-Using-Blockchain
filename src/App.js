import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import { useState, useEffect } from 'react';
// import axios from 'axios';
import { Sepolia } from '@thirdweb-dev/chains';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import Punklist from './components/Punklist';

const sdk = new ThirdwebSDK(Sepolia, {
  clientId: '49288cca048ca039642e65555ab5c150',
});

// async function asyncCall() {
//   console.log('calling');
//   const contract = await sdk.getContract('0x4C27B6C229FeE357f0Ff5909644527fC3DDd0f0B');
//   const nfts = await contract.erc721.getAll();
//   console.log(nfts);
//   // Expected output: "resolved"
// }

// asyncCall();

function App() {
  const [punkListData, setPunkListData] = useState([]);

  const getMyNfts = async () => {
    const contract = await sdk.getContract('0x4C27B6C229FeE357f0Ff5909644527fC3DDd0f0B');
    const nfts = await contract.erc721.getAll();
    // console.log(nfts);
    setPunkListData(nfts);
  };
  getMyNfts();

  // useEffect(() => {
  //   const getMyNfts = async () => {
  //     const contract = await sdk.getContract('0x4C27B6C229FeE357f0Ff5909644527fC3DDd0f0B');
  //     const nfts = await contract.erc721.getAll();
  //     console.log(nfts[0].metadata.name);
  //   };
  //   return getMyNfts();
  // }, []);

  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={12}
        name={'Hulk Punk'}
        traits={[{ value: 5 }]}
        image={
          'https://i.seadn.io/s/raw/files/ed6802b226c7b496d1f414e6b3f7dc5e.jpg?auto=format&dpr=1&w=384'
        }
      />
      <Punklist punkListData={punkListData} />
    </div>
  );
}

export default App;
