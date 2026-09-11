import Banner from "./Component/Banner"

import Nav from "./Component/Nav"
import { Suspense, use, useState } from "react"
import Technology from "./Component/Technology"


const datafetch = async () => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data;
}


function App() {

  const [dataPromise] = useState(() => datafetch())

  return (
    <>
      <Nav></Nav>
      
      <Banner></Banner>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Technology dataPromise={dataPromise}></Technology>
      </Suspense>
    </>
  )
}

export default App
