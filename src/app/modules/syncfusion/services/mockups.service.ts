import { Injectable } from '@angular/core';
import { EventSettingsModel } from '@syncfusion/ej2-angular-schedule';

@Injectable({
  providedIn: 'root'
})
export class MockupsService {

  public selectedDate: Date = new Date(2018, 1, 15);

  constructor() { }

  getGridData(): Object[] {
    const data = [
      {
          OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5, OrderDate: new Date(8364186e5),
          ShipName: 'Vins et alcools Chevalier', ShipCity: 'Reims', ShipAddress: '59 rue de l Abbaye',
          ShipRegion: 'CJ', ShipPostalCode: '51100', ShipCountry: 'France', Freight: 32.38, Verified: !0
      },
      {
          OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6, OrderDate: new Date(836505e6),
          ShipName: 'Toms Spezialitäten', ShipCity: 'Münster', ShipAddress: 'Luisenstr. 48',
          ShipRegion: 'CJ', ShipPostalCode: '44087', ShipCountry: 'Germany', Freight: 11.61, Verified: !1
      },
      {
          OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4, OrderDate: new Date(8367642e5),
          ShipName: 'Hanari Carnes', ShipCity: 'Rio de Janeiro', ShipAddress: 'Rua do Paço, 67',
          ShipRegion: 'RJ', ShipPostalCode: '05454-876', ShipCountry: 'Brazil', Freight: 65.83, Verified: !0
      }
    ];

    return data;
  }

  getScheduleEvent(): Object[] {
    const data =  [{
      id: 2,
      eventName: 'Meeting',
      startTime: new Date(2018, 1, 15, 10, 0),
      endTime: new Date(2018, 1, 15, 12, 30),
      isAllDay: false
    }];
    return data;
  }

  getEventSettings(): EventSettingsModel {
    return {
      dataSource: this.getScheduleEvent(),
      fields: {
        id: 'id',
        subject: { name: 'eventName' },
        isAllDay: { name: 'isAllDay' },
        startTime: { name: 'startTime' },
        endTime: { name: 'endTime' },
      }    
    }
  }


}
