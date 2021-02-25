import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}> 
      <img src="https://github.com/edsonborge.png" alt="Edson Borge"/>
      <div>
        <strong>Edson Borge</strong>
        <p>Level 1</p>
      </div>
    </div>
  );
}