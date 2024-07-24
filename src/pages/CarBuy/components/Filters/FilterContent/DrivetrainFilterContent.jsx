import { Box, Button, Popover, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { byDrivetrainFilterSelector, queryTableSelector } from "redux/selectors";
import filtersSlice from "redux/reducers/filtersSlice";

function DrivetrainFilterContent({ hasButton, boxStyle }) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const initFilter = useSelector(byDrivetrainFilterSelector);
  const [filterDrivetrain, setFilterDrivetrain] = useState(initFilter);

  useEffect(() => {
    setFilterDrivetrain(initFilter);
  }, [initFilter]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setFilterDrivetrain(initFilter);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // -----------------------------------------------
  const queryTable = useSelector(queryTableSelector);
  const { drivetrain } = useSelector(queryTableSelector);

  const handleOnclick = (value) => {
    setFilterDrivetrain(value);
  };

  const handleFilterBtnOnClick = () => {
    dispatch(filtersSlice.actions.setDrivetrainFilter(filterDrivetrain));
    dispatch(filtersSlice.actions.setQueryFilter(queryTable));
    dispatch(filtersSlice.actions.setPageFilter(1));

    handleClose();
  };

  const handleFilterClearOnClick = () => {
    dispatch(filtersSlice.actions.setDrivetrainFilter(null));
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
        Drivetrain
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
              gridTemplateColumns: "repeat(1, 220px)",
              gridAutoFlow: "dense",
              columnGap: "8px",
              rowGap: "8px",
            }}
          >
            {Object.keys(drivetrain.options).map((drivetrainParam) => (
              <>
                <div
                  class={`item-filter ${
                    filterDrivetrain === drivetrainParam ? " filtering" : ""
                  } `}
                  style={{
                    borderBottomLeftRadius: "5px",
                    borderBottomRightRadius: "5px",
                  }}
                  onClick={() => handleOnclick(drivetrainParam)}
                >
                  <p>{drivetrain.options[drivetrainParam]}</p>
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

export default DrivetrainFilterContent;
