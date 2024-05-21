import { useRef } from "react";
import Button from "./Button";

export default function Modal({ form, onEdit, onClose }) {
  const dialog = useRef();

  return (
    <dialog
      ref={dialog}
      className="bg-indigo-400 text-white flex justify-center flex-col items-center gap-2 h-96 gap-5 w-1/3 rounded-md"
    >
      <h1 className="font-bold text-3xl">Form Submitted!!</h1>

          <div className="p-5 shadow-md bg-indigo-600 w-fit rounded-md text-lg">
            {(form.name.firstName ||
              form.name.middleName ||
              form.name.lastName )&& (
                <p>{`Name: ${
                  form.name.firstName +
                  " " +
                  form.name.middleName +
                  " " +
                  form.name.lastName
                }`}</p>
              )}

            {(form.university.name ||
              form.university.dep ||
              form.university.batch) && (
                <p>{`University: ${
                  form.university.name +
                  " " +
                  form.university.dep +
                  " " +
                  form.university.batch
                }`}</p>
              )}

            {form.society.name && <p>{`Society: ${form.society.name}`}</p>}
          </div>
      
      <div className="w-full px-10 mt-5 flex gap-2 justify-end items-center">
        <Button unfilled text="Edit" onClick={onEdit} />
        <form method="dialog">
          <Button
            color="bg-white text-indigo-500"
            onClick={onClose}
            text="Close"
          />
        </form>
      </div>
    </dialog>
  );
}
