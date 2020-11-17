import movieView from '../views/movieView';
const viewHelper = (id) => {
  switch (id) {
    case 'movie-search':
      return movieView.movieSearch();
    default:
      return movieView.movieHome();
  }
};

const viewListener = (view) => {
  viewHelper(view);
};

export default { viewListener };
