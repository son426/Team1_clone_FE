import { atom } from "recoil";
export interface ClickedButton {
  message: string;
  index: number;
}

export const clickedButtonAtom = atom<ClickedButton>({
  key: "clickedButton",
  default: {} as any,
});
