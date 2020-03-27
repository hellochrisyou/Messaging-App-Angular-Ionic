import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { UserService } from '../../../core/service/user.service';
import { MessagingService } from '../../../core/service/messaging.service';
import { AuthService } from '../../../core/service/auth.service';
import { MessageCount } from '../../interface/interface';
import { User } from '../../interface/models';

@Component({
  selector: 'shared-card-page',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class SharedCardPage implements OnInit {

  private _messageCount: MessageCount = {};
  private _users: any[];
  private _option: string;

  @Input()
  public get messageCount(): MessageCount {
    return this._messageCount;
  }
  public set messageCount(value: MessageCount) {
    this._messageCount = value;
  }

  @Input()
  public get option(): string {
    return this._option;
  }
  public set option(value: string) {
    this._option = value;
    console.log("SharedCardPage -> setoption -> value", value)
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

  ngOnInit(): void {


    this.userService.getUsers().subscribe(usersData => {
      usersData.forEach((user: any, index: number) => {
        this.messagingService.getUserMessages(this.authService.authState.email, user.email).subscribe(messages => {
          if (messages.length > 0) {
            this.messageCount[index] = messages.length;
            this.messageCount.userName = user.email;
            console.log('thismessagecout', this.messageCount);
          } else {
            this.messageCount[index] = 0;
            console.log('thismessagecout', this.messageCount);
          }
        });
      });

      if (this._option === 'people') {
        this._users.forEach((user: User, index: number) => {
          if (this.messageCount[index] !== 0) {
            this._users.splice(index, 1);
          }
        });
        console.log('SharedCardPage -> sortFriends -> this._users', this._users);

      } else {

      }
    });
  }
}


