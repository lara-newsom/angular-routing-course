import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, map, of, switchMap, tap } from 'rxjs';
import { Category, Pie } from '../models/pie';
import { PIES } from '../models/pie-data.mock';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PieService {
  private readonly selectedCategory = new BehaviorSubject<string>(Category.ALL);
  private readonly route = inject(ActivatedRoute);
  private readonly selectedPie = this.route.queryParamMap.pipe(
    map((params) => {
      console.log('params', params.get('productId'))
      return params.get('productId');
    })
  );

  readonly pies$ = of(PIES);
  readonly selectedCategory$ = this.selectedCategory.asObservable();

  readonly filteredPies$ = this.selectedCategory.pipe(
    switchMap((category) => this.pies$.pipe(
      map((pies) => {
        console.log('category', category)
        if(category === Category.ALL) {
          return pies;
        }

        return pies.filter((pie: Pie) => pie.category === category);
      }),
    ))
  )

  readonly selectedPie$ = this.selectedPie.pipe(switchMap((id) =>
    this.filteredPies$.pipe(
      map((pies) => {
        if(id){
          return pies.find((pie) => pie.id === id);
        }

        return undefined;
      })
    )));

  setSelectedCategory(category: string) {
    this.selectedCategory.next(category);
  }
}
