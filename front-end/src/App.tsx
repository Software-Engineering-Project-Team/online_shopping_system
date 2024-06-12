// Code: Main App component that renders the NavBar, RootLayout, and Footer components.
import './App.css'
import NavBar from './layouts/NavBar'
import Footer from './layouts/Footer'
import RootLayout from './layouts/RootLayout'

function App() {
  return (
    <>
      <NavBar />
      <main>
        <RootLayout />
      </main>
      <Footer />
    </>
  )
}

export default App
