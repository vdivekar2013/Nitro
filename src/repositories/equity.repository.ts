import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NitroDataSource} from '../datasources';
import {Equity, EquityRelations} from '../models';

export class EquityRepository extends DefaultCrudRepository<
  Equity,
  typeof Equity.prototype.symbol,
  EquityRelations
> {
  constructor(
    @inject('datasources.nitro') dataSource: NitroDataSource,
  ) {
    super(Equity, dataSource);
  }
}
