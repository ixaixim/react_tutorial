import Header from './Header'
import Content from './Content'
import Footer from './Footer'

function App() {
  return (
    // note: this is JSX, not HTML
    // JSX: JavaScript XML
    // Doesn't have class attribute, instead uses className
    // Allows to write HTML-like syntax in JS
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
