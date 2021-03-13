// import HeaderBlock from "./components/HeaderBlock"
import Header from "./components/Header"
import Layout from "./components/Layout"
import Footer from "./components/Footer"
import bg1 from "./assets/bg1.jpg"
import bg2 from "./assets/bg2.jpg"
// import { ReactComponent as ReactBg3 } from "./assets/bg3.jpg"
const App = () => {
  return (
    <>
      <Header title="Hello every body" descr="Time to change the World" />
      <Layout title="FIRST COMPONENT" descr="Describe first Layout" urlBg={bg1} />
      <Layout title="SECOND COMPONENT" descr="Describe second Layout" colorBg={"red"} />
      <Layout title="THIRD COMPONENT" descr="Describe third Layout" urlBg={bg2} />
      <Footer />

    </>
  )
}
//  <HeaderBlock title="This is new Title"
// descr="this is new description!"
// />

export default App;
