import { useState } from "react"

function App() {
  
  const [simbol, setSimbol] = useState('')

  return(
    <div>
      <form>
        <input type="text" placeholder="Enter aso" />
        <input type="text" placeholder="ramdenjer gameordes?" />
        <button>submit</button>
      </form>

      <div>
        <p>{simbol}</p>
      </div>
    </div>
  )
}

export default App
