import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {


  ngOnInit(): void {
  }

  @Input() All : number = 0;
  @Input() Free: number = 0;
  @Input() premium : number = 0;

  selectedRadioButtonValue : string = 'All';

  @Output()
  filterRadioButtonSelectionChanged : EventEmitter<string> = new EventEmitter<string>();


  onFilterButtonChanged(){
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue)
    // console.log(this.selectedRadioButtonValue)
  }
  
}

