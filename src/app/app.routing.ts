import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ProviderComponent } from './provider/provider.component';

const routes: Routes = [
    { path: '', redirectTo: 'providers', pathMatch: 'full' },
    { path: 'providers', component: ProviderComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
    exports: [],
    providers: []
})
export class AppRoutingModule {}
