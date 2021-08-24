import {Component, OnInit,EventEmitter} from '@angular/core';
import {Output} from "@angular/core";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() getSearch=new EventEmitter<string>();
  constructor() {
  }

  ngOnInit(): void {
  }

  search(val:any) {
    let keyWord=val.target.value;
    this.getSearch.emit(keyWord);
  }
}
