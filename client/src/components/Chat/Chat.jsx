import { useRef, useState, useEffect } from "react"

export default function Chat({socket}) { 
  const messageRef = useRef()
  const [messages, setMessages] = useState([])

  useEffect(() => {
    socket.on('receive_message', data => {
      setMessages((current) => [...current, data])
    })

    return () => socket.off('receive_message')
  }, [socket])

  const handleSubmit = () => {
    const message = messageRef.current.value
    if(!message.trim()) return

    socket.emit('send_message', message)
    clearInput()
  }

  const clearInput = () => {
    messageRef.current.value = ''
  }

  return (
    <div>
      <h1>Chat</h1>
      {
        messages.map((message, index) => (
          <p key={index}>{message.username}: {message.message}</p>
        ))
      }
      <input type="text" placeholder="Mensagem" ref={messageRef} />
      <button onClick={()=>handleSubmit()}>Enviar</button>
    </div>
  )
}