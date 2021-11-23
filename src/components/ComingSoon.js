import './ComingSoon.css';
import { useMediaQuery } from 'react-responsive';

function ComingSoon() {
  const isMobile = useMediaQuery({ maxWidth: 480 });

  return (
    <div className={`coming-soon ${isMobile ? "side-padding-mobile" : "side-padding"}`}>
      <p className="coming-soon-text monospace-font">
        Launching December 1, 2021. 1pm PT.
      </p>
      <div className="cta">
        <a
          className="cta-button"
          href="https://discord.gg/TXgaBwYZep"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join our Discord
        </a>
      </div>
    </div>
  );
};

export default ComingSoon;
