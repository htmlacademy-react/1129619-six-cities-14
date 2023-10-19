type CommentUser = {
  id: number;
  isPro: boolean;
  name: string;
  avatarUrl: string;
};

type Comment = {
  id: number;
  user: CommentUser;
  rating: number;
  comment: string;
  date: string;
};

export default Comment;