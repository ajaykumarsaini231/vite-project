import Header from './Components/Header'
import Subheader from './Components/subheader'
import Footer from './Components/footer'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import './App.css'
import './index.css'
import Form from './Components/form'
function Home(){
    return<>
      <Header></Header>
    <Subheader></Subheader>
    <Form></Form>
    <Footer></Footer>  
    </>
}

export default Home;