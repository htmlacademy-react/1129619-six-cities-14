import { StarRating } from '../star-rating/star-rating';
import { Comment } from '../../types/comments';
import dayjs from 'dayjs';

type CommentMesProps = {
  comment: Comment;
};

export function CommentMes({ comment }: CommentMesProps): JSX.Element {
  const correctDate = dayjs(comment.date).format('MMMM YYYY');
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={comment.user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{comment.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <StarRating rating={comment.rating} variant="review" />
        </div>
        <p className="reviews__text">{comment.comment}</p>
        <time className="reviews__time" dateTime="2019-04-24">
          {correctDate}
        </time>
      </div>
    </li>
  );
}
