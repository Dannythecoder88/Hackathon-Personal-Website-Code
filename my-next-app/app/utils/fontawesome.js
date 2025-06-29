// Import the Font Awesome core styles
import { library } from '@fortawesome/fontawesome-svg-core';

// Import specific icons you want to use
import { 
  faGithub, 
  faLinkedin, 
  faFacebook, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';

// Add the imported icons to the library
library.add(
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram
);

export default library;
