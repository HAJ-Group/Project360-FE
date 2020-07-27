import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AnnonceDataService} from '../service/data/annonce-data.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {Router} from '@angular/router';
import {AnnoncerModel} from '../model.ts/annoncer-model';
import {AnnounceModel} from '../model.ts/announce-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  annonces: AnnounceModel[];
  premiumAnnonces: AnnounceModel[];
  errorMessage: string;
  key: string;

  constructor(private annonceData: AnnonceDataService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAnnonces();
    this.getPremiumAnnonces();
  }

  getAnnonces() {
    this.annonceData.getAnnonces().subscribe(data => {
      this.annonces = data['1'];
    });
  }

  getPremiumAnnonces() {
    this.annonceData.getPremiumAnnonces().subscribe(data => {
      this.premiumAnnonces = data['1'];
    });
  }

  selectChangeHandler(status, event) {
    console.log(event.target.value);
  }

  getSearchKey() {
    console.log('key ', this.key);
    this.router.navigate(['/announces_filter'], {state: {keyword: this.key}});
  }
}
