import React from 'react';
import { Text, Card, Heading } from 'rebass';
import { Link } from 'react-router-dom';

const Comments = ({comments}) => {
  const commentList = comments ? Object.entries(comments).map(comment => {
      return (
        <Card
          sx={{
            p: 3,
            borderRadius: 2,
            boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
          }} my={2} key={comment[0]}>
          <Heading as='h1' fontSize={3} my={2}>
            {comment[1].content}
          </Heading>
          <Text fontSize={2} mt={2} mb={2}>
            By: <Link to={comment[1].posted_by.user_link}>{comment[1].posted_by.username}</Link>
          </Text>
          <Text fontSize={2} mt={2} mb={2}>
            Upvotes: {comment[1].upvotes}
          </Text>
        </Card>
      );
    }) : (
      <Card
        sx={{
          p: 1,
          borderRadius: 2,
          boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
        }} my={2}>
        <Text fontSize={4} mt={2} mb={2}>
          No Comments
        </Text>
      </Card>
    )

  return (
    <React.Fragment>
      {commentList}
    </React.Fragment>
  );
}

export default Comments;
