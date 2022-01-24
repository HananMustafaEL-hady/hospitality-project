import { Owner } from "./owner.model";
import { Room } from "./rooms";
export interface Booking {
  status: string;
  isPaid: boolean;
  notes: string;
  endDate: string;
  startDate: string;
  room: Room;
  provider: Owner;
  client: Owner;
  createdAt: string;
  updatedAt: string;
  _id: string;
}

export interface BookingsPage {
  data: [Booking];
  limit: number;
  totalCount: number;
  currentPage: number;
  pageCount: number;
}
