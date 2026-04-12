const original = {
  name: "Alice",
  address: { city: "Bengaluru", pin: 560001 },
  hobbies: ["reading", "coding"],
  created: new Date()
};

const clone = structuredClone(original);

clone.address.city = "Mumbai";

console.log(original.address.city); // "Bengaluru"
console.log(clone.address.city);    // "Mumbai"
