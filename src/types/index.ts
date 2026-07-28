export interface Stat {
  value: string;
  label: string;
}

export interface Award {
  title: string;
  org: string;
  note: string;
}

export interface MediaCard {
  title: string;
  description: string;
  image: string;
}

export interface VideoCard {
  title: string;
  address: string;
  poster: string;
}

export interface Property {
  price: string;
  address: string;
  beds?: number;
  baths?: number;
  sqft?: string;
  image: string;
  status?: string;
  mls?: string;
}

export interface Neighborhood {
  name: string;
  image: string;
}

export interface NavItem {
  label: string;
  children?: { label: string; href: string }[];
}
