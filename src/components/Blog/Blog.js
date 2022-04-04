import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>What is Context API and how it works</h2>
            <p>
                The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
            </p>
            <h2>Difference between inline,block and inline-block elements.</h2>
            <p>
                <h3>Inline:</h3>
                1.The element doesn't start on a new line and only occupy just the width it requires.<br />
                2. You can't set the width or height.<br />

                <h3>Inline-block:</h3>
                1.It's formatted just like the inline element, where it doesn't start on a new line.<br />
                2.BUT, you can set width and height values.<br />

                <h3>Block:</h3>
                1.The element will start on a new line and occupy the full width available.<br />
                2.And you can set width and height values.
            </p>
        </div>
    );
};

export default Blog;