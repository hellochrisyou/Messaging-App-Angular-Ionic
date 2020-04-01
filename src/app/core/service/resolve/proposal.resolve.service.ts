import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../auth.service';
import { ProposalsStateService } from '../state/proposals.state.service';

@Injectable({ providedIn: 'root' })
export class ProposalResolver implements Resolve<any> {



    constructor(
        private proposalsStateService: ProposalsStateService,
        private authService: AuthService
    ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        this.proposalsStateService.setProposal(this.authService.authState.email);
    }
}
