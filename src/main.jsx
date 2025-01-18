import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Header, GridContainer } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <GridContainer
      images={[
        { src: "/images/benz-s-class.jpg", name: "Mercedes-Benz S-Class " },
        { src: "/images/aston-martin-db12.jpg", name: "Aston Martin DB-12" },
        {
          src: "/images/bently-continental-gt.jpg",
          name: "Bentley-Continental-GT",
        },
        { src: "/images/Mercedes-Maybach.jpg", name: "Mercedes-Maybach" },
        { src: "/images/Jaguar-Ftype", name: "Jaguar F-Type " },
        { src: "/images/BMW-M8.jpg", name: "BMW-M8 " },
      ]}
    />
  </StrictMode>
);
