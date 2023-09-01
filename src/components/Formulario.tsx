import { validateRaeeFormat } from "../utils/raee";
import { readXLSX } from "../utils/xlsx";
import {
  useRaeeCalculatorStore,
  setImports,
  setExports,
} from "../hooks/storeRaeeCalculator";
import { useToast } from "./ui/use-toast";

const FileInputImports = () => {
  const { toast } = useToast();
  const imports = useRaeeCalculatorStore((state) => state.imports);
  const exports = useRaeeCalculatorStore((state) => state.exports);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);
    if (file) {
      if (file.name.endsWith(".xlsx")) {
        // console.log("Reading file...", new Date());
        toast({
          title: "Leyendo documento de importaciónes",
        });
        const data = await readXLSX(file);
        // console.log("Validating data...", new Date());
        toast({
          title: "Validando información",
        });
        const raee = validateRaeeFormat(data);
        if (raee) {
          // console.log("Showing results...", new Date());
          toast({
            title: "Cálculos realizados para importaciones",
          });
          setImports(raee);
          if (imports && exports) {
            toast({
              title: "Cálculos realizados",
            });
          }
        } else {
          toast({
            title: "La información no pudo ser procesada",
            variant: "destructive",
          });
        }
      }
    }
  };

  return (
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
        accept=".xlsx"
        className="block w-full border border-slate-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-400 file:border-0 file:bg-slate-200 file:mr-4 file:py-2 file:px-4 file:text-slate-600 dark:file:bg-slate-700 dark:file:text-slate-400 cursor-pointer file:cursor-pointer"
        onChange={onChange}
      />
    </section>
  );
};

const FileInputExports = () => {
  const { toast } = useToast();
  const imports = useRaeeCalculatorStore((state) => state.imports);
  const exports = useRaeeCalculatorStore((state) => state.exports);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);
    if (file) {
      if (file.name.endsWith(".xlsx")) {
        toast({
          title: "Leyendo documento de exportaciones",
        });
        const data = await readXLSX(file);
        toast({
          title: "Validando información",
        });
        const raee = validateRaeeFormat(data);
        if (raee) {
          toast({
            title: "Cálculos realizados para exportaciones",
          });
          setExports(raee);
          if (imports && exports) {
            toast({
              title: "Cálculos realizados",
            });
          }
        } else {
          toast({
            title: "La información no pudo ser procesada",
            variant: "destructive",
          });
        }
      }
    }
  };

  return (
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
        accept=".xlsx"
        className="block w-full border border-slate-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-400 file:border-0 file:bg-slate-200 file:mr-4 file:py-2 file:px-4 file:text-slate-600 dark:file:bg-slate-700 dark:file:text-slate-400 cursor-pointer file:cursor-pointer"
        onChange={onChange}
      />
    </section>
  );
};

export default function Formulario() {
  return (
    <form
      className="flex gap-4 flex-col sm:flex-row"
      onSubmit={(e) => e.preventDefault()}
    >
      <FileInputImports />
      <FileInputExports />
    </form>
  );
}
