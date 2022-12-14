import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from "@hblearningtickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
