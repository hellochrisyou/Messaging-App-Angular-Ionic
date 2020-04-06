import { User } from 'firebase';
import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { Proposal } from '../../shared/interface/models';
import { FILTER_PENDING_PROPOSALS } from './proposal.util';
import { UserStateService } from '../../core/service/state/user.state.service';
import { ProposalService } from '../../core/service/proposal.service';
import { AuthService } from '../../core/service/auth.service';
import { ProposalsStateService } from '../../core/service/state/proposals.state.service';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { PEND_PROPOSAL_COL_OBJ, PEND_PROPOSAL_DISPLAY } from '../../shared/const/columns.const';
import { AlertController, ToastController } from '@ionic/angular';
import { GET_DATE } from '../inbox/inbox.util';

@Component({
  selector: 'proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ProposalComponent implements OnInit {

  proposalRef: AngularFirestoreDocument<any>;
  private _pendingProposals: Proposal[] = [];

  readonly PEND_PROPOSAL_COL_OBJ = PEND_PROPOSAL_COL_OBJ;
  readonly PEND_PROPOSAL_DISPLAY = PEND_PROPOSAL_DISPLAY;

  @Input()
  public get pendingProposals(): any[] {
    return this._pendingProposals;
  }
  public set pendingProposals(value: any[]) {
    this._pendingProposals = value;
    this.cdr.markForCheck();
  }

  constructor(
    private proposalStateService: ProposalsStateService,
    private proposalService: ProposalService,
    public alertCtrl: AlertController,
    public toastController: ToastController,
    private userStateService: UserStateService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {
    this.proposalService.getUserProposals(this.authService.authState.email).subscribe((proposalsData: any[]) => {
      this.pendingProposals = proposalsData;
    });
  }

  ionViewDidEnter() {

  }

  ngOnInit() {

  }

  async actionProposal(index: number) {

    const alert = await this.alertCtrl.create({
      header: 'Action on Proposal',
      cssClass: 'globalAlert',
      buttons: [
        {
          text: 'Accept',
          handler: () => {
            this.proposalService.getUserProposalsSnapshot(this.authService.authState.email).subscribe((proposalsData: any[]) => {
              this.proposalService.updateProposal('Accepted', this.authService.authState.email, proposalsData[index].payload.doc.id);
              this.toast('Your have accepted this proposal');
            });
          }
        },
        {
          text: 'Reject',
          handler: () => {
            this.proposalService.getUserProposalsSnapshot(this.authService.authState.email).subscribe((proposalsData: any[]) => {
              this.proposalService.updateProposal('Rejected', this.authService.authState.email, proposalsData[index].payload.doc.id);
              this.toast('Your have rejected this proposal');
            });
          }
        }
      ]
    });
    await alert.present();
  }

  public async toast(messageArg: string) {
    const toast = await this.toastController.create({
      header: '',
      message: messageArg,
      position: 'bottom',
      duration: 2000,
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: messageArg,
          handler: () => {
          }
        }
      ]
    });
    toast.present();
  }
}