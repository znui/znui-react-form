require('@zeanium/core');
var node_path = require('path');
var argv = zn.convertArrayArgv(process.argv).argv;
var _path = argv['znui-react.path'] || '';
module.exports = require(_path + 'znui-react/webpack').component.example('production', function (config) {
    console.log(config);
    return {
        resolve: {
            alias: {
                "znui-react": node_path.resolve(__dirname, '../../znui-react'),
                "znui-react-icon": node_path.resolve(__dirname, '../../znui-react-icon'),
                "znui-react-input": node_path.resolve(__dirname, '../../znui-react-input'),
                "znui-react-button": node_path.resolve(__dirname, '../../znui-react-button'),
                "znui-react-loader": node_path.resolve(__dirname, '../../znui-react-loader'),
                "znui-react-popup": node_path.resolve(__dirname, '../../znui-react-popup'),
                "znui-react-selector": node_path.resolve(__dirname, '../../znui-react-selector')
            }
        }
    };
});