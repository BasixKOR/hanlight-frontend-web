import * as React from 'react';

import {
  BoardCommentMethod,
  BoardCommentOwnProps,
  BoardCommentProps,
} from 'container/board/comment';
import moment from 'moment';
import 'moment/locale/ko';
import styled from 'styled-components';
import Commentsinput from './commentForm';
import CommentsItem from './commentItem';

const FeedCommentWrapper = styled.div`
  width: 100%;
`;

const FeedCommentTittle = styled.p`
  font-size: 0.875rem;
  color: #1d2129;
`;

const BoardCommentsComponent: React.FC<
  BoardCommentProps & BoardCommentMethod & BoardCommentOwnProps
> = props => {
  const CommentsList = props.comments.map((item, i) => {
    return (
      <CommentsItem
        key={i}
        user_name={item.user_name}
        content={item.content}
        date={moment(item.createdAt).format('YYYY년 M월 D일 A H:mm')}
        likeCount={item.likeCount}
        deleteBoardCommemnt={props.deleteBoardCommemnt}
        patchBoardCommemnt={props.patchBoardCommemnt}
        report={props.report}
        deleteBoardCommentStatus={props.deleteBoardCommentStatus}
        patchBoardCommentStatus={props.patchBoardCommentStatus}
        reportStatus={props.reportStatus}
        accessToken={props.accessToken}
      />
    );
  });

  return (
    <FeedCommentWrapper>
      <FeedCommentTittle>댓글({props.commentCount})</FeedCommentTittle>
      <Commentsinput />
      {CommentsList}
    </FeedCommentWrapper>
  );
};

export default BoardCommentsComponent;
