import React from "react";

function Search({ searchInput, setSearchInput }) {
  return;
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Add A Burger"
      aria-label="Add A Burger"
      aria-describedby="basic-addon2"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
    ></input>
    <div class="input-group-append">
      <button class="btn btn-outline-secondary" type="button">
        Submit
      </button>
    </div>
  </div>;
}

export default Search;
