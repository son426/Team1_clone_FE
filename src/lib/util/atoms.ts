import { atom } from "recoil";
export interface ClickedButton {
  message: string;
  index: number;
}
export interface FetchModel {
  item: any;
}

export const clickedButtonAtom = atom<ClickedButton>({
  key: "clickedButton",
  default: {} as any,
});

export const fetchModelAtom = atom<FetchModel>({
  key: "fetchModel",
  default: {} as any,
});
