import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const media = (data) => {
  const mediaLink = [data.Github, data.LinkedIn, data.Instagram];
  const medias = [];

  if (mediaLink[0] !== undefined) {
    medias.push(
      <i>
        <a href={mediaLink[0]} target="blank">
          <FontAwesomeIcon icon={faGithub} className="icon fa-lg" />
        </a>
      </i>
    );
  }
  if (mediaLink[1] !== undefined) {
    medias.push(
      <a href={mediaLink[1]} target="blank">
        <FontAwesomeIcon icon={faLinkedin} className="icon fa-lg" />
      </a>
    );
  }
  if (mediaLink[2] !== undefined) {
    medias.push(
      <a href={mediaLink[2]} target="blank">
        <FontAwesomeIcon icon={faInstagram} className="icon fa-lg" />
      </a>
    );
  }

  return medias;
};

export default media;
