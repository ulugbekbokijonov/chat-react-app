
import {ChatEngine} from 'react-chat-engine'
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';


function App() {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine 
          height="100vh"
          projectID = "8fe4c5a0-ef37-4720-af19-1f44757c621d"
          userName = "Codemy"
          userSecret = "123123"
          renderChatFeed = {(chatAppProps)=> <ChatFeed {...chatAppProps} />} />
  );
}

export default App;
