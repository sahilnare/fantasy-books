import React, { Component } from 'react';
import AddPost from './components/AddPost';
import { Box, Card, Image, Heading, Text } from 'rebass';
import { connect } from 'react-redux';
import { addPost } from '../reduxStore/actions/postActions';
import { deleteBook } from '../reduxStore/actions/deleteActions';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class CreatePost extends Component {

  addPost = (post) => {
    post.timestamp = new Date();
    post.posted_by = {};
    post.posted_by.username = "thor_odinson";
    post.posted_by.user_id = "mDJEj8DJjDO9ndNKV";
    post.posted_by.link = "www.google.com";
    post.upvotes = 1;
    this.props.addPost(post);
  }

  render() {
    if(!this.props.auth.uid) return <Redirect to='/login' />
    return (
      <React.Fragment>
        <Box className="homepage">
          <Box width={['80%', '65%', 1/2]} my={4} mx='auto' >
            <Card
              sx={{
                p: 1,
                borderRadius: 2,
                boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
              }}>
                <Box p={3} width={1/2} mx='auto'>
                  <Heading as='h1'>
                    Welcome to Fantasy Books!
                  </Heading>
                  <Text fontSize={2} my={2}>
                    Create your post!
                  </Text>
                </Box>
            </Card>
          </Box>

          <AddPost addPost={this.addPost}/>

        </Box>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => {
      dispatch(addPost(post));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
