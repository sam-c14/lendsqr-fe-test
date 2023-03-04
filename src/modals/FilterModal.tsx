import { filterUsers } from "../mixins/FilterUsers";
import { Users } from "../types/globalTypes";
import React, { useEffect } from "react";

interface OtherProps {
  filter: Users;
}

const FilterModal = ({ filter }: OtherProps) => {
  return (
    <div className="filter">
      <form action="">
        <div>
          <label htmlFor="organization">organization</label>
          <input type="text" autoComplete="off" id="organization" />
        </div>
        <div>
          <label htmlFor="username">username</label>
          <input type="text" autoComplete="off" id="username" />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input type="text" autoComplete="off" id="email" />
        </div>
        <div>
          <label htmlFor="date">date</label>
          <input placeholder="" type="date" autoComplete="off" id="date" />
        </div>
        <div>
          <label htmlFor="phone-number">phone number</label>
          <input type="number" autoComplete="off" id="phone-number" />
        </div>
        <div>
          <label htmlFor="status">status</label>
          <input
            placeholder="Status"
            type="text"
            autoComplete="off"
            id="status"
          />
        </div>
        <div className="filter-btn-container">
          <button className="reset-btn" onClick={filter.resetUsers}>
            reset
          </button>
          <button
            className="filter-btn"
            onClick={(e) => {
              filter.filterUsers(filter, e);
            }}
          >
            filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterModal;
