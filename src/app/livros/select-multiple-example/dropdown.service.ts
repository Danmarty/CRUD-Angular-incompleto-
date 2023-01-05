import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor() { }
}

function getTecnologias(){

  return[
    {nome:'java', desc: 'Java'},
    {nome:'javascript', desc: 'JavaScript'},
    {nome:'php', desc: 'PHP'},
    {nome:'ruby', desc: 'Ruby'}
  ];

}

