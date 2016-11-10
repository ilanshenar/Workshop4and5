import React from 'react';
import {unixTimeToString} from '../util';
import {Link} from 'react-router';
import {likeComment, unlikeComment} from '../server'


export default class Comment extends React.Component {

constructor(props) {
super(props);
// The FeedItem's initial state is what the Feed passed to us.
this.state = props.data;
}

handleLikeClick(clickEvent) {
	clickEvent.preventDefault();
	if (clickEvent.button === 0) {
		var callbackFunction = (updatedLikeCounter) => {
		this.setState({likeCounter: updatedLikeCounter});
	};
	
	if (this.didUserLike()) {
		// User clicked 'unlike' button.
		unlikeComment(this.props.comment, this.props.commentIndex, 4, callbackFunction);
		} else {
		// User clicked 'like' button.
		likeComment(this.props.comment, this.props.commentIndex, 4, callbackFunction);
		}
	}
}
/**
* Returns 'true' if the user liked the item.
* Returns 'false' if the user has not liked the item.
*/
didUserLike() {
	var likeCounter = this.state.likeCounter;
	var liked = false;
	// Look for a likeCounter entry with userId 4 -- which is the
	// current user.
	for (var i = 0; i < likeCounter.length; i++) {
		if (likeCounter[i]._id === 4) {
			liked = true;
			break;
			}
		}
	return liked;
}

render() {
var likeButtonText = "Like";
if (this.didUserLike()) {
likeButtonText = "Unlike";
}
return (
<div>
<div className="media-left media-top">
PIC
</div>
<div className="media-body">
<Link to={"/profile/" + this.props.author._id}> {this.props.author.fullName}
</Link>
{this.props.children}
<br />
<a href="#" onClick={(e) => this.handleLikeClick(e)}>
{likeButtonText}
</a> · <a href="#">Reply</a> · <span className="glyphicon glyphicon-thumbs-up"></span> ({this.state.likeCounter.length}) · {unixTimeToString(this.props.postDate)}
</div>
</div>
)

}
}






