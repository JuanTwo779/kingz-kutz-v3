import React from "react";

import { SubHeading } from "../../components";
import { data, images } from "../../constants";

import './Rules.css';

const currentYear = new Date().getFullYear().toString();
const ruleYear = currentYear + ' policies';

const RuleCard = ( {rule: { icon, title, comment}} ) => (
    <div className='app__rules_list-card'>
      <div className='icon'>{icon}</div>
      <div className='app__rules_list-card_content'>
        <p className='p__cormorant' style={{color: 'var(--color-white)'}}>{title}</p>
        <p className='p__opensans'>{comment}</p>
      </div>
    </div>
  );

const Rules = () => (
    <div className='app__bg_2 app__wrapper section__padding' id='rules'>

        <div className='app__wrapper_info'>
            <SubHeading title={ruleYear}/>
            <h1 className='headtext__cormorant'>Guidelines</h1>

            <div className='app__rules_list'>
                {data.rules.map((rule) => <RuleCard rule={rule} key={rule.title}/>)};
            </div>
        </div>

        <div className='app__wrapper_img'>
            <img className="box__shadow" src={images.outdoor} alt="Entrance to barber. Glen Waverley" />
        </div>

    </div>
);

export default Rules;