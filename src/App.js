import './App.css';
import About from "./components/About";
import Footer from "./components/Footer";
import Info from "./components/Info";
function App() {
  return (
      <>
          <main className="main">
              <section className="main__section">
                  <Info />
                  <About />
                  <Footer />
              </section>
          </main>
      </>
  );
}

export default App;
