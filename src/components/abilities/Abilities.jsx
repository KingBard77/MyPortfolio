// Abilities Section
import React from 'react'
import './abilities.css'

// Section Icon
import { BiCodeCurly } from 'react-icons/bi';
import { HiOutlineCloud } from 'react-icons/hi';
import { FaTools, FaNetworkWired, FaServer } from 'react-icons/fa';
import { BsDatabase } from 'react-icons/bs';
import {BiDownArrow} from 'react-icons/bi'
import { VscServerProcess } from 'react-icons/vsc';

// Section Conf
import data_abilities from './conf/data_abilities'

const abilities = () => {
    const tabIcons = {
        frontend: <BiCodeCurly />,
        backend: <VscServerProcess />,
        infrastructure: <FaServer />,
        cloud: <HiOutlineCloud />,
        network: <FaNetworkWired />,
        database: <BsDatabase />,
        tools: <FaTools />,
    };

    return (
      <section id='abilities'>
        <h5>My Abilities</h5>
        <h2>My Experience</h2>

        <div className="abilities__container container">
          <div className="skills__tabs">
            {data_abilities.map((group, idx) => (
                <div
                    className={`skills__header ${idx === 0 ? 'skills__active' : ''}`}
                    data-target={`#${group.id}`}
                    key={group.id}
                >
                  <div className='skills__icon'>{tabIcons[group.id]}</div>
                  <div>
                    <h3 className='skills__title'>{group.title}</h3>
                    <span className='skills__subtitle'>{group.subtitle}</span>
                  </div>
                  <BiDownArrow className='skills__arrow' />
                </div>
            ))}
          </div>

          <div className="skills__content" data-centent>
            {data_abilities.map((group, idx) => (
                <div
                    className={`skills__group ${idx === 0 ? 'skills__active' : ''}`}
                    data-content
                    id={group.id}
                    key={group.id}
                >
                  <div className="skills__list grid">
                    {group.skills.map((skill, i) => (
                        <div className="skills__data" key={i}>
                          <div className="skills__titles">
                            <span className='skills__data_icon'>{skill.icon}</span>
                            <h3 className='skills__name'>{skill.name}</h3>
                            <span className='skills__number'>{skill.level}</span>
                          </div>
                          <div className="skills__bar">
                            <span className='skills__percentage' style={{ width: `${skill.percentage}%` }}></span>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default abilities;
