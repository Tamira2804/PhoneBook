import React from 'react';
import './HomePage.scss';

const HomePage = () => (
  <div className="HomePage__container">
    <h1 className="HomePage__title">
      Welcome to Phonebook{' '}
      <span role="img" aria-label="welcome icon">
        💁‍♀️
      </span>
    </h1>
    <p className="Description__text">
      "Phonebook" is a reliable way to store, organize, and find your contacts.
      Our program allows you to easily manage your contact list and provides the
      following key features:
    </p>
    <ol className="Description__list">
      <li className="Description__item">
        <strong className="Feature">Contact Storage:</strong> Phonebook enables
        you to store important information about your contacts, such as names,
        phone numbers, email addresses, and much more.
      </li>
      <li className="Description__item">
        <strong className="Feature">Contact Organization:</strong> You can group
        your contacts into categories like "Family," "Friends," "Colleagues,"
        and others to quickly locate the information you need.
      </li>
      <li className="Description__item">
        <strong className="Feature">Additional Data:</strong> You can add
        additional information to your contact list, such as photos, birthdays,
        addresses, and notes.
      </li>
      <li className="Description__item">
        <strong className="Feature">Search and Sorting:</strong> Phonebook
        includes a search feature that allows you to quickly find contacts by
        name or other criteria. Additionally, you can sort your contacts based
        on various criteria for your convenience.
      </li>
    </ol>
    <p className="Description__text">
      With Phonebook, you can easily manage your contacts and quickly find the
      information you need, making your interactions with friends, family, and
      colleagues even more convenient and efficient.
    </p>
  </div>
);

export default HomePage;
