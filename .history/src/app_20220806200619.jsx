import { useEffect } from 'react';
import './app.css';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    console.log('useEfeect');
  }, []);
  return <h1>Hello :)</h1>
}

export default App;
