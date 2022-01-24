export interface NotificationProps {
  createdAt: string;
  _id: string;
  text: string;
  updatedAt: string;
  user: number;
}

export interface Notificationpage {
  data: [NotificationProps];
  limit: number;
  totalCount: number;
  currentPage: number;
  pageCount: number;
}
