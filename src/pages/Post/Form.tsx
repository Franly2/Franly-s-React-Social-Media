import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import warning from "/warning.svg";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

interface postFormData {
  title: string;
  description: string;
}

export const Form = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const postSchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<postFormData>({
    resolver: yupResolver(postSchema),
  });

  const postsRef = collection(db, "post");

  async function onSubmit(data: postFormData) {
    // console.log(data);
    await addDoc(postsRef, {
      title: data.title,
      description: data.description,
      username: user?.displayName,
      userId: user?.uid,
    });
    navigate("/");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 md:w-3/4 lg:w-1/2 w-full rounded-lg text-white flex flex-col mx-auto gap-4 mt-9 bg-white "
    >
      {/* <input
        id="title"
        type="text"
        {...register("title")}
        placeholder="Title"
        className="border border-black p-2"
      /> */}
      <textarea
        id="title"
        {...register("title")}
        placeholder="Title"
        className=" placeholder:text-2xl p-2 placeholder:text-black outline-none  rounded-md text-black "
      ></textarea>
      {errors?.title ? (
        <p className="text-red-500 -mt-3">
          <img src={warning} className="w-5 h-5 inline" />
          {errors.title?.message}
        </p>
      ) : (
        ""
      )}

      <textarea
        id="description"
        {...register("description")}
        placeholder="Description"
        className=" h-64 p-2 placeholder:text-2xl placeholder:text-slate-300 outline-none  rounded-md text-black"
      ></textarea>
      {errors?.description ? (
        <p className="text-red-500 -mt-3">
          <img src={warning} className="w-5 h-5 inline" />
          {errors.description?.message}
        </p>
      ) : (
        ""
      )}

      {/* <input
        id="description"
        type="text"
        {...register("description")}
        placeholder="Description"
        className="border border-black p-2"
      /> */}
      <button type="submit" className="border border-black text-black p-2 ">
        Post
      </button>
    </form>
  );
};
