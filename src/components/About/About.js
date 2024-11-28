import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './About.css';

const About = () => (
  <div className='about center'>
    <h1>
      Hi, I am <span className='about__name'>Atharv Maske</span>.
    </h1>

    <h2 className='about__role'>Front-end Dev.</h2>
    <p className='about__desc'>I am a frontend developer and a second-year student, passionate about building user-friendly web applications. I am dedicated to enhancing my problem-solving skills, which I believe are essential for writing efficient code and tackling complex programming challenges.</p>

    <div className='about__contact center'>
      <a href='https://blush-roseanna-29.tiiny.site'>
        <span type='button' className='btn btn--outline'>
          Resume
        </span>
      </a>

      <a
        href='https://github.com/atharvmaske'
        aria-label='github'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>

      <a
        href='https://www.linkedin.com/in/atharv-maske-61a983257/'
        aria-label='linkedin'
        className='link link--icon'
      >
        <LinkedInIcon />
      </a>
    </div>
  </div>
);

export default About;
