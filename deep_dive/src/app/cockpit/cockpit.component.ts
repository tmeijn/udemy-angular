import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Server } from '../server-element/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<Partial<Server>>();
  @Output() blueprintCreated = new EventEmitter<Partial<Server>>();

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(name: HTMLInputElement, content: HTMLInputElement) {
    this.serverCreated.emit({
      name: name.value,
      content: content.value
    });
  }

  onAddBlueprint(name: HTMLInputElement, content: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: name.value,
      content: content.value
    });
  }

}
