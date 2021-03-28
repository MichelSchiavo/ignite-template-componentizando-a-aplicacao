import { Button } from '../components/Button';

import '../styles/sidebar.scss';


interface SidebarProps {
  content: {
    selectedGenreId: number;
    setSelectedGenreId: any;
    genres: Array<{
      id: number;
      name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
      title: string;
    }>;
  }  
}

export function SideBar({content}: SidebarProps) {

  function handleClickButton(id: number) {
    content.setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {content.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={content.selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}