import {
  Publisher,
  OrderCreatedEvent,
  Subjects,
} from "@hblearningtickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
