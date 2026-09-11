import Banner from "./Component/Banner"

import Nav from "./Component/Nav"
import { Suspense, use, useState } from "react"
import Technology from "./Component/Technology"
import { ToastContainer } from "react-toastify"
import FooterC from "./Component/FooterC"


const datafetch = async () => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data;
}


function App() {

  const [dataPromise] = useState(() => datafetch())

  return (
    <>
      <ToastContainer />
      <Nav></Nav>

      <Banner></Banner>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Technology dataPromise={dataPromise}></Technology>
      </Suspense>

   <FooterC></FooterC>
    </>
  )
}

export default App
