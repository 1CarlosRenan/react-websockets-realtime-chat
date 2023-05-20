import { useRef } from "react"

export default function Join({setChatVisibily}) {
  const usernameRef = useRef()

  const handleSubmit = () => {
    const username = usernameRef.current.value
    if(!username.trim()) return
    setChatVisibily(true)
  }
  return (
      <div>
        <h1>Join</h1>
        <input type="text" ref={usernameRef} placeholder="Nome de usuário" />
        <button onClick={() => handleSubmit()}>Entrar</button>
      </div>
  )
}