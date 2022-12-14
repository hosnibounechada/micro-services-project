import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from "@hblearningtickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
