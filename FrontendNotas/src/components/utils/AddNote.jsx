import React, { useState, useEffect, useRef } from 'react'

const AddNote = () => {

  const [Open, setOpen] = useState(false)

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false)
        }
      }
      document.addEventListener("mousedown",handleClickOutside)
      return () => {
        document.removeEventListener("mousedown",handleClickOutside)
      }
    }, [ref])
  }
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)

  return (
    <section className="AddNote" ref={wrapperRef}>
      <span className='controlIcon' onClick={() => setOpen(!Open)}><i className={"fa-solid " + (Open ? "fa-xmark" : "fa-add")}></i></span>
      <section className={"ControlForm AddNoteForm " + (Open ? " open" : "")}>
      </section>
    </section>
  )
}

export default AddNote 