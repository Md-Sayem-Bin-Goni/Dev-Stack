import Banner from "./Component/Banner"
import Nav from "./Component/Nav"
import { Suspense,  useState } from "react"
import Technology from "./Component/Technology"
import { ToastContainer } from "react-toastify"
import Footer from "./Component/Footer"



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
      <Suspense fallback={<h2 className="container mx-auto text-2xl">Loading...</h2>}>
        <Technology dataPromise={dataPromise}></Technology>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
