import { CATEGORIES } from "../constants/categories";

const ROW_TITLE = 0;
const ROW_YEARS = 1;
const ROW_HEADERS = 2;

const COL_COD = 0;
const COL_COD_DESCRIPTION = 1;
const COL_COUNTRY = 2;

type CategoryCode = string;
type ResultByCategory = Record<CategoryCode, number>;
type Year = string;
export type ResultByYear = Record<Year, ResultByCategory>;

export const validateRaeeFormat = (data: unknown) => {
  if (!Array.isArray(data)) return false;

  const ROW_TOTAL = data.length - 1;

  const omitedRows = new Set([ROW_TITLE, ROW_YEARS, ROW_HEADERS, ROW_TOTAL]);
  const omitedCols = new Set([COL_COD, COL_COD_DESCRIPTION, COL_COUNTRY]);

  let result: ResultByYear = initializeValues(data[ROW_YEARS]);

  data.forEach((row, index) => {
    if (!Array.isArray(row)) return false;
    if (!omitedRows.has(index)) {
      console.log(`raee ${index - 2}`, row);
      row.forEach((col, index) => {
        if (!omitedCols.has(index)) {
          const year = data[ROW_YEARS][index];
          const category = getCategoryFromCod(row[COL_COD].replace(" ", ""));
          result[year][category] += parseFloat(col);
          // result[year]["total"] += parseFloat(col);
          console.log(`col-${index}`, col);
        }
      });
    } else if (index === ROW_YEARS) {
      console.log("years", row);
      result = initializeValues(row);
    } else if (index === ROW_HEADERS) {
      console.log("headers", row);
    }
  });

  for (const year in result) {
    let categoryTotal = 0;
    for (const category in result[year]) {
      categoryTotal += result[year][category];
    }
    console.log(year, categoryTotal);
  }

  console.log("result", result);
  return result;
};

const initializeValues = (years: string[]) => {
  const initialValuesByCategory: ResultByCategory = {};
  CATEGORIES.forEach((cat) => {
    initialValuesByCategory[cat.category] = 0;
  });

  const initialValues: ResultByYear = {};

  years.forEach((year) => {
    initialValues[year] = {
      ...initialValuesByCategory,
      default: 0,
      total: 0,
    };
  });

  return initialValues;
};

const getCategoryFromCod = (tariffCode: string) => {
  let result: string = "default";

  CATEGORIES.forEach((category) => {
    category.cods.forEach((cod) => {
      if (tariffCode.includes(cod)) {
        result = category.category;
      }
    });
  });
  return result;
};
