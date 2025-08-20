import MediasCard from "../MediaCard";

const pathImg = "/assets/img/cars/models/";

const models = [
  {
    id: 1,
    name: "A combustão",
    image: pathImg + "combustion.png",
    type: "gasolina",
  },
  {
    id: 2,
    name: "Híbrido",
    image: pathImg + "hybrid.png",
    type: "hibrido",
  },
  {
    id: 3,
    name: "Elétrico",
    image: pathImg + "eletric.png",
    type: "eletrico",
  },
];

export default function ModelsSection() {
  return <MediasCard items={models} path="/cars" title="Modelos" />;
}
