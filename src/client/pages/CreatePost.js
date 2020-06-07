import React, { Component } from 'react';
import AddPost from './components/AddPost';
import Navbar from './components/navbar/Navbar';
import { Box, Card, Image, Heading, Text, Flex } from 'rebass';
import { connect } from 'react-redux';
import { addPost } from '../reduxStore/actions/postActions';
import { deleteBook } from '../reduxStore/actions/deleteActions';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

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
    return (
      <React.Fragment>
        <Navbar />
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

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => {
      dispatch(addPost(post));
    }
  }
}

export default connect(null, mapDispatchToProps)(CreatePost);
