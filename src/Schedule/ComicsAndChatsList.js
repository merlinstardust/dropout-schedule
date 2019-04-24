import React from 'react';
import theme from 'styles/theme';

const ComicsAndChatsList = ({comicsAndChats = []}) => {
  return (
    <ul style={styles.ul}>
      {comicsAndChats.map(({name, type}, index) =>
        <li key={name} style={styles.li}>
          {name} ({type}){index < comicsAndChats.length - 1 && ', '}
        </li>
      )}
    </ul>
  );
};

const styles = {
  ul: {
    display: 'inline',
    padding: 0,
    listStyle: 'none',
    color: theme.colors.grayMedium,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  li: {
    display: 'inline',
  },
};

export default ComicsAndChatsList;
