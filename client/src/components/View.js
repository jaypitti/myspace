import React from 'react'
import PostForm from './PostForm'
import Posts from './Posts'
import { Container, Button } from 'semantic-ui-react'

class View extends React.Component {
  state = { name: '', body: '', showForm: false }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }

  render(){
    const { showForm } = this.state;
    return(
      <Container>
        <Button onClick={this.toggleForm}>{ showForm ? 'Hide Form' : 'Show Form' }</Button>
        { showForm ?
          <PostForm closeForm={this.toggleForm} />
          :
          <div>
            <Posts />
          </div>
        }
      </Container>


    )
  }

}
export default View
