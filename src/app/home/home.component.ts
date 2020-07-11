import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AnnonceDataService} from '../service/data/annonce-data.service';
import {NgxPaginationModule} from 'ngx-pagination';
import {AnnonceModel} from '../model.ts/annonce-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cities: string[] = [
    'Aklim',
    'Ain Dorij',
    'Ain Jemaa',
    'Ait Benhaddou',
    'Ain Bni Mathar',
    'Ain Cheggag',
    'Ain Defali',
    'Ain El Aouda',
    'Ain Erreggada',
    'Ain Taoujdate',
    'Ait Boubidmane',
    'Ait Bouhlal',
    'Ait Daoud',
    'Ait Iaaza',
    'Ait Ourir',
    'Ajdir',
    'Al Aaroui',
    'Al-Hoceima',
    'Amalou Ighriben',
    'Amgala',
    'Amizmiz',
    'Aoufous',
    'Arbaoua',
    'Arfoud (Erfoud)',
    'Asilah',
    'Assahrij',
    'Bab Berred',
    'Bab Taza',
    'Ben Ahmed',
    'Beni Chiker',
    'Beni Ansar',
    'Beni Mellal -',
    'Ben Slimane',
    'Ben Taieb',
    'Ben Yakhlef',
    'Berkane',
    'Berrechid',
    'Bhalil',
    'Bir GanBirdus',
    'Bir Lehlou',
    'Bni Bouayach',
    'Bni Drar',
    'Bni Hadifa',
    'Bni Tadjite',
    'Bouarfa',
    'Bou Craa (Bo Craa)',
    'Bouanane',
    'Boudnib',
    'Boufakrane',
    'Bouguedra',
    'Bouizakarne',
    'Boujad',
    'Boujdour (Cabo Bojador)',
    'Bouknadel',
    'Boulemane',
    'Bouskoura',
    'Bouznika',
    'Bradia',
    'Brikcha',
    'Casablanca ( Dar al-Beïda)',
    'Chefchaouen',
    'Chemaia',
    'Chichaoua',
    'Dakhla (Ad Dakhla, Villa Cisneros)',
    'Dar Gueddari',
    'Dar Kebdani',
    'Demnate',
    'Douar Bel Aguide (Bel air)',
    'Driouch',
    'El Aioun Sidi Mellouk',
    'El Guerdane',
    'El Hajeb',
    'El Hanchane',
    'El Jadida ( Mazagan)',
    'Elkbab',
    'El Menzel',
    'El Ouatia',
    'Erfoud (o Arfoud)',
    'Errachidia (Ksar es-Souk)',
    'Essaouira ( Mogador)',


    'Farcia',
    'Fès',
    'Figuig',
    'Fnideq',
    'Fquih Ben Salah',
    'Er-Rich',


    'Guelmim',
    'Goulmima',
    'Guelta Zemmour',
    'Guerguerat',
    'Guisser',
    'Guercif',


    'Had Kourt',

    'Ihddaden',
    'Ifrane',
    'Imilchil',
    'Imilili',
    'Imintanoute',
    'Imouzzer Kandar',
    'Immouzer Marmoucha',
    'Inezgane',


    'jerada',
    'Jorf',
    'Jorf El Melha',
    'Jemâa Sahim',


    'Kassita',
    'Kattara',
    'Kénitra ( Port-Lyautey)',
    'Kehf Nsour',
    'Khémisset',
    'Khemis Sahel',
    'Khemis Zemamra (Doukkala)',
    'Khenichet',
    'Khénifra',
    'Khouribga',
    'Ksar el-Kébir',


    'Laayoune (El Aaiún)',
    'Lagouira ( Cabo Blanco)',
    'Lalla Mimouna',
    'Larache',
    'Lixus',
    'Lqliâa',

    'Madagh',
    'Riad Heritage ; Sonic',
    'Marrakech',
    'Martil',
    'Mechra Bel Ksiri',
    'Mediek ou M\'diq',
    'Mediouna',
    'Mehdia',
    'Meknès',
    'Melloussa',
    'Midelt',
    'Mirleft',
    'Mohammédia ( Fédala)',
    'Moqrisset',
    'Moulay Ali Cherif',
    'Moulay Bousselham',
    'Moulay Idriss Zerhoun',
    'M\'rirt',
    'nador',
    'nhima',
    'M\'rirt',
    'nador',
    'nhima',
    'Ouarzazate',
    'Oualidia',
    'Ouezzane',
    'Oujda',
    'Oukaimeden',
    'Oulad Amrane',
    'Oulad Ayad',
    'Oulad Berhil',
    'Oulad Frej',
    'Oulad Ghadbane',
    'Oulad H Riz Sahel',
    'Oulad M\'Rah',
    'Oulad M Barek',
    'Oulad Teïma',
    'Oulad Zbair',
    'Ouled Tayeb',
    'Ouled Youssef',
    'Oulmès',
    'Ounagha',
    'Rabat (Ribat al-Fath)Ras El Ain',
    'Ras El Ma',
    'Ribate El Kheir',
    'Rissani ( Sijilmassa)',
    'Sabaa Aiyoun',
    'Safi',
    'Saidia',
    'Salé',
    'Sebt El Maârif',
    'Sebt Gzoula',
    'Sebt Jahjouh',
    'Sefrou',
    'Settat ( Chaouia )',
    'Sid Zouin',
    'Sidi Abdallah Ghiat',
    'Sidi Addi',
    'Sidi Ali Ban Hamdouche',
    'Sidi Allal El Bahraoui',
    'Sidi Allal Tazi',
    'Sidi Bou Othmane',
    'Sidi Boubker',
    'Sidi Jaber',
    'Sidi Kacem ( Chérarda )',
    'Sidi Lyamani',
    'Sidi Rahhal',
    'Sidi Slimane',
    'Sidi Smaïl',
    'Sidi Taibi',
    'Sidi Yahya el Gharb',
    'Skhirat',
    'Smara (Semara)',
    'Souq Larb\'a al Gharb',


    'Taddert',
    'Tafetachte',
    'Tafrisset',
    'Taghjijt',
    'Tahala',
    'Tahannaout',
    'Tainaste',
    'Taliouine',
    'Talmest',
    'Talssint',
    'Tanger ( Tangerois )',
    'Tan-Tan',
    'Tamallalt',
    'Tamanar',
    'Tameslouht',
    'Taourirte',
    'Tarfaya (Cabo Juby)',
    'Taroudannt',
    'Tata',
    'Taza',
    'Taznakht',
    'Télouet',
    'Temara',
    'Temsia',
    'Tétouann',
    'Thar Es-Souk',
    'Tichla',
    'Tidass',
    'Tifariti',
    'Tiflet',
    'Tingdad',
    'Tinghir',
    'Tinmel',
    'Tiznit',
    'Tiztoutine',
    'Torres de Alcala',
    'Tifelt',
    'Volubilis ( Oualili)',
    'Youssoufia',
    'Zagora',
    'Zaio'];


  annonces: AnnonceModel[];
  premiumAnnonces: AnnonceModel[];
  errorMessage: string;

  constructor(private annonceData: AnnonceDataService) {
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

  selectChangeHandler(event){
    console.log(event.target.value);
  }

}
