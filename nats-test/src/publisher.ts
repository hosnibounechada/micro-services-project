import nats, { Stan } from "node-nats-streaming";
import { Subjects } from "./events/subjects";
import { TicketCreatedPublisher } from "./events/ticket-created-publisher";
console.clear();
const stan = nats.connect("ticketing", "abc", {
  url: "http://localhost:4223",
});

stan.on("connect", async () => {
  console.log("Publisher connected to NATS!");
  const publisher = new TicketCreatedPublisher(stan);
  try {
    await publisher.publish({
      id: "123",
      title: "Concert",
      price: 25,
    });
  } catch (err) {
    console.error(err);
  }
});
