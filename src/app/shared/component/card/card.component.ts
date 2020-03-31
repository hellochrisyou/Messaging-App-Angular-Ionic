import { Component, OnInit, Input, AfterViewInit, ContentChild, TemplateRef } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { UserService } from '../../../core/service/user.service';
import { MessagingService } from '../../../core/service/messaging.service';
import { AuthService } from '../../../core/service/auth.service';
import { MessageCount } from '../../interface/interface';
import { User } from '../../interface/models';
import { UserStateService } from '../../../core/service/state/user.state.service';

@Component({
  selector: 'shared-card-page',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class SharedCardPage implements OnInit {

  private _messageCounts: MessageCount[] = [];
  public users: any[];
  private _option: string;
  private messageCount: MessageCount = {};
  @Input()
  public get messageCounts(): MessageCount[] {
    return this._messageCounts;
  }
  public set messageCounts(value: MessageCount[]) {
    this._messageCounts = value;
  }

  @Input()
  public get option(): string {
    return this._option;
  }
  public set option(value: string) {
    this._option = value;
    console.log("SharedCardPage -> setoption -> value", value)
  }

  @ContentChild('messagesBtnTemplate', { static: false }) optionTemplateRef: TemplateRef<any>;
  @ContentChild('profileBtnTemplate', { static: false }) optionTemplateRef2: TemplateRef<any>;
  @ContentChild('proposalBtnTemplate', { static: false }) optionTemplateRef3: TemplateRef<any>;

  constructor(
    private userService: UserService,
    private messagingService: MessagingService,
    public authService: AuthService,
    public userStateService: UserStateService
  ) { }

  ngOnInit(): void {


    this.userService.getUsers().subscribe(usersData => {
      this.users = usersData;
      this.users.forEach((user: any, index: number) => {
        this.messagingService.getUserMessages(this.authService.authState.email, user.email).subscribe(messages => {
          this.messageCount = {};
          if (messages.length > 0) {
            this.messageCount.messageNum = messages.length;

          } else {
            this.messageCount[index] = 0;
            console.log('thismessagecout', this.messageCount);
          }
          this.messageCount.userName = user.email;
          this.messageCount.photoURL = user.photoURL;
          this.messageCount.title = user.title;
          this.messageCount.displayName = user.displayName;
          this.messageCounts.push(this.messageCount);
          console.log('thismessagecout', this.messageCount);
          console.log('Before', this.messageCount);

          // if (this._option === 'people') {
          //   this.messageCounts.forEach((messageCount: MessageCount) => {
          //     if (this.messageCounts[index].messageNum !== 0) {
          //       this.messageCounts.splice(index, 1);
          //     }
          //   });
          //   console.log('SharedCardPage -> sortFriends -> this._users', this.users);

          // } else {
          //   this.messageCounts.forEach((messageCount: MessageCount) => {
          //     if (this.messageCounts[index].messageNum === 0) {
          //       this.messageCounts.splice(index, 1);
          //     }
          //   });
          // }
        });
      });



    });
  }
}


