import { Injectable } from '@angular/core';
import { BehaviorSubject, map, of, switchMap, tap } from 'rxjs';
import { Category, Pie } from '../models/pie';
import { PIES } from '../models/pie-data.mock';

@Injectable({
  providedIn: 'root'
})
export class PieService {
  private readonly selectedCategory = new BehaviorSubject<Category>(Category.ALL);
  private readonly selectedPie = new BehaviorSubject<number | undefined>(4);

  readonly pies$ = of(PIES);
  readonly selectedCategory$ = this.selectedCategory.asObservable();

  readonly filteredPies$ = this.selectedCategory.pipe(
    switchMap((category) => this.pies$.pipe(
      map((pies) => {
        if(category === Category.ALL) {
          return pies;
        }

        return pies.filter((pie: Pie) => pie.category === category);
      }),
      tap((pies) => this.setSelectedPie(pies[0].id))
    ))
  )

  readonly selectedPie$ = this.selectedPie.pipe(switchMap((number) =>
    this.pies$.pipe(
      map((pies) => {
        if(number){
          return pies.find((pie) => pie.id === number);
        }

        return undefined;
      })
    )));

  setSelectedPie(id: number) {
    this.selectedPie.next(id);
  }

  setSelectedCategory(category: Category) {
    this.selectedCategory.next(category);
  }
}
