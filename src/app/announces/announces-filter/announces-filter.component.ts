import {Component, OnInit} from '@angular/core';
import {AnnounceModel} from '../../model.ts/announce-model';
import {AnnonceDataService} from '../../service/data/annonce-data.service';
import {Router} from '@angular/router';
import {CITIES} from '../../app.constants';

@Component({
  selector: 'app-announces-filter',
  templateUrl: './announces-filter.component.html',
  styleUrls: ['./announces-filter.component.css']
})
export class AnnouncesFilterComponent implements OnInit {
  announces: AnnounceModel[];

  filters = {
    keyword: '',
    status: '',
    type: '',
    city: '',
    surface: 0,
    pieces: 20,
    budget_min: 1,
    budget_max: 100000
  };

  cities: string[];

  constructor(private announceData: AnnonceDataService, private router: Router) {
    this.cities = CITIES;
    let k = this.router.getCurrentNavigation().extras.state;
    console.log('k', k);
    this.filters.keyword = k !== undefined ? k.keyword : '';
  }

  ngOnInit(): void {
    this.getAnnoncesByFilters();
  }

  getAnnonces() {
    this.announceData.getAnnonces().subscribe(data => {
      this.announces = data['1'];
    });
  }

  selectChangeHandler(status, event) {
    console.log(event.target.value);
  }

  getAnnoncesByFilters() {
    this.announceData.getAnnoncesByFilters(this.filters).subscribe(data => {
      this.announces = data['1'];
    });
  }

}
