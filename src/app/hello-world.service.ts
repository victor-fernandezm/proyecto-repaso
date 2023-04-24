import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  helloWorld(): string {
    return "hola mundo!";
  }
}
