import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    // this.inputRef.current.value = "";
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Habit"
        className="add__input"
      />
      <button className="add__btn">Add</button>
    </form>
  );
});

export default HabitAddForm;
