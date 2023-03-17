import { HasFormatter } from "../Interfaces/HasFormatter";

export class Work implements HasFormatter {
  constructor(
    public subject: string,
    public details: string,
    public amount: number
  ) {}
  format() {
    return `I went to ${this.subject} and I spent ${this.amount} for ${this.details}`;
  }
}
