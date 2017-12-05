import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'maskSsn'
})
export class MaskSsnPipe implements PipeTransform{

    transform(value: string): string{
        if (!value) return;
        if (value.length === 9){
            let ssnFormatted = 'XXX-XX-' + (value.substr(5,4));
            return ssnFormatted;
        }else if (value.indexOf('-') > 0){
        let ssnStripped: string = value.replace('-', '').split('-')[1];
            return 'XXX-XX-' + ssnStripped;
        }
    }
}