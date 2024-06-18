import { create } from "zustand";

interface Props {
  file: FormData | undefined;
  setFile: (file: FormData | undefined) => void;
}

export const storeFile = create<Props>((set) => ({
  file: undefined,
  setFile(file) {
    set({ file: file });
    return;
  },
}));
