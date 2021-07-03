
import './App.css';
import { SideBar } from './Component/SideBar/SideBar';
import { Chat } from './Component/SideBar/ChatArea/Chat';
function App() {
  return (
    <div className="app">
      <div className="app__body">
     
        <SideBar/>
        <Chat/>
      </div>
      
    </div>
  );
}


export default App;
