import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Equity extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  symbol: string;

  @property({
    type: 'string',
    required: true,
  })
  series: string;

  @property({
    type: 'number',
    required: true,
  })
  open: number;

  @property({
    type: 'number',
    required: true,
  })
  high: number;

  @property({
    type: 'number',
    required: true,
  })
  low: number;

  @property({
    type: 'number',
    required: true,
  })
  close: number;

  @property({
    type: 'number',
    required: true,
  })
  last: number;

  @property({
    type: 'number',
    required: true,
  })
  prevclose: number;

  @property({
    type: 'number',
    required: true,
  })
  tottrdqty: number;

  @property({
    type: 'number',
    required: true,
  })
  tottrdval: number;

  @property({
    type: 'string',
    required: true,
  })
  timestamp: string;

  @property({
    type: 'number',
    required: true,
  })
  totaltrades: number;

  @property({
    type: 'string',
    required: true,
  })
  isin: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Equity>) {
    super(data);
  }
}

export interface EquityRelations {
  // describe navigational properties here
}

export type EquityWithRelations = Equity & EquityRelations;
