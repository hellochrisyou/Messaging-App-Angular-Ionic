import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { User } from 'firebase';
import { UserService } from '../../../core/service/user.service';
import { MessagingService } from '../../../core/service/messaging.service';
import { AuthService } from '../../../core/service/auth.service';

@Component({
  selector: 'shared-card-page',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class SharedCardPage implements OnInit {

  private _messageCount: number[] = [];
  private _messages: Message[] = [];
  private _user: User;
  private _users: any[];

  @Input()
  public get messageCount(): number[] {
    return this._messageCount;
  }
  public set messageCount(value: number[]) {
    this._messageCount = value;
  }

  @Input()
  public get messages(): Message[] {
    return this._messages;
  }
  public set messages(value: Message[]) {
    this._messages = value;
  }

  @Input()
  public get user(): User {
    return this._user;
  }
  public set user(value: User) {
    this._user = value;
  }

  @Input()
  public get users(): any[] {
    return this._users;
  }
  public set users(value: any[]) {
    this._users = value;
  }
  constructor(
    private userService: UserService,
    private messagingService: MessagingService,
    public authService: AuthService
  ) { }

  ngOnInit() { }

}
