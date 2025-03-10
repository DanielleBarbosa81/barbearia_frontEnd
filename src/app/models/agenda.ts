import { Timestamp } from "rxjs";

export class Agenda {
  constructor(
    public id: number,
    public clienteId: number,
    public barbeiroId: number,
    public data: string,
    public time: string


  ){}
}
