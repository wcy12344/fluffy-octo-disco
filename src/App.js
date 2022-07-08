import React from "react"
import Son from "./components/Son"

export let xxx = React.createContext({name:"zs"})
export default function App() {
  
  return (
    <div>
      <xxx.Provider value={123}>
        <Son />
      </xxx.Provider>
    </div>
  )
}
