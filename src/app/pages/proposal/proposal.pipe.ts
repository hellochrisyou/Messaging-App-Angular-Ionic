import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'proposalStatus' })
export class ProposalStatusPipe implements PipeTransform {
    transform(value: boolean): string {
        return (value ? 'Accepted' : 'Rejected');
    }
}