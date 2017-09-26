import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(imagesArray: any [], filter: any): any {

    if (filter === "all"){
      return imagesArray;
    } 
    else{
      
      const filterArray = [];

      for (let i = 0; i < imagesArray.length; i++) {
        const element = imagesArray[i];
        if (element.category === filter){
          filterArray.push(element);
        }
      }
      return filterArray;
    }

  }
}
