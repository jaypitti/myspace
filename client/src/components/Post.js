
import React from 'react';
import { connect } from 'react-redux';
import { Container, Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { updatePost } from '../actions/posts';
import PostForm from './PostForm';

class Post extends React.Component {
  state = { showForm: false }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
    console.log(this.state.showForm)
  }

  render(){
    const { showForm } = this.state;
    const { post = {} } = this.props;
    return(
        <Container>
          <Button color="green" basic onClick={this.toggleForm}>Edit Post</Button>
          { showForm ? <PostForm  {...post} closeForm={this.toggleForm} />
          :
          <div>
            <Link to="/">View All Apps</Link>
              <Table>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Name</Table.Cell>
                    <Table.Cell>{post.name}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Body</Table.Cell>
                    <Table.Cell>{post.body}</Table.Cell>
                  </Table.Row>
                  </Table.Body>
              </Table>
            </div> }
        </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { post: state.posts.find( a => a.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(Post);
