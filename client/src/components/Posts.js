import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts, deletePost} from '../actions/posts';
import { Container, Grid, Header, Card, Image, Button} from 'semantic-ui-react';

class Posts extends React.Component {

  componentDidMount() {
    this.props.dispatch(getPosts())
  }
  Remove = (id) => {
    const { dispatch } = this.props
    dispatch(deletePost(id))
  }

  posts = () => {
    return this.props.posts.map( post =>
      <Card key={post.id}>
        <Card.Content>
          <Card.Header>
            {post.name}
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
            {post.body}
        </Card.Content>
        <div>
          <Link to={`/posts/${post.id}`}><Button color="green" basic >View Post</Button></Link>
          <Button color="red" basic onClick={() => this.Remove(post.id)}>Delete Post</Button>
        </div>
    </Card>
    )
  }

  render() {
    return (
      <Container textAlign="center">
        <Header as="h3" textAlign="center">Posts</Header>
          <Card.Group itemsPerRow={2} textAlign="center">
           { this.posts() }
          </Card.Group>
        </Container>
      )
    }
  }
  const mapStateToProps = (state) => {
    return { posts: state.posts }
  }
export default connect(mapStateToProps)(Posts)
