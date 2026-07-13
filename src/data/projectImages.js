import focusTodo from '../assets/images/projects/focus-todo.webp';
import catavento from '../assets/images/projects/catavento.webp';
import compiler from '../assets/images/projects/compiler.webp';
import jogo from '../assets/images/projects/jogo.webp';
import tunewave from '../assets/images/projects/tunewave.webp';
import fgts from '../assets/images/projects/fgts.webp';
import randomColors from '../assets/images/projects/random-colors.webp';
import drawing from '../assets/images/projects/drawing.webp';
import portfolio from '../assets/images/projects/portfolio.webp';
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
