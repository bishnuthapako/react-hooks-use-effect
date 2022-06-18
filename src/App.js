import React, { useState, useEffect } from "react";

function App() {

  const [count, setCount]=useState(0)
  const [text, setText]=useState("")


  useEffect(() => {document.title=text
  }, [text]);

  useEffect(()=>setTimeout((count)=>setCount(0), 5000))


  console.log("Component rendering");

  return (<div>
    <button onClick={()=>setCount((count)=>count + 1)}>I have been clicked {count} times</button>
  <input type="text" onChange={(e)=>setText(e.target.value)} value={text} />
  </div>
  );
}

export default App;
