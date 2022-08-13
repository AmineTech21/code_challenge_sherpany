import { createContext } from "react";

interface FilterContextInterface {
    filter: string;
    setFilter: (active: string) => void;
}


export const FilterNatContext = createContext<FilterContextInterface | null>(null);
