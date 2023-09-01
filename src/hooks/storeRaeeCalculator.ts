import { create } from "zustand";
import type { ResultByYear } from "../utils/raee";

type Store = {
  count: number;
  inc: () => void;
  imports?: ResultByYear;
  exports?: ResultByYear;
};

export const useRaeeCalculatorStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

export const setImports = (imports?: ResultByYear) => {
  useRaeeCalculatorStore.setState({ imports });
};

export const setExports = (exports?: ResultByYear) => {
  useRaeeCalculatorStore.setState({ exports });
};

export const calculateNetResult = () => {
  const imports = useRaeeCalculatorStore.getState().imports;
  const exports = useRaeeCalculatorStore.getState().exports;
  if (imports && exports) {
    //
  }
};
