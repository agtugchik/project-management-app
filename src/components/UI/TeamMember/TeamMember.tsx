import React from 'react';
import Github from '../../../assets/github.svg';
import Linkedin from '../../../assets/linkedin.svg';
import cl from './TeamMember.module.scss';
import Artur from '../../../assets/img/avatar_Artur.jpg';
import Nikita from '../../../assets/img/avatar_Nikita.png';
import Sergey from '../../../assets/img/avatar_Sergey.jpg';
import { teamMembers } from '../../../components/pages/WelcomePage/OurTeam/ourTeamData';
import { useTranslate } from '../../../hooks/useTranslate';

const TeamMember: React.FC = (): JSX.Element => {
  const T = useTranslate();

  return (
    <>
      {teamMembers.map((item) => {
        return (
          <div className={cl.item_container} key={item.name}>
            {item.name === teamMembers[0].name && (
              <img className={cl.photo} src={Artur} alt="Developer photo"></img>
            )}
            {item.name === teamMembers[1].name && (
              <img className={cl.photo} src={Sergey} alt="Developer photo"></img>
            )}
            {item.name === teamMembers[2].name && (
              <img className={cl.photo} src={Nikita} alt="Developer photo"></img>
            )}
            <h4 className={cl.name}>{T(`${item.name}`)}</h4>
            <div className={cl.role}>{T(`${item.role}`)}</div>
            <ul className={cl.icons_list}>
              <li className={cl.item_icon}>
                <a
                  className={cl.github_link}
                  href={item.githubLink}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img className={cl.icon} src={Github} alt="GitHub"></img>
                  <div className={cl.icon_title}>{item.githubNickname}</div>
                </a>
              </li>
              <li className={cl.item_icon}>
                <a
                  className={cl.linkedin_link}
                  href={item.linkedinLink}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img className={cl.icon} src={Linkedin} alt="Linkedin"></img>
                </a>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default TeamMember;
