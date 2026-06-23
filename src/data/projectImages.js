import focusTodo from '../assets/images/projects/focus-todo.png';
import catavento from '../assets/images/projects/catavento.png';
import compiler from '../assets/images/projects/compiler.png';
import jogo from '../assets/images/projects/jogo.png';
import tunewave from '../assets/images/projects/tunewave.png';
import fgts from '../assets/images/projects/fgts.png';
import randomColors from '../assets/images/projects/random-colors.png';
import drawing from '../assets/images/projects/drawing.png';
import portfolio from '../assets/images/projects/portfolio.png';
import projectDefault from '../assets/images/projects/project-default.svg';

const PROJECT_IMAGES = {
  'focus-todo': focusTodo,
  catavento,
  compiler,
  jogo,
  tunewave,
  fgts,
  'random-colors': randomColors,
  drawing,
  'draw-ing': drawing,
  portfolio,
};

export function getProjectImage(imgKey) {
  if (!imgKey) return projectDefault;
  return PROJECT_IMAGES[imgKey] ?? projectDefault;
}

export { projectDefault };
