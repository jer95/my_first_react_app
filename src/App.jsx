import "./App.css";
export { Header, GridContainer };

function Header() {
  return <h1>Top Luxury Rentals</h1>;
}

function GridContainer({ images }) {
  return (
    <div className="grid-container">
      {images.map((image) => {
        return <CarImg image={image} />;
      })}
    </div>
  );
}
function CarImg({ image }) {
  console.log(image);
  return (
    <div className="main-container">
      <div
        className="img-container"
        style={{
          backgroundImage: `url(${image.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <CarName name={image.name} />
    </div>
  );
}

function CarName({ name }) {
  return <footer>{name}</footer>;
}
