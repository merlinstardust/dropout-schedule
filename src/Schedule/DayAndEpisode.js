import React from 'react';
import theme from 'styles/theme';
import Episode from './Episode';

const DayAndEpisodes = ({timestamp, episodes}) => {
  const dayName = dayNames[timestamp.getDay()];
  const dayNumber = timestamp.getDate();
  return (
    <section style={styles.section}>
      <div style={styles.dayColumn}>
        <h2 style={styles.day}>
          {dayName}
          <strong style={styles.dayNumber}>
            {dayNumber}
          </strong>
        </h2>
      </div>
      <div style={styles.episodesColumn}>
        {episodes.map(({showName, name, image, url, isSeasonPremiere}) =>
          <Episode
            key={showName + name}
            showName={showName}
            name={name}
            image={image}
            isSeasonPremiere={isSeasonPremiere}
            url={url}
          />
        )}
      </div>
    </section>
  );
};

const dayNames = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
];

const styles = {
  section: {
    display: 'flex',
  },
  dayColumn: {
    flexShrink: 0,
    width: 60,
    borderBottom: `1px solid ${theme.colors.black}`,
  },
  day: {
    margin: 0,
    fontSize: 10,
    lineHeight: 1,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  dayNumber: {
    display: 'block',
    fontSize: 24,
    fontWeight: 'bold',
  },
  episodesColumn: {
    width: '100%',
  },
};

export default DayAndEpisodes;
