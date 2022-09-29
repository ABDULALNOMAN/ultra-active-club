import React from 'react';

const Question = () => {
    return (
        <div>
            <dl>
                <dt>how does react work</dt>
                <dd>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible.</dd>
                <dt>What is the difference between props and state?</dt>
                <dd>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</dd>
                <dt>What is Useeffect used for?</dt>
                <dd>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers.</dd>
            </dl>
        </div>
    );
};

export default Question;