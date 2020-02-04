import React from 'react';
import {ActionButton} from "../Buttons/Buttons";
import {ArrowLeft, ArrowRight} from "../../_utilities/icons/FontAwesome";

const Stepper = ({active, stages, handleClickStep}) => {

    const renderStage = (stages, active) => {

        let stage = stages.find(stage => stage.step === active);

        if (stage) {
            return stage.content
        } else return <div>Cannot reach stage</div>

    };

    return (
        <div id={'Stepper'}>
            <ul>
                {
                    stages.map(stage =>
                        <>
                            <li className={active === stage.step ? 'step-item active' : 'step-item'}
                                onClick={() => handleClickStep(stage.step)}
                            >
                                <h1>
                                    {stage.title}
                                </h1>
                                <h2>
                                    {stage.subtitle}
                                </h2>
                            </li>
                            <li className={'step-line'}></li>
                        </>
                    )
                }
            </ul>
            <div>
                {
                    renderStage(stages, active)
                }
            </div>
            <div id={'button-container'}>
                <ActionButton
                    type={'button'}
                    text={'prev step'}
                    theme={'default'}
                    icon={<ArrowLeft/>}
                    disabled={active === stages[0].step}
                    onClick={() => handleClickStep(active - 1)}
                />
                <ActionButton
                    type={'button'}
                    text={'next step'}
                    theme={'default'}
                    isIconRight={true}
                    icon={<ArrowRight/>}
                    disabled={active === stages[stages.length - 1].step}
                    onClick={() => handleClickStep(active + 1)}
                />
            </div>
        </div>
    );
};

export default Stepper;