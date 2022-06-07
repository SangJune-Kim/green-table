import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});

export const accessTokenState = atom({
  key: "accessToken",
  default: "",
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
