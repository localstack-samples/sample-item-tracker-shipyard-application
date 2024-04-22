import { SideNavigationProps } from "@cloudscape-design/components";
import { lazy } from "react";

const ItemTracker = {
  navigationItem: {
    text: "Item Tracker",
    href: "/item_tracker",
    type: "expandable-link-group",
    items: [
      {
        type: "link",
        text: "LocalStack Docs",
        href: "https://docs.localstack.cloud",
        external: true,
      },
      {
        type: "link",
        text: "Shipyard Docs",
        href: "https://docs.shipyard.build/docs/",
        external: true,
      }
    ],
  } as SideNavigationProps.ExpandableLinkGroup,
  component: lazy(() => import("./ItemTrackerComponent")),
};

export { ItemTracker };
