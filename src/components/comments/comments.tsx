import { BiLike } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { Avatar } from "../Avatar/avatar";
import styles from "./comments.module.css";

interface CommentProps {
	content: string;
	onDeleteComment: (comment: string) => void;
}

export function Comments({ content, onDeleteComment }: CommentProps) {
	function handleDeletComment() {
		onDeleteComment(content);
	}

	return (
		<div className={styles.comment}>
			<Avatar url="https://avatars.githubusercontent.com/u/94790993?v=4" />
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Matheus Costa</strong>
							<time
								title="6 de junho de 2022 as 8 horas"
								dateTime="2022-06-04 08:00:00"
							>
								Cerca ha 1h
							</time>
						</div>
						<button onClick={handleDeletComment} title="deletar comentario">
							<FiTrash2 />
						</button>
					</header>
					<p>{content} 👏👏</p>
				</div>
				<footer>
					<button>
						<BiLike />
						Gostei <span>10</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
