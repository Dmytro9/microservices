import { Publisher, Subjects, TicketUpdatedEvent } from '@dimapol/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
