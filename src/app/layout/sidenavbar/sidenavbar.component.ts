import { Component, OnInit } from '@angular/core';


export interface Section {
  name: string;
}

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {
  Suratmasuk: Section[] = [
    {
      name: 'Inbox',
    },
    {
      name: 'Sent',
    }
  ];

  Suratkeluar: Section[] = [
    {
      name: 'Need Approvals',
    },
    {
      name: 'Tracking',
    }
  ];

  Suratkeluarantarunit: Section[] = [
    {
      name: 'Need Approvals',
    },
    {
      name: 'Tracking',
    }
  ];

  Notadinas: Section[] = [
    {
      name: 'Need Approvals',
    },
    {
      name: 'Tracking',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
