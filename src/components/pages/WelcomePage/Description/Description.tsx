import { useTranslate } from '../../../../hooks/useTranslate';
import React from 'react';
import cl from './Description.module.scss';
import Benefit from '../../../../components/UI/Benefit/Benefit';

const Description: React.FC = (): JSX.Element => {
  const T = useTranslate();

  return (
    <section className={cl.container}>
      <h4 className={cl.subtitle}>{T('WelcomePage.descriptSubtitle')}</h4>
      <h3 className={cl.declaration_title}>{T('WelcomePage.descriptDeclarationTitle')}</h3>
      <p className={cl.declaration_content}>{T('WelcomePage.descriptDeclarationContent')}</p>
      <div className={cl.benefits_container}>
        <hr className={cl.line} />
        <h2 className={cl.benefits_title}>{T('WelcomePage.descriptBenefitsTitle')}</h2>
        <div className={cl.benefits_items_container}>
          <Benefit />
        </div>
        <hr className={cl.line} />
      </div>
    </section>
  );
};

export default Description;
