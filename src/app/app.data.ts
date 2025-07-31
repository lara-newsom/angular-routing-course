import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PIES } from './models/pie-data.mock';

export class AppData implements InMemoryDbService {
  createDb() {
      const pies = PIES;
      return { pies }
  }
}
