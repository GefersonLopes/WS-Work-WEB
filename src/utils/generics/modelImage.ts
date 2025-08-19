const IMG_PATH = "/public/assets/img/cars/";

function normalize(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const ALIAS_TO_FILE: Array<[string, string]> = [
  ["range rover", "range rover.png"],
  ["panamera", "panamera.png"],
  ["cayenne", "cayenne.png"],
  ["macan", "macan.png"],
  ["911", "911.png"],
  ["1500", "1500.png"],
  ["civic", "civic.png"],
  ["corolla", "corolla.png"],
  ["defender", "defender.png"],
  ["i4", "i4.png"],
  ["m2", "m2.png"],
  ["mustang", "mustang.png"],
  ["ranger", "ranger.png"],
  ["rs6", "rs6.png"],
  ["seal", "seal.png"],
  ["sw4", "sw4.png"],
  ["x6", "x6.png"],
];

export function getModelImage(
  nomeModelo: string,
  fallback: string = "placeholder.png",
) {
  const key = normalize(nomeModelo);

  for (const [alias, file] of ALIAS_TO_FILE) {
    if (key === alias) return `${IMG_PATH}${file}`;
  }

  for (const [alias, file] of ALIAS_TO_FILE) {
    if (key.includes(alias)) return `${IMG_PATH}${file}`;
  }

  return `${IMG_PATH}${fallback}`;
}
