import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export interface ClickedButton {
  message: string;
  index: number;
}

// array 의 array는 어떻게 선언하는지 몰라서,
// array array를 array<object>로 선언한거 몇개 있음. 확인필요
// export interface FetchModel {
//   convenience: Object;
//   convenienceDetails: Array<Object>;
//   description: string;
//   design: Object;
//   designDetailDetails: Array<Object>;
//   designDetails: Array<Object>;
//   eco: Object;
//   hStation: Object;
//   highlight: Object;
//   highlightDetails: Array<Object>;
//   id: string;
//   main_img: string;
//   modelCategory: Object;
//   name_en: string;
//   name_ko: string;
//   price: number;
//   safety: Object;
//   safetyDetails: Array<Object>;
//   service: Object;
//   serviceNetwork: Object;
//   space: Object;
//   spaceDetailDetails: Array<Object>;
//   spaceDetails: Array<Object>;
//   vr: Object;
//   vrDetails: Array<Object>;
// }

export interface FetchModel {
  convenience: any;
  convenienceDetails: any;
  description: any;
  design: any;
  designDetailDetails: any;
  designDetails: any;
  eco: any;
  hStation: any;
  highlight: any;
  highlightDetails: any;
  id: any;
  main_img: any;
  modelCategory: any;
  name_en: any;
  name_ko: any;
  price: any;
  safety: any;
  safetyDetails: any;
  service: any;
  serviceNetwork: any;
  space: any;
  spaceDetailDetails: any;
  spaceDetails: any;
  vr: any;
  vrDetails: any;
}

interface IFetchModel {
  fetchModel: FetchModel;
}

export const clickedButtonAtom = atom<ClickedButton>({
  key: "clickedButton",
  default: {} as any,
});

export const isUserAtom = atom({
  key: "isUser",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
