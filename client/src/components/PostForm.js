import React from 'react'
import { addPost, updatePost } from '../actions/posts'
import { connect } from 'react-redux'
import { Form, Button, Input, TextArea} from 'semantic-ui-react'


class PostForm extends React.Component {
  initialState = {
    name: '',
    body: ''
  }

  state = {...this.initialState}

  componentWillMount() {
   if (this.props.id)
     this.setState({ ...this.props })
   }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
     e.preventDefault();
     const post = {...this.state };
     const { closeForm, dispatch } = this.props;
     const func = this.props.id ? updatePost : addPost
     dispatch(func(post))
     this.setState({ name: '', body: ''})
     closeForm()
  }

  render(){
    return(
      <div>
        <Form>
          <br />
          <br />
          <Input name="name" onChange={this.handleChange} value={this.state.name} placeholder="Name"/>
          <br />
          <br />
          <TextArea name="body" onChange={this.handleChange} value={this.state.body} placeholder="Post"/>
          <br />
          <br />
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
      </div>
    )
  }

}

export default connect()(PostForm);
