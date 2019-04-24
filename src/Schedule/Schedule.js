import React from 'react';
import theme from 'styles/theme';
import ComicsAndChatsList from './ComicsAndChatsList';
import DaysAndEpisodesList from './DaysAndEpisodesList';

import fakeContent from './fakeContent';

const Schedule = () => {
  return (
    <div style={styles.schedule}>
      <header style={styles.scheduleHeader}>
        <h1 style={styles.scheduleTitle}>
          This Week On <span style={styles.logo}>Dropout</span>
        </h1>
      </header>

      <DaysAndEpisodesList daysAndEpisodes={fakeContent.daysAndEpisodes} />

      <footer style={styles.footer}>
        <h5 style={styles.comicsAndChatsHeader}>
          Comics & Chats
        </h5>
        <ComicsAndChatsList comicsAndChats={fakeContent.comicsAndChats} />
      </footer>
    </div>
  );
};

const styles = {
  schedule: {
    width: 375,
    backgroundColor: theme.colors.grayDark,
  },
  scheduleHeader: {
    padding: 6,
    backgroundColor: theme.colors.yellow,
  },
  scheduleTitle: {
    margin: 0,
    color: theme.colors.black,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  logo: {
    padding: '0px 5px',
    backgroundColor: theme.colors.black,
    color: theme.colors.white,
    fontSize: 19,
  },
  footer: {
    padding: '3px 20px',
    fontSize: 10,
  },
  comicsAndChatsHeader: {
    display: 'inline',
    marginRight: 5,
    color: theme.colors.gray,
    fontSize: 11,
    fontWeight: 'bold',
    textDecoration: 'underline',
    textTransform: 'uppercase',
  },
};

export default Schedule;
