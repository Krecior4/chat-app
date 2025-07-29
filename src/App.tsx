import './App.css'

function App() {

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
          <input type="text" name="textInput" id="textInput" />
          <button>Send</button>
        </div>
      </div>
    </>
  )
}

export default App
