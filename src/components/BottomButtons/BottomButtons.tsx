import Button from '../Button/Button';

const BottomButtons = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        padding: '15px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra suave
      }}
    >
      <Button
        label="Favorite Contacts"
        onClick={() => {}}
        style={{
          width: '60%',
          backgroundColor: '#6c757d',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
        }}
      />
      <Button
        label="General Contact"
        onClick={() => {}}
        style={{
          width: '60%',
          backgroundColor: '#6c757d',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
        }}
      />
    </div>
  );
};

export default BottomButtons;
