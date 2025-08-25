import { computed, inject, Injectable, signal } from '@angular/core';
import { Category, Pie } from '../models/pie';
import { httpResource } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class PieService {
  readonly selectedCategory = signal<Category>('All Pies');
  readonly route = inject(ActivatedRoute)

  readonly selectedPieId = toSignal(this.route.queryParamMap
    .pipe(map((params) => params.get('pieId'))));

  readonly pies = httpResource<Pie[]>(() => '/api/pies');

  readonly selectedPie = httpResource<Pie | undefined>(() => `/api/pies/${this.selectedPieId()}`);

  readonly filteredPies = computed(() => {
    const pies = this.pies.value();
    const category = this.selectedCategory();
    if (category === 'All Pies') {
      return pies;
    }

    return pies?.filter((pie: Pie) => pie.category === category) || [];
  });

  setSelectedCategory(category: Category) {
    this.selectedCategory.set(category);
  }
}
