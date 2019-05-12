import { Component, OnChanges,
        OnInit, OnDestroy, Input,
        Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges, OnInit, OnDestroy {

    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    starWidth: number;

    constructor() {
        console.log('>>>>>constructor<<<<<<');
    }

    ngOnInit() {
        console.log('>>>>>OnInit<<<<<<');
    }

    ngOnChanges() {
        console.log('>>>>>OnChanges<<<<<<');
        this.starWidth = this.rating * 86 / 5.4;
    }

    ngOnDestroy() {
        console.log('>>>>>OnDestroy<<<<<<');
    }

    onStar(): void {
        this.ratingClicked.emit(`Rating clicked is ${this.rating}`);
    }

    getColor() {
        return this.rating > 4 ? '#@28a745' : (this.rating > 2.5) ? '#007bff' : 'teal';
    }
}
