import { useRaeeCalculatorStore } from "../../hooks/storeRaeeCalculator";
import { CATEGORIES } from "../../constants/categories";

export default function TableTotal() {
  const imports = useRaeeCalculatorStore((state) => state.imports);
  const exports = useRaeeCalculatorStore((state) => state.exports);

  return (
    <div className="relative overflow-x-auto sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-center" colSpan={9}>
              Categorías
            </th>
          </tr>
          <tr>
            <th scope="col" className="px-6 py-3">
              Año
            </th>
            {CATEGORIES.map((cat, index) => (
              <th key={`h-cat-${index}`} scope="col" className="px-6 py-3">
                {cat.category}
              </th>
            ))}
            <th scope="col" className="px-6 py-3">
              Otro
            </th>
          </tr>
        </thead>
        <tbody>
          {imports &&
            exports &&
            Object.keys(imports).map((year, yearIndex) => (
              <tr
                key={`year-${yearIndex}`}
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {year}
                </th>
                {Object.keys(imports[year]).map((cat, catIndex) => (
                  <td key={`cat-${catIndex}`} className="px-6 py-2">
                    {(imports[year][cat] - exports[year][cat]).toFixed(2)}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
