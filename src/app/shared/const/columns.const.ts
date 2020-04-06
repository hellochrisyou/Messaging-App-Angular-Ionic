import { ColumnObject } from '../interface/interface';

export const PEND_PROPOSAL_COL_OBJ: ColumnObject[] = [
    { columnId: 'Select', propertyName: 'Select' },
    { columnId: 'Date', propertyName: 'proposalDate' },
    { columnId: 'Name', propertyName: 'sender' },
    { columnId: 'Street', propertyName: 'street' },
    { columnId: 'City', propertyName: 'city' },
    { columnId: 'State', propertyName: 'state' },
    { columnId: 'Zipcode', propertyName: 'zipcode' },
    { columnId: 'Status', propertyName: 'status' }
];

export const PEND_PROPOSAL_DISPLAY = [
    'Select', 'Date', 'Name', 'Street', 'City', 'State', 'Zipcode', 'Status'
];


