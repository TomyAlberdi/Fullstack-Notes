import React from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const Note = ({ Data, Token, setLoadingNotes }) => {
  const deleteNote = () => {
    Swal.fire({
      title: "Delete this note?",
      text: "This action is irreversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((res) => {
      res.isConfirmed ? deleteNoteFunction() : null;
    });
  };

  const deleteNoteFunction = async () => {
    const url = `http://192.168.0.183:8080/notes/delete/${Data.id}`;
    const aux = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    };
    try {
      const res = await fetch(url, aux);
      if (res.ok) {
        Swal.fire({
          title: "Note deleted",
          icon: "success",
        });
        setLoadingNotes(true);
      } else {
        Swal.fire({
          title: "An error occured",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "An error occured",
        text: error,
        icon: "error",
      });
    }
  };

  return (
    <article className="Note">
      <h4>{Data.title}</h4>
      <div className="text">
        <p>{Data.text}</p>
      </div>
      <div className="controls">
        <i className="fa-solid fa-trash" onClick={deleteNote}></i>
      </div>
    </article>
  );
};

export default Note;
