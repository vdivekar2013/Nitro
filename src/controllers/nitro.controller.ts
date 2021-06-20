import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Equity} from '../models';
import {EquityRepository} from '../repositories';

export class NitroController {
  constructor(
    @repository(EquityRepository)
    public equityRepository : EquityRepository,
  ) {}

  @post('/nitrohub-equities')
  @response(200, {
    description: 'Equity model instance',
    content: {'application/json': {schema: getModelSchemaRef(Equity)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Equity, {
            title: 'NewEquity',
            
          }),
        },
      },
    })
    equity: Equity,
  ): Promise<Equity> {
    return this.equityRepository.create(equity);
  }

  @get('/nitrohub-equities/count')
  @response(200, {
    description: 'Equity model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Equity) where?: Where<Equity>,
  ): Promise<Count> {
    return this.equityRepository.count(where);
  }

  @get('/nitrohub-equities')
  @response(200, {
    description: 'Array of Equity model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Equity, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Equity) filter?: Filter<Equity>,
  ): Promise<Equity[]> {
    return this.equityRepository.find(filter);
  }

  @patch('/nitrohub-equities')
  @response(200, {
    description: 'Equity PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Equity, {partial: true}),
        },
      },
    })
    equity: Equity,
    @param.where(Equity) where?: Where<Equity>,
  ): Promise<Count> {
    return this.equityRepository.updateAll(equity, where);
  }

  @get('/nitrohub-equities/{id}')
  @response(200, {
    description: 'Equity model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Equity, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Equity, {exclude: 'where'}) filter?: FilterExcludingWhere<Equity>
  ): Promise<Equity> {
    return this.equityRepository.findById(id, filter);
  }

  @patch('/nitrohub-equities/{id}')
  @response(204, {
    description: 'Equity PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Equity, {partial: true}),
        },
      },
    })
    equity: Equity,
  ): Promise<void> {
    await this.equityRepository.updateById(id, equity);
  }

  @put('/nitrohub-equities/{id}')
  @response(204, {
    description: 'Equity PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() equity: Equity,
  ): Promise<void> {
    await this.equityRepository.replaceById(id, equity);
  }

  @del('/nitrohub-equities/{id}')
  @response(204, {
    description: 'Equity DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.equityRepository.deleteById(id);
  }
}
