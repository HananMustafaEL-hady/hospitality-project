import { image, OwnerImage } from "./image.model";

export interface Owner {
  stripeCustomerId: string;
  roomCount: number;
  email: string;
  name: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
  id: number;
  profileImage: OwnerImage;
}
