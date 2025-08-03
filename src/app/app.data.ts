import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PIES } from './models/pie-data.mock';
import { USERS } from './models/user-data.mock';

export class AppData implements InMemoryDbService {
  createDb() {
      const pies = PIES;
      const users = USERS;
      return { pies, users }
  }
}
