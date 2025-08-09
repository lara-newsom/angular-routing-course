import { computed, Injectable, signal } from '@angular/core';
import { Category, Pie } from '../models/pie';
import { httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PieService {
  readonly selectedCategory = signal<Category>('All Pies');
  readonly selectedPieId = signal<string | undefined>(undefined);

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


  setSelectedPie(id: string) {
    this.selectedPieId.set(id);
  }

  clearSelectedPie() {
    this.selectedPieId.set(undefined);
  }

  setSelectedCategory(category: Category) {
    this.selectedCategory.set(category);
  }
}
