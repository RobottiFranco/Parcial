import { Router } from "express";
import { Product } from "../interface/product";

const router = Router();

const products = [
  {
    id: 1,
    cost: 12,
    name: "lechuga",
    stock: 100,
    image:
      "https://es.wikipedia.org/wiki/Lactuca_sativa#/media/Archivo:Romaine_lettuce.jpg",
    description: "es una lechuga",
    images: [
      "https://es.wikipedia.org/wiki/Lactuca_sativa#/media/Archivo:Romaine_lettuce.jpg",
      "https://es.wikipedia.org/wiki/Lactuca_sativa#/media/Archivo:Romaine_lettuce.jpg",
    ],
  },
  /*     {
        id: 2,
        cost: 12,
        name: "lechuga",
        stock: 100,
        image: "https://es.wikipedia.org/wiki/Lactuca_sativa#/media/Archivo:Romaine_lettuce.jpg",
        description: "es una lechuga",
        images: ["https://es.wikipedia.org/wiki/Lactuca_sativa#/media/Archivo:Romaine_lettuce.jpg", "https://es.wikipedia.org/wiki/Lactuca_sativa#/media/Archivo:Romaine_lettuce.jpg"]
    } */
];

router.get("/", (req, res) => {
  let result: Product[] = products.map(({ id, cost, name, stock, image }) => ({
    id,
    cost,
    name,
    stock,
    image,
  }));
  res.send(result);
});

router.get("/:id", (req, res) => {
  if (!req.params.id || !parseInt(req.params.id)) {
    return res.status(400).send("invalid id");
  }

  const result = products.find(
    (product) => product.id === parseInt(req.params.id)
  );

  if (result) {
    res.send(result);
  } else {
    res.status(404).send("product not found");
  }
});

export default router;
