import { HasFormatter } from "../Interfaces/HasFormatter";

export class Private implements HasFormatter {
  constructor(
    public subject: string,
    public details: string,
    public amount: number
  ) {}
  format() {
    return `I went to ${this.subject} and I spent ${this.amount} euro for ${this.details}`;
  }
}
