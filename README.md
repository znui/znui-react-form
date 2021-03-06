# znui-react-form
Form Component.

[![npm](https://img.shields.io/npm/v/znui-react-form.svg)](https://www.npmjs.com/package/znui-react-form)
[![npm](https://img.shields.io/npm/dm/znui-react-form.svg)](https://www.npmjs.com/package/znui-react-form)

## Demo

[Take a look at the demo](https://znui.github.io/znui-react-form/example/www/index.html)

## Installation

```bash
npm install znui-react-form -s
```

## Usage

```javascript

var ReactDOM = require('react-dom');
var form = require('znui-react-form');

var inputs = require('znui-react-input');
var selector = require('znui-react-selector');


znui.react.createApplication({
    render: <div className="form-container">
        <form.Form data={[
            { label: '姓名', name: 'name', input: inputs.Input },
            { label: '学校', name: 'school', input: selector.Select, data: [ { value: 1, text: 'A'}, { value: 2, text: 'B'} ] },
            { label: '兴趣', name: 'hos', input: selector.Checkboxs, value: [1], data: [ { value: 1, text: 'A'}, { value: 2, text: 'B'} ] },
            { label: '性别', name: 'sex', input: selector.Radio, value: 1, data: [ { value: 1, text: 'A'}, { value: 2, text: 'B'} ] }
        ]} />
    </div>
});
```

## License

MIT