import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'maskSsn'
})
export class MaskSsnPipe implements PipeTransform{

    transform(value: string): string{

        let ssnStripped: string = value.replace('-', '').split('-')[1];
        return 'XXX-XX-' + ssnStripped;
    }
}