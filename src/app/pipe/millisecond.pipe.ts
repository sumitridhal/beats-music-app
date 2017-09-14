import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'millisecond'
})
export class MillisecondPipe implements PipeTransform {

  transform(ms: any, args?: any): any {
    var seconds = ms / 1000;
    var hours = Math.floor(seconds / 3600); // 3,600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours
    var minutes = Math.floor(seconds / 60); // 60 seconds in 1 minute
    seconds = Math.floor(seconds % 60);
    if (hours > 0)
      return hours.toString() + ":" + minutes.toString() + ":" + seconds.toString();
    else if (minutes > 0)
      return minutes.toString() + ":" + seconds.toString();
    else if (seconds > 0)
      return "00:" + seconds.toString();
  }

}
