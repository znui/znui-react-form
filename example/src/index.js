require('znui-react');
require('../../src/index.less');
require('./index.less');
var React = znui.React || require('react');
var form = require('../../src/index');
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