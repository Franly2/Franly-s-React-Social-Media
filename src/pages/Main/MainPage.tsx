/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Post } from "./Post";
// import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";

export interface postData {
  description: string;
  title: string;
  userId: string;
  username: string;
  id: string;
}

export const MainPage = () => {
  const [user] = useAuthState(auth);
  const [postList, setPostList] = React.useState<postData[] | null>(null);
  const postsRef = collection(db, "post");

  async function getPost() {
    const data = await getDocs(postsRef);
    setPostList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as postData[]
    );
  }

  useEffect(() => {
    getPost();
  }, []);
  return (
    <div>
      {user ? (
        postList?.map((post) => {
          return <Post post={post} />;
        })
      ) : (
        <p className="text-3xl text-center mt-16 ">SignIn to watch posts.</p>
      )}
    </div>
  );
};
