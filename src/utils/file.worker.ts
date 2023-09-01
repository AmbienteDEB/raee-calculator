// excel-worker.js
import { validateRaeeFormat } from "./raee";
import { readXLSX } from "./xlsx";

self.addEventListener("message", async (event) => {
  const file = event.data.file;

  if (file.name.endsWith(".xlsx")) {
    const data = await readXLSX(file);
    const raee = validateRaeeFormat(data);

    self.postMessage(raee);
  }
});
