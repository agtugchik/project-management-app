import React from 'react';
import Description from './Description/Description';
import OurTeam from './OurTeam/OurTeam';
import Title from './Title/Title';
import cl from './WelcomePage.module.scss';

const WelcomePage: React.FC = (): JSX.Element => {
  return (
    <main className={cl.container}>
      <div className={cl.wrapper}>
        <Title />
        <Description />
        <OurTeam />
      </div>
    </main>
  );
};

export default WelcomePage;
