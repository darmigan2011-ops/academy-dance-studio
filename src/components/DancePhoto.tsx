import type { photos } from '../data';

type DancePhotoProps = {
  photo: (typeof photos)[keyof typeof photos];
  className?: string;
  loading?: 'eager' | 'lazy';
  note?: string;
};

export function DancePhoto({ photo, className = '', loading = 'lazy', note }: DancePhotoProps) {
  return (
    <figure className={`dance-photo ${className}`}>
      <div className="dance-photo__image-wrap">
        <img src={photo.src} alt={photo.alt} loading={loading} />
      </div>
      {note && <p className="dance-photo__note">{note}</p>}
      <figcaption className="dance-photo__credit">
        <span>
          Photograph by <a href={photo.photographerUrl} target="_blank" rel="noreferrer">{photo.photographer}</a>
        </span>
        <span>
          <a href={photo.sourceUrl} target="_blank" rel="noreferrer">Source</a>
          {' · '}
          <a href={photo.licenseUrl} target="_blank" rel="noreferrer">{photo.license}</a>
        </span>
      </figcaption>
    </figure>
  );
}
