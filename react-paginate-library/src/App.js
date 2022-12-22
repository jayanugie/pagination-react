import { useEffect, useState } from 'react';
import './App.css';
import Image from './components/Image';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(
      res => res.json().then(data => {
        setImages(data)
      })
    )
  }, [])

  return (
    <div>
      <Image data={ images } />
    </div>
  );
}

export default App;
