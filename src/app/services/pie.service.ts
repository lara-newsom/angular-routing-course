import { Injectable } from '@angular/core';
import { BehaviorSubject, map, of, switchMap, tap } from 'rxjs';
import { Category, Pie } from '../models/pie';
import { PIES } from '../models/pie-data.mock';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class PieService {
  readonly pies$ = of(PIES);
  readonly piesSignal = toSignal(this.pies$, {initialValue: []});

  private readonly selectedCategory = new BehaviorSubject<string>(Category.ALL);
  readonly selectedCategory$ = this.selectedCategory.asObservable();

  private readonly selectedPie = new BehaviorSubject<string | undefined>(undefined);

  readonly filteredPies$ = this.selectedCategory.pipe(
    switchMap((category) => this.pies$.pipe(
      map((pies) => {
        if(category === Category.ALL) {
          return pies;
        }

        return pies.filter((pie: Pie) => pie.category === category);
      }),
    ))
  );
  readonly filteredPieSignal = toSignal(this.filteredPies$, {initialValue: []});

  readonly featuredPies$ = this.pies$.pipe(
    map((pies) => [pies[3], pies[6], pies[17]])
  );
  readonly featuredPiesSignal = toSignal(this.featuredPies$, {initialValue: []});

  readonly selectedPie$ = this.selectedPie.pipe(switchMap((id) =>
    this.filteredPies$.pipe(
      map((pies) => {
        if(id){
          return pies.find((pie) => pie.id === id) || pies[0];
        }

        return pies[0];
      })
    )));
  readonly selectedPieSignal = toSignal(this.selectedPie$);

  setSelectedCategory(category: string) {
    this.selectedCategory.next(category);
  }

  setSelectedPie(id: string) {
    this.selectedPie.next(id);
  }
}
