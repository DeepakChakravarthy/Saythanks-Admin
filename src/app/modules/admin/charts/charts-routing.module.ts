import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsCsomponent } from './charts.component';

const routes: Routes = [
    {
        path: '',
        component: ChartsCsomponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChartsRoutingModule {}
