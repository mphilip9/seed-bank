import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";

const Search = ({ searchZones, month }) => {
  const [zoneSearch, setZoneSearch] = useState("");

  // to ensure hitting enter triggers search
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchZones(zoneSearch, month);
      setZoneSearch("");
      e.preventDefault();
      e.target.value = "";
    }
  };
  const handleChange = (e) => {
    setZoneSearch(e.target.value);
  };
  const handleClick = (e) => {
    searchZones(zoneSearch, month);
    setZoneSearch("");
    e.preventDefault();
  };
  return (
    <div className=" pl-3 flex flex-row bg-white...">
      <TextField
        label="Search by Zipcode"
        sx={{
          backgroundColor: "white",
          borderRadius: "5%",
        }}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={zoneSearch}
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton onClick={handleClick}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <h2 className="collapse pt-3 pl-2 sm:visible">
        Enter a zipcode to find your hardiness zone
      </h2>
    </div>
  );
};

export default Search;
