var React = require("react");
var Actions = require("../actions");
var Reflux = require("reflux");
var ImageStore = require("../stores/image-store");


module.exports = React.createClass({
    mixins: [Reflux.listenTo(ImageStore, "onChange")],
    render: function(){
        return <div>
            I am a div with ID: {this.props.params.id}
        </div>
    },
    getInitialState: function(){
        return {
            images: []
        };
    },
    componentWillMount: function(){
        Actions.getImages(this.props.params.id);
    },
    onChange:   function(event, images){
        this.setState({images:images});
    }
});