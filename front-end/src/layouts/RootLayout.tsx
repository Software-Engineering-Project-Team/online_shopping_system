import ReactLogo from '../assets/react.svg'; // adjust the path to your actual React.svg file

function RootLayout() {
  return (
    <>
      <main>
        {/* Main content goes here */}
        <img src={ReactLogo} alt="React Logo" />
        <h1>React.JS</h1>
      </main>
    </>
  )
}

export default RootLayout