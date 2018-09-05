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

  onAddServer() {
    this.serverCreated.emit({
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      name: this.newServerName,
      content: this.newServerContent
    });
  }

}
