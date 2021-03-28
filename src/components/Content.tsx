import { MovieCard } from '../components/MovieCard';

import '../styles/content.scss';
import { Header } from './Header';

interface ContentProps {
  content: {
    selectedGenre: {
      id: number;
      name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
      title: string;
    };
    movies : Array<any>;
  }  
}

export function Content({content}: ContentProps) {
  // Complete aqui
  return (
<div className="container">

  <Header title={content.selectedGenre.title} />

    <main>
      <div className="movies-list">
        {content.movies.map(movie => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
  )  
}