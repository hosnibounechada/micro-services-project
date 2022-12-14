import { Ticket } from "../ticket";

it("implements optimistic concurrency control", async () => {
  // create an instance of a ticket
  const ticket = Ticket.build({
    title: "Concert",
    price: 20,
    userId: "123",
  });
  // save the ticket to the database
  await ticket.save();

  // fetch the ticket twice
  const firstInstance = await Ticket.findById(ticket.id);
  const secondInstance = await Ticket.findById(ticket.id);

  // make two separate changes to the ticket we fetched
  firstInstance!.set({ price: 50 });
  secondInstance!.set({ price: 70 });

  // save the first fetched ticket
  await firstInstance!.save();

  try {
    // save the second fetched ticket and expect an error
    await secondInstance!.save();
  } catch (err) {
    return;
  }
  throw new Error("Should not reach this point");
});

it("increment the version number on multiple saves", async () => {
  const ticket = Ticket.build({
    title: "Concert",
    price: 20,
    userId: "123",
  });

  await ticket.save();
  expect(ticket.version).toEqual(0);

  await ticket.save();
  expect(ticket.version).toEqual(1);

  await ticket.save();
  expect(ticket.version).toEqual(2);
});
