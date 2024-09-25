import './App.css'
import Navbar from './components/Navbar/Navbar'
import Sectionone from './pages/sectionone/Sectionone'
import Sectiontwo from './pages/sectiontwo/Sectiontwo'
import Sectionthree from './pages/sectionthree/Sectionthree'
import Sectionfour from './pages/sectionfour/Sectionfour'


function App() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid whole_page_container">
        <div className="row  flex-column">
        
          <Sectionone />
          <Sectiontwo />
          <Sectionthree />
          <Sectionfour />
    
        </div>
      </div>
    </div>
  )
}

export default App
