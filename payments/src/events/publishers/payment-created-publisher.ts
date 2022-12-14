import {
  PaymentCreatedEvent,
  Publisher,
  Subjects,
} from "@hblearningtickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
