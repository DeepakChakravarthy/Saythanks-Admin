import { Component, OnInit, ViewChild } from '@angular/core';

import { process } from '@progress/kendo-data-query';

import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { AdminserviceService } from '../../../../../shared/services/adminservice.service';

// import { adminServices } from 'src/app/shared/services/adminServices';


@Component({
  selector: 'app-ctable',
  templateUrl: './ctable.component.html',
  styleUrls: ['./ctable.component.scss']
})
export class CtableComponent implements OnInit {
  @ViewChild(DataBindingDirective) dataBinding!: DataBindingDirective;
  public gridData!: any[];
  public gridView!: any[];

  public mySelection: string[] = [];

  dialogService: any;

  userData:any[]=[];

  constructor(private _service: AdminserviceService) {
    }


  public ngOnInit(): void {
    this._service.UsersgetData().subscribe((result) => {
      if (result != null) {
        console.log(result);
        var temp = result;
        // temp.forEach(element => {

        //   element.timestamp = this.dateAsYYYYMMDDHHNNSS(element.timestamp);
          
        // });
        this.gridView = temp;
        
        this.gridData = temp;
      }
    });
  }

  

  // // Requested Datetime Format Function's 
  // dateAsYYYYMMDDHHNNSS(date): string {
  //   return date.getFullYear()
  //             + '-' + this.leftpad(date.getMonth() + 1, 2)
  //             + '-' + this.leftpad(date.getDate(), 2)
  //             + ' ' + this.leftpad(date.getHours(), 2)
  //             + ':' + this.leftpad(date.getMinutes(), 2)
  //             + ':' + this.leftpad(date.getSeconds(), 2);
  //           }
  // leftpad(val, resultLength = 2, leftpadChar = '0'): string {
  //   return (String(leftpadChar).repeat(resultLength)
  //         + String(val)).slice(String(val).length);
  // }


  public onFilter(inputValue: any): void {
    const input = inputValue.target.value;
    this.gridView = process(this.gridData, {
      filter: {
        logic: 'or',
        filters: [
          {
            field: 'userId',
            operator: 'contains',
            value: input,
          },
          {
            field: 'email',
            operator: 'contains',
            value: input,
          },
          {
            field: 'slug',
            operator: 'contains',
            value: input,
          },
          {
            field: 'timestamp',
            operator: 'contains',
            value: input,
          },
        ],
      },
    }).data;

    this.dataBinding.skip = 0;
  }

}
