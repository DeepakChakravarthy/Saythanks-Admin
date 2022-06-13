import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../../router.animations';


import { process } from '@progress/kendo-data-query';

import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { AdminserviceService } from '../../../../app/shared/services/adminservice.service';

@Component({
    selector: 'app-bs-element',
    templateUrl: './bs-element.component.html',
    styleUrls: ['./bs-element.component.scss'],
    animations: [routerTransition()]
})
export class BsElementComponent implements OnInit {
  @ViewChild(DataBindingDirective) dataBinding!: DataBindingDirective;
  public gridData!: any[];
  public gridView!: any[];

  public mySelection: string[] = [];

  dialogService: any;

  userData:any[]=[];

  constructor(private _service: AdminserviceService) {
    }

  public ngOnInit(): void {
    this._service.NotesgetData().subscribe((result) => {
      if (result != null) {
        console.log(result);
        this.gridView = result;
        this.gridData = result;
      }
    });
  }

  public onFilter(inputValue: any): void {
    const input = inputValue.target.value;
    this.gridView = process(this.gridData, {
      filter: {
        logic: 'or',
        filters: [
          {
            field: 'uuid',
            operator: 'contains',
            value: input,
          },
          {
            field: 'inboxesAuthId',
            operator: 'contains',
            value: input,
          },
          {
            field: 'body',
            operator: 'contains',
            value: input,
          },
          {
            field: 'byline',
            operator: 'contains',
            value: input,
          },
          {
            field: 'archived',
            operator: 'contains',
            value: input,
          },
          {
            field: 'timestamp',
            operator: 'contains',
            value: input,
          },
          {
            field: 'inboxesAuth',
            operator: 'contains',
            value: input,
          },
        ],
      },
    }).data;

    this.dataBinding.skip = 0;
  }

}
