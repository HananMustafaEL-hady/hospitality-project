import { Room } from "./rooms";
export interface Bookings {
  status: string;
  isPaid: boolean;
  notes: string;
  endDate: string;
  startDate: string;
  room: Room;
  provider: number;
  client: number;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface BookingsPage {
  data: [Bookings];
  limit: number;
  totalCount: number;
  currentPage: number;
  pageCount: number;
}
