import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store'; // Update the path accordingly
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import '../styles.css';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>
          <h1 className="app-title">Phonebook</h1>
          <ContactForm />
          <h2 className="app-subtitle">Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
