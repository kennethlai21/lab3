var React = require('react');

var MyComponent = React.createClass({
    render: function(){
        return (
            <h1>Hello, {this.props.name}!</h1>
    }
});

React.render(<HelloMessage subject='Nerd'/>, document.body);