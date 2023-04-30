import React, { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const SearchNote = ({ User, Token, setLoadingNotes, setNotes }) => {
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

  const searchNoteAPI = async (e) => {
    e.preventDefault();
    let search = e.target.search;
    const url = `http://192.168.0.183:8080/notes/search/${User.id}/${search.value}`;
    const aux = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Token}`,
      },
    };
    try {
      const res = await fetch(url, aux);
      if (res.ok) {
        const data = await res.json();
        setNotes(data);
        setOpen(false);
        search.value = "";
      } else {
        Swal.fire({
          title: "Notes not found",
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

  const clearSearch = () => {
    setOpen(false);
    setLoadingNotes(true);
  };

  return (
    <section className="SearchNote" ref={wrapperRef}>
      <span className="controlIcon" onClick={() => setOpen(!Open)}>
        <i className={"fa-solid " + (Open ? "fa-xmark" : "fa-search")}></i>
      </span>
      <form
        className={"ControlForm SearchNoteForm " + (Open ? " open" : "")}
        onSubmit={searchNoteAPI}
      >
        <input type="text" name="search" id="search" placeholder="Key Word" />
        <button type="submit" id="buttonSubmit">
          Search
        </button>
        <button type="reset" id="buttonClear" onClick={clearSearch}>
          Clear Results
        </button>
      </form>
    </section>
  );
};

export default SearchNote;
