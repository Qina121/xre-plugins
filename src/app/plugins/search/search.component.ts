import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'xma-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  constructor(public searchService: SearchService) { }

  ngOnInit() {
    // this.form = this.searchService.createFormGroup(this.controls);
  }

  this.myGroup = new FormGroup({
    firstName: new FormControl()
 });

}
