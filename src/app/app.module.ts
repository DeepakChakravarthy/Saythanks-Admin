import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { AdminserviceService } from './shared/services/adminservice.service';
import { SeekerGuard } from './shared/guard/seeker.guard';
import { CompanyGuard } from './shared/guard/company.guard';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { ToastrModule } from 'ngx-toastr';






@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LanguageTranslationModule,
        AppRoutingModule,
        InputsModule,
        LabelModule,
        DateInputsModule,
        ChartsModule,
        DropDownsModule,
        LayoutModule,
        GridModule,
        IndicatorsModule,
        ToastrModule.forRoot(),
        
    ],
    declarations: [AppComponent],
    providers: [AuthGuard,AdminserviceService,SeekerGuard,CompanyGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
