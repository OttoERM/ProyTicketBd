import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ConnDataSource} from '../datasources';
import {Tickets, TicketsRelations} from '../models';

export class TicketsRepository extends DefaultCrudRepository<
  Tickets,
  typeof Tickets.prototype.id,
  TicketsRelations
> {
  constructor(
    @inject('datasources.conn') dataSource: ConnDataSource,
  ) {
    super(Tickets, dataSource);
  }
}
