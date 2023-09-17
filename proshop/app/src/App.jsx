import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ProductList } from "./components/Product/ProductList";
import Container from "react-bootstrap/Container";

const products = [
  {
    id: "p1",
    name: "Baseball",
    description: "A baseball to throw and hit.",
    price: 9.99,
    imageUrl: "baseball.png",
    rating: 4.0,
  },
  {
    id: "p2",
    name: "Baseball Glove",
    description: "A baseball glove to play catch with.",
    price: 149.99,
    imageUrl: "baseball-glove.png",
    rating: 3.7,
  },
  {
    id: "p3",
    name: "Baseball bat",
    description: "A baseball bat hit balls with.",
    price: 99.99,
    imageUrl: "baseball-bat.png",
    rating: 4.8,
  },
  {
    id: "p4",
    name: "Baseball shoes",
    description: "Turf shoes.",
    price: 119.99,
    imageUrl: "baseball-shoes.png",
  },
];

const App = () => {
  return (
    <Container>
      <Header></Header>
      <main>
        <ProductList products={products} showImages={false}></ProductList>
      </main>
      <Footer></Footer>
    </Container>
  );
};

export default App;
