const React = require('react');
const style = require('./text.scss');
const cn = require('classnames');

const Text = ({ type = 'normal', children }) => (
  <p className={cn(style.text, style.bold)}>{children}</p>
);

module.exports = Text;
