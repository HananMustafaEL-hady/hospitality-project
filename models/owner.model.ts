import { image, OwnerImage } from "./image.model";
import { Room } from "./rooms";

export interface Owner {
  stripeCustomerId: string;
  roomCount: number;
  email: string;
  name: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  _id: number;
  profileImage: OwnerImage;
  favourites: [Room];
}
