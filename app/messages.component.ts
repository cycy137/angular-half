import { Component, OnInit } from '@angular/core';
import { MessagesService } from './messages.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent {
  constructor(public messagesService: MessagesService){

  }
}
