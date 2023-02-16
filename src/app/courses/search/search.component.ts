import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  ngOnInit(): void {
  }

  enteredSearchValues : string = '';

  @Output()
  serachTextChanged : EventEmitter<string> = new EventEmitter<string>();


  onSearchTextChanged(){
    this.serachTextChanged.emit(this.enteredSearchValues)
  }
}
