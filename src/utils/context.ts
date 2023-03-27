import { createContext } from "react";
import { Svix } from "svix";
import { SVIX_ACCESS_KEY } from "./constants";

export const SVIX = new Svix(SVIX_ACCESS_KEY);

export const DEFAULT_CONTEXT = {
    svix: SVIX,
}

export interface AppContextProps {
    svix: Svix;
}

export const AppContext = createContext<AppContextProps>(DEFAULT_CONTEXT);
