import * as XSLX from "xlsx";

export const readXLSX = async (file: File) => {
  const data = await file.arrayBuffer();

  const workbook = XSLX.read(data);
  const dataFromSheet = XSLX.utils.sheet_to_json(
    workbook.Sheets[workbook.SheetNames[0]],
    { header: 1 }
  );
  return dataFromSheet;
};
