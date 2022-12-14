import {
  Listener,
  OrderStatus,
  PaymentCreatedEvent,
  Subjects,
} from "@hblearningtickets/common";
import { Message } from "node-nats-streaming";
import { Order } from "../../models/order";
import { queueGroupName } from "./queue-group-name";

export class PaymentCreatedListener extends Listener<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
  queueGroupName: string = queueGroupName;
  async onMessage(data: PaymentCreatedEvent["data"], msg: Message) {
    const order = await Order.findOne({
      _id: data.id,
    });
    if (!order) throw new Error("Order not found");
    order.set({
      status: OrderStatus.complete,
    });
    await order.save();

    msg.ack();
  }
}
