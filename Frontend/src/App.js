import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widget from './components/Widget';

function App() {
  return (
    <div className='qura bg-gray-200'>
      <Navbar/>
      <div className='qura_content flex justify-center mt-12'>
      <Sidebar className="flex"/>
      <Feed/>
      <Widget/>
      </div>

    </div>
  );
}

export default App;
