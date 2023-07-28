/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { postData } from "./MainPage";
import likeIcons from "/like.svg";
import unlikeIcons from "/unlike.svg";
import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db, auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

interface Props {
  post: postData;
}
interface Like {
  userId: string;
  likeId: string;
}

export const Post = (props: Props) => {
  const [user] = useAuthState(auth);
  const { post } = props;

  const [likes, setLikes] = React.useState<Like[] | null>(null);
  const likesRef = collection(db, "like");
  const likesDoc = query(likesRef, where("postId", "==", post.id));

  async function getLikes() {
    const data = await getDocs(likesDoc);
    setLikes(
      data.docs.map((doc) => ({ userId: doc.data().userId, likeId: doc.id }))
    );
  }

  async function addLike() {
    try {
      const newDoc = await addDoc(likesRef, {
        userId: user?.uid,
        postId: post.id,
      });
      if (user) {
        setLikes((prev) =>
          prev
            ? [...prev, { userId: user?.uid, likeId: newDoc.id }]
            : [{ userId: user?.uid, likeId: newDoc.id }]
        );
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function removeLike() {
    try {
      const likeToDeleteQuery = query(
        likesRef,
        where("postId", "==", post.id),
        where("userId", "==", user?.uid)
      );
      const likeToDeleteData = await getDocs(likeToDeleteQuery);
      const likeId = likeToDeleteData.docs[0].id;

      const likeToDelete = doc(db, "like", likeId);
      await deleteDoc(likeToDelete);
      if (user) {
        setLikes(
          (prev) => prev && prev.filter((like) => like.likeId !== likeId)
        );
      }
    } catch (err) {
      console.log(err);
    }
  }

  const hasUserLike = likes?.find((like) => like.userId === user?.uid);

  React.useEffect(() => {
    getLikes();
  }, []);

  return (
    <div className="shadow-md mt-8 md:w-3/4 lg:w-1/2 w-5/6 mx-auto rounded-md overflow-hidden pb-5">
      <p className="font-thin text-gray-500 p-2">@{post.username}</p>
      <div className="px-5">
        <p className="text-2xl mt-5 font-semibold">{post.title}</p>
        <p className="text-xl ">{post.description}</p>
        <div className="flex items-center gap-3 mt-10">
          <button onClick={hasUserLike ? removeLike : addLike}>
            {!hasUserLike ? (
              <img src={unlikeIcons} alt="" className="w-6 h-6 " />
            ) : (
              <img src={likeIcons} alt="" className="w-6 h-6 " />
            )}
          </button>
          {likes && (
            <p className="text-lg inline-block ">
              {likes?.length > 1
                ? `${likes.length} Likes`
                : `${likes.length} Like`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
