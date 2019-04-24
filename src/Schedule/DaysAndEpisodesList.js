import React from 'react';
import DayAndEpisode from './DayAndEpisode';

const DaysAndEpisodesList = ({daysAndEpisodes}) => {
  return (
    <React.Fragment>
      {daysAndEpisodes.map(({timestamp, episodes}) => (
        <DayAndEpisode key={timestamp.getTime()} timestamp={timestamp} episodes={episodes} />
      ))}
    </React.Fragment>
  );
};

export default DaysAndEpisodesList;
