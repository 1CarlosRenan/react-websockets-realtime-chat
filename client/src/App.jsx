import { useState } from 'react'
import './App.css'

import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'

function App() {
  const [chatVisibily, setChatVisibily] = useState(false)
  const [socket, setSocket] = useState(null)

  return (
    <div className='App'>
      { chatVisibily ? <Chat socket={socket} /> : <Join setSocket={setSocket} setChatVisibily={setChatVisibily} />}
    </div>
  )
}

export default App
