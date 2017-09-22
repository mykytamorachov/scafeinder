import { Component, OnInit } from '@angular/core';
import { ICafe } from '../../models/cafe.interface';
import { ShortcutPipe } from '../../pipes/shortcut.pipe';
import { GetCafesService } from '../../services/getcafes/getcafes.service';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss']
})
export class RestaurantsListComponent implements OnInit {
  restaurants: ICafe[];

  constructor(private getCafesService: GetCafesService) { }

  ngOnInit() {
    this.restaurants = this.getCafesService.getAllCafes();
  }

}
