var React = require("react");
var Actions = require("../actions");
var Reflux = require("reflux");
var ImageStore = require("../stores/image-store");
var ImagePreview = require("./image-preview");


module.exports = React.createClass({
    mixins: [Reflux.listenTo(ImageStore, "onChange")],
    render: function(){
        return <div className="topic">
            {this.renderImages()}
        </div>
    },
    renderImages: function(){
        return this.state.images.slice(0,20).map(function(image){
            return <ImagePreview key={image.id} {...image}></ImagePreview>
        })
    },
    getInitialState: function(){
        return {
            images: []
        };
    },
    componentWillReceiveProps: function(nextProps){
        Actions.getImages(nextProps.params.id);
    },
    componentWillMount: function(){
        Actions.getImages(this.props.params.id);
    },
    onChange:   function(event, images){
        this.setState({images:images});
    }
});