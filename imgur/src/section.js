import React from "react";

export const Section = props => {
  // const {onFilterChange}= props;
  return (<div>
    <select name="Section"
            id="Section"
            onChange={props.onChange}
            defaultValue={'top'}>
      <option value="hot">hot</option>
      <option value="top">top</option>
    </select>
    its ok!
  </div>)
}
