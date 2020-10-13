import { Publisher, OrderCreatedEvent, Subjects } from "@dimapol/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
