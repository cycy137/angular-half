import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Hero} from './hero';

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HEROES} from './mock-heros';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

    createDb() {
      const heros = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
      ];
      return {heros};
      }
    genId(heros: Hero[]): number{
      return heros.length > 0 ? Math.max(...heros.map(hero => hero.id)) + 1 : 11;
    }


}
