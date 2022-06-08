import { LegacyRef } from "react";

export interface IDrawerUIProps {
  drawerRef: LegacyRef<HTMLButtonElement> | undefined;
}

export interface IDrawerStylesProps {
  isPro?: Boolean;
}
