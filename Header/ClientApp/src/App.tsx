import React, { useEffect } from "react";
import { IMenuData } from "./MenuData";

export default function Root(props) {
  const [menuData, SetMenuData] = React.useState<IMenuData>();

  window.addEventListener('updateMenu', (eventData: CustomEvent<IMenuData>) => {
    SetMenuData(eventData.detail);
  })

  return <div>{menuData?.topMenuStructure.map(x => x.itemName).join()} </div>;
}
