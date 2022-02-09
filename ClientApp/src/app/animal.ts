// To parse this data:
//
//   import { Convert, Animals } from "./file";
//
//   const animals = Convert.toAnimals(json);

export interface Animals {
    data?:       Data;
    status?:     number;
    statusText?: string;
    headers?:    AnimalsHeaders;
    config?:     Config;
    request?:    Request;
}

export interface Config {
    transformRequest?:  TransformRe;
    transformResponse?: TransformRe;
    timeout?:           number;
    xsrfCookieName?:    string;
    xsrfHeaderName?:    string;
    maxContentLength?:  number;
    headers?:           ConfigHeaders;
    method?:            string;
    baseURL?:           string;
    params?:            Params;
    url?:               string;
}

export interface ConfigHeaders {
    Accept?:        string;
    Authorization?: string;
    "x-api-sdk"?:   string;
}

export interface Params {
    type?:  Type;
    breed?: Breed;
    page?:  number;
    limit?: number;
}

export enum Breed {
    AustralianShepherd = "Australian Shepherd",
    Beagle = "Beagle",
    Boxer = "Boxer",
    Chihuahua = "Chihuahua",
    Hound = "Hound",
    JackRussellTerrier = "Jack Russell Terrier",
    LabradorRetriever = "Labrador Retriever",
    Shepherd = "Shepherd",
    Terrier = "Terrier",
}

export enum Type {
    Dog = "Dog",
}

export interface TransformRe {
}

export interface Data {
    animals?:    Animal[];
    pagination?: Pagination;
}

export interface Animal {
    id?:                     number;
    organization_id?:        string;
    url?:                    string;
    type?:                   Type;
    species?:                Type;
    breeds?:                 Breeds;
    colors?:                 Colors;
    age?:                    Age;
    gender?:                 Gender;
    size?:                   Size;
    coat?:                   Coat | null;
    attributes?:             Attributes;
    environment?:            Environment;
    tags?:                   string[];
    name?:                   string;
    description?:            null | string;
    organization_animal_id?: null | string;
    photos?:                 Photo[];
    primary_photo_cropped?:  Photo | null;
    videos?:                 any[];
    status?:                 Status;
    status_changed_at?:      string;
    published_at?:           string;
    distance?:               null;
    contact?:                Contact;
    _links?:                 AnimalLinks;
}

export interface AnimalLinks {
    self?:         Next;
    type?:         Next;
    organization?: Next;
}

export interface Next {
    href?: string;
}

export enum Age {
    Adult = "Adult",
    Baby = "Baby",
    Senior = "Senior",
    Young = "Young",
}

export interface Attributes {
    spayed_neutered?: boolean;
    house_trained?:   boolean;
    declawed?:        null;
    special_needs?:   boolean;
    shots_current?:   boolean;
}

export interface Breeds {
    primary?:   Breed;
    secondary?: null | string;
    mixed?:     boolean;
    unknown?:   boolean;
}

export enum Coat {
    Long = "Long",
    Medium = "Medium",
    Short = "Short",
}

export interface Colors {
    primary?:   null | string;
    secondary?: Ary | null;
    tertiary?:  Ary | null;
}

export enum Ary {
    Black = "Black",
    BrownChocolate = "Brown / Chocolate",
    Golden = "Golden",
    WhiteCream = "White / Cream",
    YellowTanBlondFawn = "Yellow / Tan / Blond / Fawn",
}

export interface Contact {
    email?:   null | string;
    phone?:   null | string;
    address?: Address;
}

export interface Address {
    address1?: null | string;
    address2?: null | string;
    city?:     string;
    state?:    string;
    postcode?: string;
    country?:  Country;
}

export enum Country {
    CA = "CA",
    Us = "US",
}

export interface Environment {
    children?: boolean | null;
    dogs?:     boolean | null;
    cats?:     boolean | null;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
}

export interface Photo {
    small?:  string;
    medium?: string;
    large?:  string;
    full?:   string;
}

export enum Size {
    Large = "Large",
    Medium = "Medium",
    Small = "Small",
}

export enum Status {
    Adoptable = "adoptable",
}

export interface Pagination {
    count_per_page?: number;
    total_count?:    number;
    current_page?:   number;
    total_pages?:    number;
    _links?:         PaginationLinks;
}

export interface PaginationLinks {
    next?: Next;
}

export interface AnimalsHeaders {
    "cache-control"?:  string;
    "content-length"?: string;
    "content-type"?:   string;
}

export interface Request {
    __zone_symbol__xhrSync?:                 boolean;
    __zone_symbol__xhrURL?:                  string;
    __zone_symbol__readystatechangefalse?:   ZoneSymbol[];
    __zone_symbol__errorfalse?:              ZoneSymbol[];
    __zone_symbol__timeoutfalse?:            ZoneSymbol[];
    __zone_symbol__xhrScheduled?:            boolean;
    __zone_symbol__xhrErrorBeforeScheduled?: boolean;
    __zone_symbol__xhrTask?:                 ZoneSymbol;
}

export interface ZoneSymbol {
    type?:     string;
    state?:    string;
    source?:   string;
    zone?:     string;
    runCount?: number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toAnimals(json: string): Animals {
        return JSON.parse(json);
    }

    public static animalsToJson(value: Animals): string {
        return JSON.stringify(value);
    }
}
