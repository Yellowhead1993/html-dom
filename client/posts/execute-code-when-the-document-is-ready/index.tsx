import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
~~~ javascript
const ready = function(cb) {
    // Check if the \`document\` is loaded completely
    (document.readyState === 'complete')
        ? cb()
        : document.addEventListener('DOMContentLoaded', cb);
};

// Usage
ready(function() {
    // Do something when the document is ready
    ...
});
~~~
`}
/>
    );
};
