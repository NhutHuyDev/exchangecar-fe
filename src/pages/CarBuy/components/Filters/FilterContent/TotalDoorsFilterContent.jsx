import { Box, Button, Popover, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { byTotalDoorsFilterSelector, queryTableSelector } from "redux/selectors";
import filtersSlice from "redux/reducers/filtersSlice";

function TotalDoorsFilterContent({ hasButton, boxStyle }) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const initFilter = useSelector(byTotalDoorsFilterSelector);
  const [filterTotalDoors, setFilterTotalDoors] = useState(initFilter);

  useEffect(() => {
    setFilterTotalDoors(initFilter);
  }, [initFilter]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setFilterTotalDoors(initFilter);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // -----------------------------------------------
  const queryTable = useSelector(queryTableSelector);
  const { total_doors } = useSelector(queryTableSelector);

  const handleOnclick = (value) => {
    setFilterTotalDoors(value);
  };

  const handleFilterBtnOnClick = () => {
    dispatch(filtersSlice.actions.setTotalDoors(filterTotalDoors));
    dispatch(filtersSlice.actions.setQueryFilter(queryTable));
    dispatch(filtersSlice.actions.setPageFilter(1));

    handleClose();
  };

  const handleFilterClearOnClick = () => {
    dispatch(filtersSlice.actions.setTotalDoors(null));
    dispatch(filtersSlice.actions.setQueryFilter(queryTable));
    dispatch(filtersSlice.actions.setPageFilter(1));

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
        Number of Doors
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
              gridTemplateColumns: "repeat(2, 100px)",
              gridAutoFlow: "dense",
              columnGap: "8px",
              rowGap: "8px",
            }}
          >
            {total_doors.options.map((totalDoorsParam) => (
              <>
                <div
                  class={`item-filter flex justify-center ${
                    filterTotalDoors === totalDoorsParam ? " filtering" : ""
                  } `}
                  style={{
                    borderBottomLeftRadius: "5px",
                    borderBottomRightRadius: "5px",
                  }}
                  onClick={() => handleOnclick(totalDoorsParam)}
                >
                  <p>{totalDoorsParam}</p>
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

export default TotalDoorsFilterContent;
