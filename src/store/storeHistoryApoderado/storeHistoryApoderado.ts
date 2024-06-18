import { create } from "zustand";

type Props = {
  openHistoryApoderado: boolean;
  setOpenHistoryApoderado: () => void;
};

export const storeHistoryApoderado = create<Props>((set, get) => ({
  openHistoryApoderado: false,
  setOpenHistoryApoderado() {
    const { openHistoryApoderado } = get();
    set({ openHistoryApoderado: !openHistoryApoderado });
  },
}));
