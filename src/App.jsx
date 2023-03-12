import Main from './Components/Main'
import MainTop from './Components/MainTop'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div className='scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100'>
      <Navbar />
      <MainTop />
      <Main />
    </div>
  )
}

export default App
