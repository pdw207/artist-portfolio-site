var space = 'ww5jjx9kyzaj';
var token =  'e03855c35e75526358e1ca6c3f92678acb782da0f242425e96f2697a0ea1b843';

var ContentfulImage = React.createClass({
  getInitialState: function() {
    return {url: this.props.placeholderUrl};
  },

  componentDidMount: function() {
    var contentfulAssetUrl = 'https://cdn.contentful.com/spaces/' + space + '/assets/' + this.props.assetId + '?access_token=' + token;
    $.get(contentfulAssetUrl, function(data) {
      this.setState({url: data.fields.file.url});
    }.bind(this))
  },

  render: function() {
    return <image className="blog-image" src={this.state.url} alt="" />
  }
});

var BlogList = React.createClass({
  getInitialState: function() {
    return {posts: []};
  },

  componentDidMount: function() {
    var contentfulUrl= 'http://cdn.contentful.com/spaces/' + space + '/entries?content_type=blogPost&order=-fields.date&limit=' + this.props.limit +'&access_token=' + token
    $.get(contentfulUrl, function(data) {
      this.setState({posts: data.items});
    }.bind(this))
  },

  render: function() {
    var blogList = this.state.posts.map(function(post){
      return (
        <a className="blog-link blog-post" alt={post.fields.date + "Post"}href={post.fields.link} target="_blank" key={post.sys.id}>
          <ContentfulImage assetId={post.fields.photo.sys.id}/>
          <p className="blog-title">{post.fields.title}</p>
          <p className="blog-date">{post.fields.date}</p>
        </a>
      )
    });
    return (
      <div>{blogList}</div>
    );
  }
});

var blogListSelector = document.getElementById('blog-list');
if (blogListSelector) {React.render( React.createElement(BlogList, {limit: 10}), blogListSelector)};

var blogHighlighSelector = document.getElementById('highlight-blog-post');
if (blogHighlighSelector) {React.render( React.createElement(BlogList, {limit: 1}), blogHighlighSelector)};

