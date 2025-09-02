import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Message } from '../shared/message.model';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: Message[] = [
    { id: '1', text: 'Hello! How can I help you?', sender: 'bot', timestamp: new Date() }
  ];
  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        id: (this.messages.length + 1).toString(),
        text: this.newMessage,
        sender: 'user',
        timestamp: new Date()
      });
      this.newMessage = '';
      setTimeout(() => {
        this.messages.push({
          id: (this.messages.length + 1).toString(),
          text: 'This is a bot reply.',
          sender: 'bot',
          timestamp: new Date()
        });
      }, 500);
    }
  }
}
