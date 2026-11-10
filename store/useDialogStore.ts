import { DIALOG_KEY } from "@/lib/dialog-key";
import { create } from "zustand";

export type DialogKey = (typeof DIALOG_KEY)[keyof typeof DIALOG_KEY]

interface DialogAction{
    openDialog: (value: DialogKey | null) => void;
    setDialogType: (value: string | null) => void;
}

interface DialogState {
    dialogKey: DialogKey | null;
    dialogType: string | null;
}

export const useDialogStore = create<DialogState & DialogAction>((set) => ({
    dialogKey: null,
    openDialog: (value: DialogKey | null) => (set({ dialogKey: value })),
    dialogType: null,
    setDialogType: (value: string | null) => set({dialogType: value})
}))