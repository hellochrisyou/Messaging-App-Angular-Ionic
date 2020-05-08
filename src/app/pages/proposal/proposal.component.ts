import { User } from 'firebase';
import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, ViewChild } from '@angular/core';
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
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
declare var $: any;

@Component({
  selector: 'proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ProposalComponent implements OnInit {

  today = new Date();
  theirDisplayedColumns: string[] = ['proposalDate', 'sender', 'status', 'option'];
  myDisplayedColumns: string[] = ['proposalDate', 'sender', 'address'];


  index: number;
  theirProposals: Proposal[] = [];
  myProposals: Proposal[] = [];
  theirProposalDataSource: MatTableDataSource<any>;
  myProposalDataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator, { static: true }) theirPaginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) theirSort: MatSort;
  @ViewChild(MatPaginator, { static: true }) myPaginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) mySort: MatSort;

  readonly PEND_PROPOSAL_COL_OBJ = PEND_PROPOSAL_COL_OBJ;
  readonly PEND_PROPOSAL_DISPLAY = PEND_PROPOSAL_DISPLAY;

  constructor(
    private proposalService: ProposalService,
    public alertCtrl: AlertController,
    public toastController: ToastController,
    private authService: AuthService,
    public alertController: AlertController,
    private changeDetectorRefs: ChangeDetectorRef
  ) {

  }

  ionViewDidEnter() {

  }

  ngOnInit() {
    $('.menu-collapsed').click(function () {
      $(this).toggleClass('menu-expanded');
    });
    this.getUserProposal();
    this.getUserAcceptedProposals();
  }
  public getUserProposal(): void {
    this.proposalService.getUserProposals(this.authService.authState.email).subscribe((proposalsData: any[]) => {
      this.theirProposals = proposalsData;
      for (let i = 0; i < this.theirProposals.length; i++) {
        if (this.theirProposals[i] && this.theirProposals[i].proposalDate > this.today) {
          this.theirProposals.splice(i, 1);
        }
      }
      this.refreshTheirProposals(this.theirProposals);
    });
  }

  public getUserAcceptedProposals(): void {
    this.proposalService.getUserAcceptedProposals(this.authService.authState.email).subscribe((proposalsData: any[]) => {
      this.myProposals = proposalsData;
      for (let i = 0; i < this.myProposals.length; i++) {
        if (this.myProposals[i] && this.myProposals[i].proposalDate > this.today) {
          this.myProposals.splice(i, 1);
        }
      }
      this.refreshMyProposals(this.myProposals);
    });
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
  public refreshTheirProposals(dataArray: any): void {
    this.theirProposalDataSource = new MatTableDataSource<any>(dataArray);
    this.theirProposalDataSource.paginator = this.theirPaginator;
    this.theirProposalDataSource.sort = this.theirSort;
    this.changeDetectorRefs.detectChanges();
  }

  public refreshMyProposals(dataArray: any): void {
    this.myProposalDataSource = new MatTableDataSource<any>(dataArray);
    this.myProposalDataSource.paginator = this.myPaginator;
    this.myProposalDataSource.sort = this.mySort;
    this.changeDetectorRefs.detectChanges();
  }

  public changeStatus(statusValue: boolean, index: number) {
    const tmpSnapshot = this.proposalService.getUserProposalsSnapshot(this.authService.authState.email).subscribe((proposalsData: any[]) => {
      this.proposalService.updateProposal(statusValue, this.authService.authState.email, proposalsData[index].payload.doc.id);
      if (statusValue) {
        this.proposalService.acceptProposal(this.theirProposals[index], this.theirProposals[index].email);
      }
      this.theirProposals[index].status = statusValue;
      tmpSnapshot.unsubscribe();
    });
  }

  public options(index: number): void {
    const statusVal = this.returnStatus(index);
    this.changeStatus(statusVal, index);
  }

  public returnStatus(index: number): boolean {
    return this.theirProposals[index].status ? false : true;
  }

  async showAddress(index: number) {
    const alert = await this.alertController.create({
      header: 'Address',
      cssClass: 'center-alert',
      message: this.myProposals[index].street + ', ' + this.myProposals[index].city + this.myProposals[index].state + ', ' + this.myProposals[index].zipcode,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }


  // SORTING
  public applyTheirFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.theirProposalDataSource.filter = filterValue.trim().toLowerCase();

    if (this.theirProposalDataSource.paginator) {
      this.theirProposalDataSource.paginator.firstPage();
    }
  }

  public applyMyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.myProposalDataSource.filter = filterValue.trim().toLowerCase();

    if (this.myProposalDataSource.paginator) {
      this.myProposalDataSource.paginator.firstPage();
    }
  }
}
