import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'myLowerCase'
})

export class MyLowerCasePipe implements PipeTransform {
    transform(value: string) {
        value = value.toLowerCase();
        return value;
    }
}
