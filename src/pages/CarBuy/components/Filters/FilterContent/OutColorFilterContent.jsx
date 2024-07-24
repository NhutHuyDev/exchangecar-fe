import { Box, Button, Popover, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { byOutColorFilterSelector, queryTableSelector } from "redux/selectors";
import filtersSlice from "redux/reducers/filtersSlice";

function OutColorFilterContent({ hasButton, boxStyle }) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const initFilter = useSelector(byOutColorFilterSelector);
  const [filterOutColor, setFilterOutColor] = useState(initFilter);

  useEffect(() => {
    setFilterOutColor(initFilter);
  }, [initFilter]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setFilterOutColor(initFilter);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // -----------------------------------------------
  const queryTable = useSelector(queryTableSelector);
  const { out_color } = useSelector(queryTableSelector);

  const handleOnclick = (value) => {
    setFilterOutColor(value);
  };

  const handleFilterBtnOnClick = () => {
    dispatch(filtersSlice.actions.setOutColorFilter(filterOutColor));
    dispatch(filtersSlice.actions.setQueryFilter(queryTable));
    dispatch(filtersSlice.actions.setPageFilter(1));

    handleClose();
  };

  const handleFilterClearOnClick = () => {
    dispatch(filtersSlice.actions.setOutColorFilter(null));
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
        Exterior Color
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
              gridTemplateColumns: "repeat(3, 100px)",
              gridAutoFlow: "dense",
              columnGap: "8px",
              rowGap: "8px",
            }}
          >
            {Object.keys(out_color.options).map((outColorParam) => (
              <>
                <div
                  class={`item-filter flex flex-col justify-center ${
                    filterOutColor === outColorParam ? " filtering" : ""
                  } `}
                  style={{
                    borderBottomLeftRadius: "5px",
                    borderBottomRightRadius: "5px",
                  }}
                  onClick={() => handleOnclick(outColorParam)}
                >
                  <div
                    className="h-5 w-5 rounded-full ring-1 ring-[#000]"
                    style={{
                      backgroundColor: `${out_color.options[outColorParam].colorCode}`,
                    }}
                  ></div>
                  <p>{out_color.options[outColorParam].value}</p>
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

export default OutColorFilterContent;
