import { useTranslate } from '../../../hooks/useTranslate';
import React from 'react';
import cl from './Benefit.module.scss';
import team from '../../../assets/team-flexibility-150x150.svg';
import medal from '../../../assets/medal-150x150.svg';
import clock from '../../../assets/clock.svg';
import customer from '../../../assets/customer-satisfaction-150x150.svg';
import { benefits } from '../../../components/pages/WelcomePage/Description/benefitsData';

const Benefit: React.FC = (): JSX.Element => {
  const T = useTranslate();

  return (
    <>
      {benefits.map((item) => {
        return (
          <div className={cl.container} key={item.title}>
            <div className={cl.icon_wrapper}>
              {item.title === benefits[0].title && (
                <img className={cl.icon} src={team} alt="Benefits icon"></img>
              )}
              {item.title === benefits[1].title && (
                <img className={cl.icon} src={medal} alt="Benefits icon"></img>
              )}
              {item.title === benefits[2].title && (
                <img className={cl.icon} src={clock} alt="Benefits icon"></img>
              )}
              {item.title === benefits[3].title && (
                <img className={cl.icon} src={customer} alt="Benefits icon"></img>
              )}
            </div>
            <div className={cl.content_container}>
              <h3 className={cl.benefit_title}>{T(`${item.title}`)}</h3>
              <p className={cl.benefit_content}>{T(`${item.description}`)}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Benefit;
