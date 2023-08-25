import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import SharedLayout from "./components/SharedLayout";
import { lazy, useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ShoesPage = lazy(() => import("./pages/ShoesPage/ShoesPage"));
const BasketPage = lazy(() => import("./pages/BasketPage/BasketPage"));

function App() {
  const [shoes, setShoes] = useState([]);
  const [aaaa, setAaaa] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    async function fetchData() {
      if (localStorage.getItem("my_shoes")) {
        setAaaa(JSON.parse(localStorage.getItem("my_shoes")));
      }
      try {
        const response = await axios.get("itemsData.json");
        const data = response.data;
        setShoes(data);
      } catch (error) {
        throw new Error(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const totalAll = aaaa.reduce((total, item) => {
      return total + item.price;
    }, 0);
    setTotal(totalAll);
  }, [aaaa, total]);

  const handleChangeAaaa = async (value) => {
    const newItem = {
      id: value.id + Date.now(),
      name: value.name,
      price: value.price,
      image: value.image,
    };
    await setAaaa((prev) => [...prev, newItem]);
    localStorage.setItem("my_shoes", JSON.stringify([...aaaa, newItem]));
  };

  const removeByIdItem = (id) => {
    if (aaaa.length >= 1) {
      const filteredArray = aaaa.filter((item) => item.id !== id);
      setAaaa(filteredArray);
      localStorage.setItem("my_shoes", JSON.stringify(filteredArray));
    }
  };
  const removeAll = async () => {
    await setTotal[0];
    setAaaa([]);
    localStorage.setItem("my_shoes", []);
  };

  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<SharedLayout total={total} />}>
          <Route index element={<HomePage />} />
          <Route
            path="/shoes"
            element={<ShoesPage array={shoes} onChange={handleChangeAaaa} />}
          />
          <Route
            path="/my-shoes"
            element={
              <BasketPage
                myItems={aaaa}
                total={total}
                removeItem={removeByIdItem}
                removeAll={removeAll}
              />
            }
          />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
