import { ColumnObject } from '../interface/interface';

export const PEND_PROPOSAL_COL_OBJ: ColumnObject[] = [
    { columnId: 'Select', propertyName: '' },
    { columnId: 'Reject', propertyName: '' },
    { columnId: 'Name', propertyName: 'sender' },
    { columnId: 'Street', propertyName: 'street' },
    { columnId: 'City', propertyName: 'city' },
    { columnId: 'State', propertyName: 'state' },
    { columnId: 'Zipcode', propertyName: 'zipcode' },
    { columnId: 'Date', propertyName: 'proposalDate' },
];

export const HISTORY_PROPOSAL_COL_OBJ: ColumnObject[] = [
    { columnId: 'Street', propertyName: 'street' },
    { columnId: 'City', propertyName: 'city' },
    { columnId: 'State', propertyName: 'state' },
    { columnId: 'Zipcode', propertyName: 'zipcode' },
    { columnId: 'Date', propertyName: 'proposalDate' },
];

export const PEND_PROPOSAL_DISPLAY = [
    'Select', 'Name', 'Team', 'Position', 'Min Price', 'Avg Price', 'Max Price'
];

export const HISTORY_PROPOSAL_DISPLAY = [
    'Name', 'Team', 'Position', 'Min Price', 'Avg Price', 'Max Price'
];

