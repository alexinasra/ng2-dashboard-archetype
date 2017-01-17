import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss']
})
export class LanguageSelectComponent implements OnInit {

  @Input('language')
  selectedLanguage:string;

  @Output()
  onChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    let value = form.value.lang;
    if(value !== this.selectedLanguage) {
      this.selectedLanguage = value;
      this.onChange.emit(this.selectedLanguage);
    }
  }
}
