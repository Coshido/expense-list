import { Work } from "./Classes/work";
import { Private } from "./Classes/private";
import { HasFormatter } from "./Interfaces/HasFormatter";

// const form = document.querySelector('form')!;
// if we select an html element directly we need the ! or ts assume the variable can be null.
// if we select through class or id we need to cast the type
const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "Work") {
    doc = new Work(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Private(tofrom.value, details.value, amount.valueAsNumber);
  }

  console.log(doc);
});
