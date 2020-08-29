require('@zeanium/core');
var argv = zn.convertArrayArgv(process.argv).argv;
var _path = argv['znui-react.path'] || '';
module.exports = require(_path + 'znui-react/webpack').component.production(function (config){
    return {
        externals: {
            "react": "React",
            "react-dom": "ReactDOM",
            "znui-react": "zr",
            "znui-react-button": "button",
            "znui-react-loader": "loader",
            "znui-react-input": "input",
            "znui-react-popup": "popup",
            "znui-react-selector": "selector"
        }
    };
});