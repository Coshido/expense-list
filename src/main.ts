import { Work } from "./Classes/work";
import { Private } from "./Classes/private";
import { HasFormatter } from "./Interfaces/HasFormatter";
import { ListTemplate } from "./Classes/ListTemplate";

// const form = document.querySelector('form')!;
// if we select an html element directly we need the ! or ts assume the variable can be null.
// if we select through class or id we need to cast the type
const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === "Work") {
    doc = new Work(...values);
  } else {
    doc = new Private(...values);
  }

  list.render(doc, type.value, "end");
});
