import { FiHeart, FiMessageCircle, FiShare } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import styles from "./Posts.module.css";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Comments } from "../comments/comments";
import { Avatar } from "../Avatar/avatar";
import { format, formatDistanceToNow, set } from "date-fns";
import { ptBR } from "date-fns/locale";

interface AuthorProps {
	avatar: string;
	name: string;
	role: string;
}

interface ContentProps {
	type: "paragraph" | "link";
	content: string;
}

interface PostProps {
	id: number;
	author: AuthorProps;
	content: ContentProps[];
	publishedAt: Date;
}

export function Posts({ author, publishedAt, content }: PostProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [comments, setComments] = useState(["muito bacana hein"]);
	const [newComment, setNewComment] = useState("");
	const [isLiked, setIsLiked] = useState(false);
	const [likeCount, setLikeCount] = useState(0);

	const publishedAtFormatted = format(
		publishedAt,
		"dd 'de' LLLL 'as' HH:mm'h'",
		{ locale: ptBR }
	);
	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
	});

	function openComents() {
		setIsOpen(!isOpen);
	}

	function handleCreateComment(e: FormEvent) {
		e.preventDefault();
		setComments([...comments, newComment]);
		setNewComment("");
	}

	function deleteComment(commentToDelete: string) {
		const commentListWithoutDeletedOne = comments.filter((comment) => {
			return comment !== commentToDelete;
		});
		setComments(commentListWithoutDeletedOne);
	}

	function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>) {
		e.target.setCustomValidity("Esse campo e obrigatorio!!");
	}

	const isNewCommentEmpty = newComment.length === 0;

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar hasBorder url={author.avatar} />
					<div className={styles.profile}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>

				<div className={styles.infos}>
					<time
						title={publishedAtFormatted}
						dateTime={publishedAt.toISOString()}
					>
						{publishedDateRelativeToNow}
					</time>
					<button>
						<BiDotsVerticalRounded size={25} />
					</button>
				</div>
			</header>

			<div className={styles.content}>
				{content.map((line) => {
					if (line.type === "paragraph") {
						return <p key={line.type}>{line.content}</p>;
					}
					if (line.type === "link") {
						return (
							<p key={line.type}>
								<a href="">{line.content}</a>
							</p>
						);
					}
				})}
			</div>

			<div className={styles.actions}>
				<button onClick={() => setIsLiked(!isLiked)}>
					{isLiked ? <AiFillHeart size={20} /> : <FiHeart size={20} />}
					<span>{likeCount}</span>
				</button>
				<button onClick={openComents}>
					<FiMessageCircle size={20} />
				</button>
				<button>
					<FiShare size={20} />{" "}
				</button>
			</div>

			{isOpen && (
				<form onSubmit={handleCreateComment} className={styles.commentForm}>
					<strong>Deixe seu feedback</strong>
					<textarea
						placeholder="Deixe um comentario"
						name="comment"
						value={newComment}
						onChange={(event) => {
							return (
								event.target.setCustomValidity(""),
								setNewComment(event.target.value)
							);
						}}
						required
						onInvalid={handleNewCommentInvalid}
					/>
					<footer>
						<button type="submit" disabled={isNewCommentEmpty}>
							Comentar
						</button>
					</footer>
				</form>
			)}
			<div className={styles.commentList}>
				{comments.map((comment) => {
					return (
						<Comments
							key={comment}
							content={comment}
							onDeleteComment={deleteComment}
						/>
					);
				})}
			</div>
		</article>
	);
}
