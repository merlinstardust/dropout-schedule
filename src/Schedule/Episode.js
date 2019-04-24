import React from 'react';
import theme from 'styles/theme';

const Episode = ({showName, name, image, isSeasonPremiere, url}) => {
  return (
    <a href={url || '#'} style={styles.link}>
      <div style={styles.imageColumn}>
        <img {...image} style={styles.image} />
      </div>
      <div style={styles.nameColumn}>
        <h3 style={styles.showName}>
          {showName}
        </h3>
        <h4 style={styles.episodeName}>
          {name}
        </h4>
        {isSeasonPremiere &&
          <span style={styles.premiere}>
            Season Premiere
          </span>
        }
      </div>
    </a>
  );
};

const styles = {
  link: {
    display: 'flex',
    borderBottom: `1px solid ${theme.colors.black}`,
    textDecoration: 'none',
  },
  imageColumn: {
    width: 60,
    flexShrink: 0,
  },
  image: {
    display: 'block',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    borderRight: `1px solid ${theme.colors.black}`,
  },
  nameColumn: {
    position: 'relative',
    width: '100%',
    padding: '2px 7px',
  },
  showName: {
    margin: 0,
    color: theme.colors.white,
    fontSize: 11,
  },
  episodeName: {
    margin: 0,
    color: theme.colors.grayLight,
    fontSize: 8,
  },
  premiere: {
    position: 'absolute',
    top: 'calc(50% - 7px)',
    right: 10,
    padding: '2px 5px',
    backgroundColor: theme.colors.black,
    color: theme.colors.white,
    fontSize: 8,
    textTransform: 'uppercase',
  },
};

export default Episode;
