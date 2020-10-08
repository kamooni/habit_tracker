import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";
import Navbar from "./navbar";
class Habits extends Component {
  handleResetAll = () => {
    this.props.onResetAll(this.props.habits);
  };
  render() {
    return (
      <>
        <div className="habits">
          <HabitAddForm onAdd={this.props.onAdd} />
          <ul>
            {this.props.habits.map((habit) => (
              <Habit
                key={habit.id}
                habit={habit}
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
                onDelete={this.props.onDelete}
              />
            ))}
          </ul>

          <button className="reset__btn" onClick={this.handleResetAll}>
            Reset All
          </button>
        </div>
      </>
    );
  }
}

export default Habits;
