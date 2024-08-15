import { Box, Button, Popover, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { byTotalSeatingFilterSelector, queryTableSelector } from "redux/selectors";
import filtersSlice from "redux/reducers/filtersSlice";

function TotalSeatingFilterContent({ hasButton, boxStyle }) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const initFilter = useSelector(byTotalSeatingFilterSelector);
  const [filterTotalSeating, setFilterTotalSeating] = useState(initFilter);

  useEffect(() => {
    setFilterTotalSeating(initFilter);
  }, [initFilter]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setFilterTotalSeating(initFilter);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // -----------------------------------------------
  const queryTable = useSelector(queryTableSelector);
  const { total_seating } = useSelector(queryTableSelector);

  const handleOnclick = (value) => {
    setFilterTotalSeating(value);
  };

  const handleFilterBtnOnClick = () => {
    dispatch(filtersSlice.actions.setTotalSeating(filterTotalSeating));
    dispatch(filtersSlice.actions.setPageFilter(1));
    dispatch(filtersSlice.actions.setQueryFilter(queryTable));
    
    handleClose();
  };

  const handleFilterClearOnClick = () => {
    dispatch(filtersSlice.actions.setTotalSeating(null));
    dispatch(filtersSlice.actions.setPageFilter(1));
    dispatch(filtersSlice.actions.setQueryFilter(queryTable));

    handleClose();
  };

  return (
    <>
      <Button
        aria-describedby={id}
        className={!initFilter ? "" : "choice"}
        onClick={handleClick}
        sx={{
          fontSize: { xs: "10px", sm: "13px", minWidth: "140px" },
          fontWeight: "bold",
          color: "#f97316",
          border: "1px solid #f97316 !important",
        }}
      >
        Number of Seats
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={boxStyle}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 60px)",
              gridAutoFlow: "dense",
              columnGap: "8px",
              rowGap: "8px",
            }}
          >
            {total_seating.options.map((totalSeatingParam) => (
              <>
                <div
                  class={`item-filter ${
                    filterTotalSeating === totalSeatingParam ? " filtering" : ""
                  } `}
                  style={{
                    borderBottomLeftRadius: "5px",
                    borderBottomRightRadius: "5px",
                  }}
                  onClick={() => handleOnclick(totalSeatingParam)}
                >
                  <p>{totalSeatingParam}</p>
                </div>
              </>
            ))}
          </div>
        </Box>
        {hasButton && (
          <Stack
            sx={{ padding: "10px" }}
            gap={1}
            direction={"row"}
            justifyContent={"end"}
          >
            <Button
              onClick={handleFilterClearOnClick}
              sx={{ maxWidth: "100px" }}
              variant="text"
              color="error"
            >
              Undo
            </Button>
            <Button
              onClick={handleFilterBtnOnClick}
              sx={{
                minWidth: "150px",
                backgroundColor: "#f97316",
                "&:hover": {
                  backgroundColor: "#f97316",
                },
              }}
              variant="contained"
            >
              Apply
            </Button>
          </Stack>
        )}
      </Popover>
    </>
  );
}

export default TotalSeatingFilterContent;
