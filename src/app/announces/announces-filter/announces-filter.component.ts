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
    this.filters.keyword = k !== undefined ? k.keyword : '';
  }

  ngOnInit(): void {
    this.getAnnouncesByFilters();
  }

  getAnnonces() {
    this.announceData.getAnnounces().subscribe(data => {
      this.announces = data['1'];
    });
  }

  selectChangeHandler(status, event) {
    console.log(event.target.value);
  }

  getAnnouncesByFilters() {
    this.announceData.getAnnouncesByFilters(this.filters).subscribe(data => {
      // @ts-ignore
      this.announces = data.data;
    });
  }


}
