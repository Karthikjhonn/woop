import ProductCountContext from "./context/ProductCountContext";
import Mainroutes from "./routes/Mainroutes";

function App() {
  if (localStorage.getItem("cartItems") == null) {
    localStorage.setItem("cartItems", "[]");
  }

  return (
    <div>
      <ProductCountContext>
        <Mainroutes />
      </ProductCountContext>
    </div>
  );
}

export default App;
