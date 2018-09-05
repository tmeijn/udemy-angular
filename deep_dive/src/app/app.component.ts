import { Component } from '@angular/core';
import { Server } from './server-element/server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public serverElements: Server[] = [{
    name: 'Testserver',
    type: 'server',
    content: 'Just a test!'
  }];

  onServerAdded(serverData: Server) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onBlueprintAdded(serverData: Server) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.name,
      content: serverData.content
    });
  }

  onServerCreated(serverData: Server): void {

  };
}
