import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ShoppingListService } from '../shared/Services/shopping-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ShoppingListService],
})
export class HeaderComponent implements OnInit {
  @Output() page: EventEmitter<string> = new EventEmitter();

  constructor(private shoppingListService: ShoppingListService) {
    this.page.emit('recipes');
  }

  ngOnInit(): void {}

  onSelect(page: string) {
    this.page.emit(page);
  }
}
