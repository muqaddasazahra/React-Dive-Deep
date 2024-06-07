import { forwardRef, useRef } from "react";
import Button from "./Button";

const Modal = forwardRef(function Modal({ form, onEdit, onClose }, ref) {
  return (
    <dialog ref={ref} className="h-96 w-1/3 bg-indigo-400 text-white rounded-md  backdrop:bg-black backdrop:opacity-70">
      <div className="flex flex-col justify-center items-center gap-5 h-[100%] w-[100%]">
        <h1 className="font-bold text-3xl">Form Submitted!!</h1>

        <div className="p-5 shadow-md bg-indigo-600 w-fit rounded-md text-lg">
          {(form.name.firstName ||
            form.name.middleName ||
            form.name.lastName) && (
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
      </div>
    </dialog>
  );
});

export default Modal;
