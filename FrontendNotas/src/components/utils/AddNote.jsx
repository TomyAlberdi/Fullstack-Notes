import React, { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const AddNote = ({ User, Token, setLoadingNotes }) => {
  const [Open, setOpen] = useState(false);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const addNoteAPI = async (e) => {
    e.preventDefault();
    let title = e.target.title;
    let text = e.target.text;
    const url = `http://192.168.0.183:8080/notes/add`;
    const aux = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
      body: JSON.stringify({
        title: title.value,
        text: text.value,
        user_id: User.id,
      }),
    };
    try {
      const res = await fetch(url, aux);
      if (res.ok) {
        setLoadingNotes(true);
        title.value = "";
        text.value = "";
        setOpen(false);
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
    <section className="AddNote" ref={wrapperRef}>
      <span className="controlIcon" onClick={() => setOpen(!Open)}>
        <i className={"fa-solid " + (Open ? "fa-xmark" : "fa-add")}></i>
      </span>
      <form
        className={"ControlForm AddNoteForm " + (Open ? " open" : "")}
        onSubmit={addNoteAPI}
      >
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          required
        />
        <textarea name="text" id="text" placeholder="Add a note..."></textarea>
        <button type="submit" id="button">
          Add
        </button>
      </form>
    </section>
  );
};

export default AddNote;
