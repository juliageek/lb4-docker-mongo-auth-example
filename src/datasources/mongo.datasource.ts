import {LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  'name': 'mongo',
  'connector': 'mongodb',
  'url': `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/test_db`,
  'useNewUrlParser': true,
  'useUnifiedTopology': true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
export class MongoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongo';
  static readonly defaultConfig = config;

  constructor(
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
