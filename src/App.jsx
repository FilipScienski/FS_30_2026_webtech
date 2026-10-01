import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";


function App() {

  function selectProduct(name) {
  console.log("Wybrany produkt: " + name);
}

  return (
    <>
      <Header />

      <main>
        <section>
        <Product name={"Telefon"} price={20} fn={selectProduct} />
        
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;