import DrawerUI from "./Drawer.presenter";
import { IDrawerUIProps } from "./Drawer.types";

export default function Drawer(props: IDrawerUIProps) {
  return <DrawerUI drawerRef={props.drawerRef} />;
}
