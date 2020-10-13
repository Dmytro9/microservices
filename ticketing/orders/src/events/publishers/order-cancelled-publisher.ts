import { Publisher, Subjects, OrderCancelledEvent } from "@dimapol/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCanceled = Subjects.OrderCanceled;
}
