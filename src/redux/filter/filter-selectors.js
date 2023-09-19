import { createSelector } from 'reselect';
import { selectContactsList } from '../contacts/contacts-selectors';

export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContactsList, selectFilter],
  (contactList, filter) => {
    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }
);
