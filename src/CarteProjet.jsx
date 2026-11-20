import styles from './CarteProjet.module.css';

function CarteProjet({ titre, technologies, description }) {
  return (
    <article className={styles.carte}>
      <h2 className={styles.titre}>{titre}</h2>
      <p><strong>Technologies :</strong> {technologies}</p>
      <p>{description}</p>
    </article>
  );
}

export default CarteProjet;
