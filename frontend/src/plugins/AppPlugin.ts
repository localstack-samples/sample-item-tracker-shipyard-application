import { LazyExoticComponent } from "react";
import { NavigationItem } from "../components/Navigation";

interface AppPlugin {
  navigationItem: NavigationItem;
  component: LazyExoticComponent<() => JSX.Element>;
}

export type { AppPlugin };
