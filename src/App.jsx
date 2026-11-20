import CarteProjet from './CarteProjet';
import Encadre from './Encadre';

function App() {
  return (
    <main className="conteneur">
      <h1>Mes projets</h1>

      <Encadre>
        <p>
          Bonjour! Je suis étudiant en informatique et je m'intéresse particulièrement 
          au développement d'applications web interactives et d'outils créatifs. 
          Voici un aperçu de mes projets et des idées que j'aimerais développer.
        </p>
      </Encadre>

      <div className="grille-projets">
        <CarteProjet
          titre="Application de clipping vidéo"
          technologies="React, JavaScript, FFmpeg, CSS"
          description="Une application web permettant de découper rapidement les meilleurs moments d'une vidéo et de les exporter au format court pour les réseaux sociaux."
        />

        <CarteProjet
          titre="Générateur de sous-titres dynamiques"
          technologies="React, JavaScript, Web Speech API, CSS"
          description="Un outil complémentaire qui transcrit automatiquement l'audio d'un clip vidéo et génère des sous-titres personnalisables à l'écran."
        />
      </div>
    </main>
  );
}

export default App;
