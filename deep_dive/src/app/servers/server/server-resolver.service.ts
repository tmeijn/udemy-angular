import { ServersService } from './../servers.service';
import { ServerModel } from './server.model';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerResolver implements Resolve<ServerModel> {

  constructor(private servicesService: ServersService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ServerModel> | Promise<ServerModel> | ServerModel {
    const serverId = +route.params['id'];
    return this.servicesService.getServer(serverId);
  }
}
