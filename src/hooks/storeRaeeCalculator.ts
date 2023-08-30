import { create } from "zustand";
import type { ResultByYear } from "../utils/raee";

type Store = {
  count: number;
  inc: () => void;
  imports?: ResultByYear;
  exports?: ResultByYear;
};

export const useRaeeCalculator = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

export const setImports = (imports?: ResultByYear) => {
  useRaeeCalculator.setState({ imports });
};

export const setExports = (exports?: ResultByYear) => {
  useRaeeCalculator.setState({ exports });
};

export const calculateNetResult = () => {
  const imports = useRaeeCalculator.getState().imports;
  const exports = useRaeeCalculator.getState().exports;
  if (imports && exports) {
    //
  }
};
