import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripWhitespace'
})
export class StripWhitespacePipe implements PipeTransform {
  transform(value: string): string {
    return value.trim().replace(/\s+/g, ' ');
  }
}
