import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@hblearningtickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
