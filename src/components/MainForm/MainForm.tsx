import React, { useState } from 'react';
import Button from '../Button/Button';
import './MainForm.css';

interface Contact {
  name: string;
  email: string;
  phone: number;
}

const MainForm: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [newContact, setNewContact] = useState<Contact>({
    name: '',
    email: '',
    phone: 0,
  });

  const createContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (newContact.name && newContact.email && newContact.phone) {
      setContacts((prevContacts) => [...prevContacts, newContact]);
      setNewContact({ name: '', email: '', phone: 0 });
    }
  };

  return (
    <section className="main-form">
      <h1>Add a New Contact</h1>
      <form onSubmit={createContact}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            value={newContact.name}
            onChange={(e) =>
              setNewContact({ ...newContact, name: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={newContact.email}
            onChange={(e) =>
              setNewContact({ ...newContact, email: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            placeholder="Phone"
            onChange={(e) =>
              setNewContact({ ...newContact, phone: Number(e.target.value) })
            }
            value={newContact.phone ? newContact.phone.toString() : ''}
            required
          />
        </div>
        <div className="button-container">
          <Button
            label="Create"
            onClick={() => {}}
            style={{
              marginTop: '10px',
              width: '50%',
              backgroundColor: '#3e51ff',
              padding: '5px',
              color: 'white',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: "'background-color 0.3s'",
            }}
          />
        </div>
      </form>
      <ul>
        {contacts.length === 0 ? (
          <li className="no-contacts">No contacts yet</li>
        ) : (
          contacts.map((contact, index) => (
            <li key={index}>
              <strong>{contact.name}</strong> - <strong>{contact.email}</strong>{' '}
              - <strong>{contact.phone}</strong>
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

export default MainForm;
