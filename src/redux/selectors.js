import { createSelector } from 'reselect';

export const selectContactsList = state => state.contacts.list;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectFilteredContacts = createSelector(
  [selectContactsList, selectFilter],
  (contactList, filter) => {
    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }
);
