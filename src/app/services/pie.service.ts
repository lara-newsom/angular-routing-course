import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, map, of, switchMap, tap } from 'rxjs';
import { Category, Pie } from '../models/pie';
import { PIES } from '../models/pie-data.mock';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class PieService {
  private readonly selectedCategory = new BehaviorSubject<string>(Category.ALL);
  private readonly route = inject(ActivatedRoute);
  private readonly selectedPie = this.route.queryParamMap.pipe(
    map((params) => {
      return params.get('productId');
    })
  );

  readonly pies$ = of(PIES);
  readonly piesSignal = toSignal(this.pies$, {initialValue: []});

  readonly selectedCategory$ = this.selectedCategory.asObservable();

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

  readonly selectedPie$ = this.selectedPie.pipe(switchMap((id) =>
    this.filteredPies$.pipe(
      map((pies) => {
        if(id){
          return pies.find((pie) => pie.id === id);
        }

        return undefined;
      })
    )));
  readonly selectedPieSignal = toSignal(this.selectedPie$);

  setSelectedCategory(category: string) {
    this.selectedCategory.next(category);
  }
}
