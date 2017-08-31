import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newReleases'
})
export class NewReleasesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      if (args == '/songs') {
        return value.filter(x => x.album_type == 'single');
      } else if (args == '/album') {
        return value.filter(x => x.album_type == 'album');
      } else {
        return value
      }
    } else {
      return null;
    }
  }
}
