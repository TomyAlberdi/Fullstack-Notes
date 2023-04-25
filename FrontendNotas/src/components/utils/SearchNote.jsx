import React, { useState, useEffect, useRef } from 'react'

const SearchNote = () => {

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
    <section className="SearchNote" ref={wrapperRef}>
      <span className='controlIcon' onClick={() => setOpen(!Open)}><i className={"fa-solid " + (Open ? "fa-xmark" : "fa-search")}></i></span>
      <form className={"ControlForm SearchNoteForm " + (Open ? " open" : "")}>
      </form>
    </section>
  )
}

export default SearchNote 