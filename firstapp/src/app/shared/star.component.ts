import { Component, OnChanges,
        OnInit, OnDestroy, Input } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges, OnInit, OnDestroy {

    @Input() rating: number;
    starWidth: number;

    constructor() {
        console.log('>>>>>constructor<<<<<<');
    }

    ngOnInit() {
        console.log('>>>>>OnInit<<<<<<');
    }

    ngOnChanges() {
        console.log('>>>>>OnChanges<<<<<<');
        this.starWidth = this.rating * 86 / 6;
    }

    ngOnDestroy() {
        console.log('>>>>>OnDestroy<<<<<<');
    }
}
