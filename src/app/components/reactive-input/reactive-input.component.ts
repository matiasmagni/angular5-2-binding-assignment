import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'reactive-input',
  templateUrl: './reactive-input.component.html',
  styleUrls: ['./reactive-input.component.css']
})

export class ReactiveInputComponent implements OnInit {

  DEFAULT_NAME = '<my name>';

  @Input() type: string;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() inputEvent: string;

  name = this.DEFAULT_NAME;

  constructor() { }

  ngOnInit() {
  }

  onInput(event: Event) {
    const name: string = (<HTMLInputElement>event.target).value;
    this.name = name ? name : this.DEFAULT_NAME;
  }
}
