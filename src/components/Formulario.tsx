import { validateRaeeFormat } from "../utils/raee";
import { readXLSX } from "../utils/xlsx";
import { setImports, setExports } from "../hooks/storeRaeeCalculator";

const onChangeImports = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.item(0);
  if (file) {
    if (file.name.endsWith(".xlsx")) {
      const data = await readXLSX(file);
      const raee = validateRaeeFormat(data);
      if (raee) {
        setImports(raee);
      }
    }
  }
};

const onChangeExports = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.item(0);
  if (file) {
    if (file.name.endsWith(".xlsx")) {
      const data = await readXLSX(file);
      const raee = validateRaeeFormat(data);
      if (raee) {
        setExports(raee);
      }
    }
  }
};

export default function Formulario() {
  return (
    <form
      className="flex gap-4 flex-col sm:flex-row"
      onSubmit={(e) => e.preventDefault()}
    >
      <section className="flex flex-col gap-2 w-full">
        <label
          htmlFor="file-input-importaciones"
          className="dark:text-blue-50 font-semibold"
        >
          Archivo de importaciones
        </label>
        <input
          type="file"
          name="file-input-importaciones"
          id="file-input"
          accept=".xls,.xlsx"
          className="block w-full border border-slate-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-400 file:border-0 file:bg-slate-200 file:mr-4 file:py-2 file:px-4 file:text-slate-600 dark:file:bg-slate-700 dark:file:text-slate-400 cursor-pointer"
          onChange={onChangeImports}
        />
      </section>
      <section className="flex flex-col gap-2 w-full">
        <label
          htmlFor="file-input-importaciones"
          className="dark:text-blue-50 font-semibold"
        >
          Archivo de exportaciones
        </label>
        <input
          type="file"
          name="file-input-exportaciones"
          id="file-input"
          accept=".xls,.xlsx"
          className="block w-full border border-slate-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-400 file:border-0 file:bg-slate-200 file:mr-4 file:py-2 file:px-4 file:text-slate-600 dark:file:bg-slate-700 dark:file:text-slate-400 cursor-pointer"
          onChange={onChangeExports}
        />
      </section>
    </form>
  );
}
