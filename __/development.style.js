require('@zeanium/core');
var argv = zn.convertArrayArgv(process.argv).argv;
var _path = argv['znui-react.path'] || '';
module.exports = require(_path + 'znui-react/webpack').component.developmentStyle(function (config){
    return {
        externals: {
            "react": "React",
            "react-dom": "ReactDOM",
            "znui-react": "zr",
            "znui-react-icon": "icon",
            "znui-react-button": "button",
            "znui-react-loader": "loader"
        }
    };
});