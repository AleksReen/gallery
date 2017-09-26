import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  subscription: Subscription;
  images: any [] = [];
  filt = 'all';

  constructor(private service: DataService) {}

  ngOnInit() {

    //вызываем непосредственно метод для получения данных
    this.service.serverCall();
    
    //запускаем подписку и ждем сабджекта, когда он приходит обрабатываем ответ
    this.subscription = this.service.serverResponse.subscribe(
      response =>
      {   
        this.images = response.imgs;
      }
    );
  }

  filter(value: string){
    this.filt = value.toLocaleLowerCase();
    }

}
