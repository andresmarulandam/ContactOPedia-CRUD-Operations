import Button from '../Button/Button';

const RandomBox = () => {
  return (
    <div
      style={{
        width: '60%',
        display: 'flex',
        justifyContent: 'space-around',
        gap: '10px',
        padding: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        margin: 'auto',
      }}
    >
      <Button
        onClick={() => {}}
        label="Add Random Contact"
        style={{
          backgroundColor: 'green',
          color: 'white',
          padding: '10px 15px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
      />
      <Button
        onClick={() => {}}
        label=" Remove All "
        style={{
          backgroundColor: '#ff4757', // Color blanco
          color: '#333',
          padding: '10px 15px',
          borderRadius: '5px',
          border: '2px solid #ddd',
          cursor: 'pointer',
          transition: 'border-color 0.3s',
        }}
      />
    </div>
  );
};

export default RandomBox;
