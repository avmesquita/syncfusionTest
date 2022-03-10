import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';
import { MockupsService } from '../../services/mockups.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  @ViewChild('evento') evento!: ToastComponent;

  public data: Object[] = [];

  public hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
  public ajaxSettings: object = {
url: this.hostUrl + 'api/FileManager/FileOperations'
  };

  constructor(private mockupsService: MockupsService) { }

  ngOnInit(): void {
    this.data = this.mockupsService.getGridData();    
  }

  onCreate($event: any) {
    this.evento.show();
  }

  btnClick($event: any) {
    this.evento.show();
  }

}
