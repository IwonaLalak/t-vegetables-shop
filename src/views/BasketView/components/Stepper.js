import React from 'react';

const Stepper = ({active, stages, handleClickStep}) => {

    const renderStage = (stages, active) => {

        let stage = stages.find(stage => stage.step === active);

        if (stage) {
            return stage.content
        } else return <div>Cannot reach stage</div>


    };

    return (
        <div>
            <ul>
                {
                    stages.map(stage => <li
                        onClick={() => handleClickStep(stage.step)}
                        style={active === stage.step ? {color: 'red'} : {}}
                    >step {stage.step}</li>)
                }
            </ul>
            <div>
                {
                    renderStage(stages, active)
                }
            </div>
            <div>
                <button disabled={active === stages[0].step}
                        onClick={() => handleClickStep(active - 1)}>previous
                </button>
                <button disabled={active === stages[stages.length - 1].step}
                        onClick={() => handleClickStep(active + 1)}>next
                </button>
            </div>
        </div>
    );
};

export default Stepper;