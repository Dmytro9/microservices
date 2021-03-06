import { Subjects } from './subjects';

export interface OrderCancelledEvent {
  subject: Subjects.OrderCanceled;
  data: {
    id: string;
    version: number;
    ticket: {
      id: string;
    };
  };
}
