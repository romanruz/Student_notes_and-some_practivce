import React from "react";

export const Sort = props => {
    // const {onFilterChange}= props;
    return (<div>
        <select name="Sort"
                id="Sort"
                onChange={props.onChange}
                defaultValue={'top'}>
            <option value="viral">viral</option>
            <option value="top">top</option>
            <option value="time">time</option>
        </select>
    </div>)
}
