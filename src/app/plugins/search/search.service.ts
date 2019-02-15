import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private fb: FormBuilder) { }



  createFormGroup(controls: any) {
    const group: any = {};
    controls.forEach((control: any) => {
      console.log(control.required);
      if (control.required) {
        console.log(control.required);
        console.log(group[control.key]);
        group[control.key] = [ null, [ Validators.required ] ];
        console.log(group[control.key]);
        // group[control.key]list.value = [ null, [ Validators.required ] ];
      } else {
        group[control.key] = [ null ];
      }
    });
    return this.fb.group(group);
  }

}
