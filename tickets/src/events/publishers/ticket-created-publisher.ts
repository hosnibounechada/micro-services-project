import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from "@hblearningtickets/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
