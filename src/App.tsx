import StarsCanvas from './components/Stars'
import Home from './views/Home'

function App() {
  return (
    <div>
      <Home />
      <StarsCanvas />
      <a href='mailto:contact@auradating.in'>
          <div className='md:fixed bottom-4 right-4 text-foreground text-center mb-4 md:mb-0'>
          Contact Us 💌
        </div>
      </a>
    </div>
  )
}

export default App
