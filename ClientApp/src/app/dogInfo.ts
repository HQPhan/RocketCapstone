// To parse this data:
//
//   import { Convert, DogInfo } from "./file";
//
//   const dogInfo = Convert.toDogInfo(json);

export interface DogInfo {
    name?:    string;
    coats?:   string[];
    colors?:  string[];
    genders?: string[];
    _links?:  Links;
}

export interface Links {
    self?:   Breeds;
    breeds?: Breeds;
}

export interface Breeds {
    href?: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toDogInfo(json: string): DogInfo {
        return JSON.parse(json);
    }

    public static dogInfoToJson(value: DogInfo): string {
        return JSON.stringify(value);
    }
}
