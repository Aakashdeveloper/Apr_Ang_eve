import { NgModule } from '@angular/core';
import { MoviesComponent } from './movies.component';
import { MusicService } from './music.service';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    declarations: [
        MoviesComponent
    ],
    providers: [
        MusicService
    ]
})

export class MoviesModule {

}
