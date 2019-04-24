import React from 'react';
import theme from 'styles/theme';
import Schedule from './Schedule';

const App = () => {
  return (
    <div style={styles.app}>
      <div style={styles.column}>
        <h1>
          React Component
        </h1>
        <Schedule />
      </div>
      <div style={styles.column}>
        <h1>
          Existing Image
        </h1>
        <img src='/dropout_schedule.jpg' alt='' />
      </div>
    </div>
  );
};

const styles = {
  app: {
    display: 'flex',
    height: '100%',
    backgroundColor: theme.colors.black,
    color: theme.colors.white,
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
}

export default App;
