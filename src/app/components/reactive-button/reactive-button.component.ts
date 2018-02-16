import { Component, OnIni, Input } from '@angular/core';

@Component({
  selector: 'reactive-button',
  templateUrl: './reactive-button.component.html',
  styleUrls: ['./reactive-button.component.css']
})
export class ReactiveButtonComponent implements OnInit {

  @Input() disabled: boolean;

  buttonDisabled: boolean;

  constructor() {
    this.buttonDisabled = false;
  }

  ngOnInit() { }

  onClick(event: Event) {
    alert('Accepted!');
  }
}
