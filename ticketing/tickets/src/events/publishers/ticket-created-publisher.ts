import { Publisher, Subjects, TicketCreatedEvent } from '@dimapol/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
