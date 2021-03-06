import { Service } from "./services.model";
import { Owner } from "./owner.model";
import { image } from "./image.model";

export interface Room {
  item: any;
  services: [Service];
  owner: Owner;
  location: { coordinates: [number]; type: string };
  verified: boolean;
  images: image[];
  nightPrice: number;
  capacity: number;
  description: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  _id: string;
  bookingid?: string;
  busy: boolean;
  isFavourite: boolean;
}

export interface Roomspage {
  data: [Room];
  limit: number;
  totalCount: number;
  currentPage: number;
  pageCount: number;
}
