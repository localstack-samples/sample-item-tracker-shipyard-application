import create from "zustand";
import plugins from "../plugins/manifest";
import { AppPlugin } from "../plugins/AppPlugin";
import { GetStartedPluginComponent } from "../default-plugins/get-started-plugin";

interface AppState {
  appName: string;
  plugins: AppPlugin[];
}

const useStore = create<AppState>(() => ({
  appName: "LocalStack x Shipyard Sample App",
  plugins: [GetStartedPluginComponent, ...plugins],
}));

export type { AppState };
export { useStore };
