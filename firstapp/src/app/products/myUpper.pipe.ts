import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myUpperCase'
})

export class MyUpperCasePipe implements PipeTransform {
    transform(value: string) {
        value = value.toUpperCase();
        return value;
    }
}

