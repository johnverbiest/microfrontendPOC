
export interface IMenuStructure {
    itemName: string;
    itemLink: string;
    itemOrder: number;
}

export interface IMenuData {
    serviceName: string;
    topMenuStructure: IMenuStructure[];
}