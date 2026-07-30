import React from "react";
import { useForm } from "react-hook-form";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Form } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { number, object, ref, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";

const firebaseConfig = {
  apiKey: "AIzaSyDiNJ6x7xRH6ZxmBi5L4Q5jpHpGPgRml4A",
  authDomain: "industry-backend-c9018.firebaseapp.com",
  projectId: "industry-backend-c9018",
  storageBucket: "industry-backend-c9018.firebasestorage.app",
  messagingSenderId: "691647915459",
  appId: "1:691647915459:web:51db0085c279228c6a0976",
  measurementId: "G-XFR3JY97Z4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const col = collection(db, "UserContact");

// console.log(currentDay);

function GmailModel({ contact, setContact }) {

  const schema = object({
    name: string().required(),
    email: string().required(),
    phone: string().required(),
    subject: string().required(),
    message: string().required()
  })
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
     
    },
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    const currentDay = dayjs().format('D/M/YYYY , hh:mm A')
    console.log(data);

    const userData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      timeStamp: currentDay 
    };
  
    const createUserContact = async () => {
      try {
        await addDoc(col, userData);
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    createUserContact();

    setContact(!contact);
  };

  return (
    <>
      <div className="w-full fixed z-1000 top-0  h-[105vh] flex justify-center items-center font-CopperPlate backdrop-blur-xl bg-transparent overscroll-y-none">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-90 lg:w-140 p-12 lg:p-12 px-10 lg:px-20 rounded-3xl show overflow-hidden space-y-5 flex flex-col justify-center items-center relative"
        >
          <input
            {...register("name")}
            className="w-full pl-3 p-3 border-2 z-1 bg-white"
            placeholder="Name"
          ></input>
          <input
            {...register("email")}
            className="w-full pl-3 p-3 border-2 z-1 bg-white"
            placeholder="Email"
          ></input>
          <input
            {...register("phone")}
            className="w-full pl-3 p-3 border-2 z-1 bg-white"
            placeholder="Phone"
          ></input>
          <input
            {...register("subject")}
            className="w-full pl-3 p-3 border-2 z-1 bg-white"
            placeholder="Subject"
          ></input>
          <textarea
            {...register("message")}
            className="w-full overflow-y-hidden pl-3 pt-2 pr-3 pb-20 border-2 z-1 bg-white"
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            className="uppercase cursor-pointer px-25 py-4 border-2 rounded-full bg-[#e5e5e569] z-1 text-xl mt-4"
          >
            Submit
          </button>

          <img
            className="absolute z-0 top-0 object-cover object-[center_10%]"
            src="src/assets/gmailmodelbg.jpg"
          ></img>
        </form>
        <div
          onClick={() => {
            setContact(!contact);
          }}
          className="absolute cursor-pointer top-21 right-4 lg:top-5 lg:right-98 p-2 space-x-1 z-1 text-white flex items-center"
        >
          <div className="border-3 border-black p-0.5 rounded-full lg:border-white">
            <i className="fa-solid fa-xmark relative top-0.5 text-black lg:text-white"></i>
          </div>
          <p className="hidden lg:block">Close</p>
        </div>
      </div>
      {/* <DevTool className="relative z-19999" control={control} /> */}
    </>
  );
}

export default GmailModel;
