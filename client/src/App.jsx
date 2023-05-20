import './App.css'

import Join from './components/Join/Join'
import Chat from './components/Chat/Chat'
import { useState } from 'react'

function App() {
  const [chatVisibily, setChatVisibily] = useState(false)

  return (
    <div className='App'>
      { chatVisibily ? <Chat /> : <Join setChatVisibily={setChatVisibily} />}
    </div>
  )
}

export default App
