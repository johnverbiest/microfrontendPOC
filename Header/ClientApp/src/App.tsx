import React, { useEffect } from "react";
import { IMenuData } from "./MenuData";

export default function Root(props) {
  const [menuData, SetMenuData] = React.useState<IMenuData[]>([]);

  const event = new CustomEvent<IMenuData>('updateMenu', {
    detail: {
      serviceName: "header",
      topMenuStructure: [
        {
          itemName: "fixedMenuItem",
          itemLink: "/",
          itemOrder: 2
        }]
    }
  });

  React.useEffect(() => {
    setTimeout(() => window.dispatchEvent(event), 200);
  }, []);

  window.addEventListener('updateMenu', (eventData: CustomEvent<IMenuData>) => {
    const newMenu = menuData.filter(x => x.serviceName !== eventData.detail.serviceName);
    newMenu.push(eventData.detail);
    SetMenuData(newMenu);
  })

  const orderedItems = [].concat(...menuData.map(x => x.topMenuStructure)).sort((a, b) => a.itemOrder - b.itemOrder);
  console.log(orderedItems);
  return <div>{orderedItems.map(x => x.itemName + '             ')} </div>;
}
