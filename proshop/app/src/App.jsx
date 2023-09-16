import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ProductList } from "./components/Product/ProductList";

const products = [
  {
    id: "p1",
    name: "Baseball",
    description: "A baseball to throw and hit.",
    price: 9.99,
    imageUrl: "baseball.png",
  },
  {
    id: "p2",
    name: "Baseball Glove",
    description: "A baseball glove to play catch with.",
    price: 149.99,
    imageUrl: "baseball-glove.png",
  },
  {
    id: "p3",
    name: "Baseball bat",
    description: "A baseball bat hit balls with.",
    price: 99.99,
    imageUrl: "baseball-bat.png",
  },
];

const App = () => {
  return (
    <div>
      <Header></Header>
      <main>
        <ProductList products={products} showImages={false}></ProductList>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default App;
