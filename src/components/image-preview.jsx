var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;


module.exports = React.createClass({
    getInitialState:    function(){
        return {hovering:false};
    },
   render: function(){
       return <Link
           to={"images/" + this.props.id}
           onMouseEnter={this.handleMouseEnter}
           onMouseLeave={this.handleMouseLeave}
           className="image-preview"
       >
           {this.state.hovering && this.props.animated? this.video():this.image()}
           {!this.state.hovering && this.props.animated? this.icon():null}
           {this.state.hovering? this.inset():null}
       </Link>
   },
    image: function(){
        //preview thumbnail provided by imgur
        var link = "http://i.imgur.com/" + this.props.id + "h.jpg";
        return <img src={link} alt={this.props.title}/>
    },
    icon:   function(){
      return <span className="glyphicon glyphicon-play"></span>
    },
    video:  function(){
        return <video
            preload="auto"
            loop="loop"
            autoPlay="autoplay"
            webkit-playsinline
        >
            <source src={this.props.mp4} type="video/mp4" />
        </video>
    },
    inset:function(){
        return <div className="inset">
            Views:{this.props.views}
            <br/>
            UpVotes:{this.props.ups}
        </div>
    },
    handleMouseEnter:   function(){
        this.setState({hovering:true});
    },
    handleMouseLeave:   function(){
        this.setState({hovering:false});
    }
});