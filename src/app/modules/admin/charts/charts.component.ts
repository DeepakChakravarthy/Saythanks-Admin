import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsCsomponent implements OnInit {
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    // bar chart
   
}
