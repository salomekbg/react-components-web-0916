const Button = React.createClass({
  render() {
    return React.createElement('button', {}, 'Click me!');
  }
});

class Button extends React.Componenet {
  render() {
    return React.createElement('button', {}, 'Click me!');
  }
};

const nestedButtons = React.createElement('div', {}, [
  React.createElement(Button);
  React.createElement(Button);
])

const ShoppingList = React.createClass({
  render() {
    return React.createElement('ul', {},[
      React.createElement('li', {}, 'Bananas'),
      React.createElement('li', {}, 'Vanilla ice cream'),
      React.createElement('li', {}, 'Chocolate'),
    ]);
  }
});
