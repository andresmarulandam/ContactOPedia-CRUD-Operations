import React from 'react';
import Button from '../Button/Button';
import './MainForm.css'; // Importar el archivo CSS

const MainForm: React.FC = () => {
  return (
    <section className="main-form">
      <h1>Add a New Contact</h1>
      <form>
        <div className="form-group">
          <input id="name" type="text" placeholder="Name" required />
        </div>
        <div className="form-group">
          <input id="email" type="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <input id="phone" type="tel" placeholder="Phone" required />
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
    </section>
  );
};

export default MainForm;
