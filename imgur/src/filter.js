import React from "react";

export const Filter = props => {
  // const {onFilterChange}= props;
  return (<div>
    <select name="filter"
            id="filter"
            onChange={props.onClick}
            defaultValue={'month'}>
      <option value="day">day</option>
      <option value="month">month</option>
      <option value="year">year</option>
    </select>
    its ok!
  </div>)
}
