import { Router, ActivatedRoute, ParamMap, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   const serverId = +params.get('id');
    //   this.server = this.serversService.getServer(serverId);
    // });
    this.route.data.subscribe((data: Data) => {
      this.server = data.server;
    });
  }

  editHandler() {
    this.router.navigate(['./edit' ], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }

}
