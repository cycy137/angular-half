import {Injectable} from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl  = 'api/heroes';
  constructor(
    private http: HttpClient,
    private messageService: MessagesService) { }
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()){
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)), catchError(this.handleError<Hero[]>('searchHeroes', [])));
  }
  deltetHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`deltet hero id =${id}`)), catchError(this.handleError<Hero>('deletehero')));
  }
  getHeroNo404<Data>(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/?id=${id}`;
    return this.http.get<Hero[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Hero>(`getHero id=${id}`))
      );
  }

   updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions)
      .pipe(tap(_ => this.log(`updateHero id = ${hero.id})`)), catchError (this.handleError<any>('updateHero')));
  }
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
      .pipe(tap((newHero) => this.log(`add hero /w id = ${newHero.id}`)), catchError(this.handleError<Hero>('addHero')));
  }
   getHeroes(): Observable<Hero[]> {
    // this.messageService.add('HeroService: fetched heroes');
    console.log(this.http.get('api/heroes'));
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(tap(  _ => this.log('fetch heroes')), (catchError(this.handleError('getHeroes',[]))));
  }
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get<Hero>(url)
      .pipe(tap( _ =>  this.log(`fetched hero id=${id}`)), catchError(this.handleError<Hero>(`getHeroes ${id}`)));
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
      this.messageService.add(`HeroService: ${message}`);
    }
}

