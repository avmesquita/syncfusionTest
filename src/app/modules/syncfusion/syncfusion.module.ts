import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule, CheckBoxModule , RadioButtonModule, ChipListModule } from '@syncfusion/ej2-angular-buttons';
import { GridModule , GridAllModule } from '@syncfusion/ej2-angular-grids';
import { CalendarModule, DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { AccordionModule, ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { DropDownListModule, AutoCompleteModule, ComboBoxModule, DropDownTreeModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AccumulationChartModule, BulletChartModule, ChartModule  } from '@syncfusion/ej2-angular-charts';
import { BarcodeGeneratorAllModule, QRCodeGeneratorAllModule, DataMatrixGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator';
import { BreadcrumbModule, ContextMenuModule  } from '@syncfusion/ej2-angular-navigations';
import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge';
import { ColorPickerModule } from '@syncfusion/ej2-angular-inputs';
import { DashboardLayoutModule } from '@syncfusion/ej2-angular-layouts';
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { FileManagerModule } from '@syncfusion/ej2-angular-filemanager';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';

import { DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { ToolbarService } from '@syncfusion/ej2-angular-documenteditor';

import { DemoComponent } from './components/demo/demo.component';
import { SfToolbarComponent } from './components/sf-toolbar/sf-toolbar.component';



@NgModule({
  declarations: [
    DemoComponent,
    SfToolbarComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CheckBoxModule,
    RadioButtonModule,
    ChipListModule,
    GridModule,
    GridAllModule,
    CalendarModule,
    ScheduleModule,
    AccordionModule,
    ToolbarModule,
    ToastModule,
    DropDownListModule,
    AutoCompleteModule,
    ComboBoxModule,
    DatePickerModule,
    AccumulationChartModule,
    BulletChartModule,
    ChartModule,
    BarcodeGeneratorAllModule,
    QRCodeGeneratorAllModule,
    DataMatrixGeneratorAllModule,
    BreadcrumbModule,
    CircularGaugeModule,
    ColorPickerModule,
    DateRangePickerModule,
    ContextMenuModule,
    DashboardLayoutModule,
    DiagramModule,
    DialogModule,
    DropDownButtonModule,
    DropDownTreeModule,
    FileManagerModule,
    GanttModule

  ],
  exports: [
    DemoComponent,
    SfToolbarComponent
  ],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    ToolbarService
  ]
})
export class SyncfusionModule { }
