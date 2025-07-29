import { useEffect, useState } from 'react'
import supabase from './utilities/supabase'
import './App.css'
import { v4 as uuid } from 'uuid'

function App() {
  const [textInput, setTextInput] = useState<string>("")
  const [userId, setUserId] = useState<string>("")

  useEffect(() => {
    const id = localStorage.getItem('userId')
    if (!id) {
      const userGeneratedId: string = uuid()
      localStorage.setItem('userId', userGeneratedId)
      setUserId(userGeneratedId)
    }

    setUserId(String(id))
  }, [])

  async function sendMessage() {
    await supabase
    .from('messages')
    .insert({
        author: userId,
        content: textInput
      })
    .select()

    setTextInput("")
  }

  return (
    <>
      <div className="chatWindow">
        <div className="message">
          <div className="header">
            <small className="author">Anon</small>
            <small className="date">29.07.2025 14:32</small>
          </div>
          <p className="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, eaque.</p>
        </div>
        <div className="chatInput">
          <input type="text" name="textInput" id="textInput" onChange={(e) => {setTextInput(e.target.value)}} value={textInput} />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </>
  )
}

export default App
