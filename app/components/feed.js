import React from 'react';
import FeedItem from './feeditem';
import StatusUpdateEntry from './statusupdateentry';

export default class NewsFeed extends React.Component {
render() {
return (
<div>
<StatusUpdateEntry />
<FeedItem />
</div>
)
}
}