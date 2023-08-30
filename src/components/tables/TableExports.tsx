import { useRaeeCalculator } from "../../hooks/storeRaeeCalculator";
import { CATEGORIES } from "../../constants/categories";

export default function TableExport() {
  const exports = useRaeeCalculator((state) => state.exports);

  return (
    <div className="relative overflow-x-auto sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 text-center" colSpan={10}>
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
            <th scope="col" className="px-6 py-3">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {exports &&
            Object.keys(exports).map((year, yearIndex) => (
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
                {Object.keys(exports[year]).map((cat, catIndex) => (
                  <td key={`cat-${catIndex}`} className="px-6 py-2">
                    {exports[year][cat].toFixed(2)}
                  </td>
                ))}
              </tr>
            ))}
          {!exports && (
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <th
                scope="row"
                colSpan={10}
                className="px-6 py-6 font-medium text-gray-500 whitespace-nowrap dark:text-white"
              >
                Sin datos de exportación
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}