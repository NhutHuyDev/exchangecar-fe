import { Box, Button, Popover, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderBySelector, queryTableSelector } from "redux/selectors";
import filtersSlice from "redux/reducers/filtersSlice";

function OrderByContent({ hasButton, boxStyle }) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const initFilter = useSelector(orderBySelector);
  const [orderBy, setOrderBy] = useState(initFilter);

  useEffect(() => {
    setOrderBy(initFilter);
  }, [initFilter]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOrderBy(initFilter);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // -----------------------------------------------
  const queryTable = useSelector(queryTableSelector);
  const { order_by } = useSelector(queryTableSelector);

  const handleOnclick = (value) => {
    setOrderBy(value);
  };

  const handleFilterBtnOnClick = () => {
    dispatch(filtersSlice.actions.setOrderBy(orderBy));
    dispatch(filtersSlice.actions.setPageFilter(1));
    dispatch(filtersSlice.actions.setQueryFilter(queryTable));

    handleClose();
  };

  const handleFilterClearOnClick = () => {
    dispatch(filtersSlice.actions.setOrderBy(null));
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
        Order By
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
              gridTemplateColumns: "repeat(1, 200px)",
              gridAutoFlow: "dense",
              columnGap: "8px",
              rowGap: "8px",
            }}
          >
            {Object.keys(order_by.options).map((orderByParam) => (
              <>
                <div
                  class={`item-filter ${
                    orderBy === orderByParam ? " filtering" : ""
                  } `}
                  style={{
                    borderBottomLeftRadius: "5px",
                    borderBottomRightRadius: "5px",
                  }}
                  onClick={() => handleOnclick(orderByParam)}
                >
                  <p>{order_by.options[orderByParam]}</p>
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

export default OrderByContent;
