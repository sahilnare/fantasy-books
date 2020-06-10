import React, { Component } from 'react';
import { Box, Card, Heading, Text, Flex, Button } from 'rebass';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import { deletePost } from '../../reduxStore/actions/deleteActions';
import Comments from './Comments';

const months = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec'
}

class Post extends Component {

  deletePost = (id) => {
    this.props.deletePost(id);
    this.props.history.push('/posts');
  }

  render() {
    const id = this.props.match.params.post_id;
    let post;
    if(this.props.post) {
      const date = this.props.post[id].timestamp.toDate();
      let minutes = date.getMinutes();
      if(minutes < 10) {
        minutes = '0' + minutes
      }
      post = (
        <Card
          sx={{
            p: 3,
            borderRadius: 2,
            boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
          }} mt={2} mb={3}>
          <Heading as='h1' fontSize={5} my={2}>
            {this.props.post[id].title}
          </Heading>
          <Text fontSize={4} mt={2} mb={2}>
            {this.props.post[id].content}
          </Text>
          <Text fontSize={3} mt={2} mb={2}>
            By: <Link to={this.props.post[id].posted_by.user_link}>{this.props.post[id].posted_by.username}</Link>
          </Text>
          <Text fontSize={3} color='green' mt={2} mb={2}>
            Upvotes: {this.props.post[id].upvotes}
          </Text>
          <Text fontSize={2} my={3}>
            {`${date.getHours()}:${minutes}, ${date.getDate()} ${months[date.getMonth()]}, ${date.getFullYear()}`}
          </Text>
          {
            this.props.auth.uid ? ( this.props.auth.uid === this.props.post[id].posted_by.user_id ? (
              <Button bg='red' px={2} mr={2} style={{cursor: "pointer"}} onClick={() => this.deletePost(id)}>
                Delete
              </Button>
            ) : null ) : null
          }
        </Card>
      );
    } else {
      post = (
        <Card
          sx={{
            p: 1,
            borderRadius: 2,
            boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
          }} my={2}>
          <Text fontSize={4} mt={2} mb={2}>
            Loading Post...
          </Text>
        </Card>
      );
    }

    const comments = this.props.comments ? (
      <Comments comments={this.props.comments[id]} />
    ) : (
      <Card
        sx={{
          p: 1,
          borderRadius: 2,
          boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
        }} my={2}>
        <Text fontSize={4} mt={2} mb={2}>
          Loading Comments...
        </Text>
      </Card>
    )

    return (
      <React.Fragment>
        <Box className="homepage">
          <Box width={['80%', '65%', 1/2]} my={4} mx='auto' >
            {post}
            {comments}
          </Box>
        </Box>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.post_id;
  // console.log(state.firestore.data);
  return {
    post: state.firestore.data.posts,
    comments: state.firestore.data.comments,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id));
    }
  }
}
//doc: props.match.params.post_id

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => [{ collection: 'posts' }, { collection: 'comments', doc: props.match.params.post_id }]),
  withRouter
)(Post);
