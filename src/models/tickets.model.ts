import {Entity, model, property} from '@loopback/repository';

@model()
export class Tickets extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  numId: string;

  @property({
    type: 'string',
    required: true,
  })
  codigo: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'boolean',
    required: true,
  })
  pref: boolean;

  @property({
    type: 'string',
    required: true,
  })
  fecha: string;


  constructor(data?: Partial<Tickets>) {
    super(data);
  }
}

export interface TicketsRelations {
  // describe navigational properties here
}

export type TicketsWithRelations = Tickets & TicketsRelations;
