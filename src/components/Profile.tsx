import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css'

export function Profile () {
    const { level} = useContext(ChallengesContext)


  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/61991172?s=460&u=83130f85d0af1735f7d589145003ea05fa058b78&v=4"
        alt="Gabriel Pereira"
      />
      <div>
        <strong>Gabriel Pereira</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}