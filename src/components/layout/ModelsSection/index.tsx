import MediasCard from "../MediaCard";

const pathImg = "/public/assets/img/cars/models/";

const models = [
  {
    id: 1,
    name: "A combustão",
    image: pathImg + "combustion.png",
  },
  {
    id: 2,
    name: "Híbrido",
    image: pathImg + "hybrid.png",
  },
  {
    id: 3,
    name: "Elétrico",
    image: pathImg + "eletric.png",
  },
];

export default function ModelsSection() {
  return <MediasCard items={models} path="/models" title="Modelos" />;
}
