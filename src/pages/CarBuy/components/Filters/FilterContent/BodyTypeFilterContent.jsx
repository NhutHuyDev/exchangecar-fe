import { Box, Button, Popover, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { byBodyTypeFilterSelector, queryTableSelector } from "redux/selectors";
import filtersSlice from "redux/reducers/filtersSlice";
const bodyTypeData = [
  {
    type: "hatchback",
    typeDisplay: "Hatchback",
    image: "/img/body-type/hatchback.png",
  },
  {
    type: "sedan",
    typeDisplay: "Sedan",
    image: "/img/body-type/sedan.png",
  },
  {
    type: "suv",
    typeDisplay: "SUV",
    image: "/img/body-type/suv.png",
  },
  {
    type: "mpv",
    typeDisplay: "MPV",
    image: "/img/body-type/mpv.png",
  },
  {
    type: "coupe",
    typeDisplay: "Coupe",
    image: "/img/body-type/coupe.png",
  },
  {
    type: "truck",
    typeDisplay: "Truck",
    image: "/img/body-type/truck.png",
  },
  {
    type: "wagon",
    typeDisplay: "Wagon",
    image: "/img/body-type/wagon.png",
  },
  {
    type: "convertible",
    typeDisplay: "Convertible",
    image: "/img/body-type/convertible.png",
  },
];

function BodyTypeFilterContent({ hasButton, boxStyle }) {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const initFilter = useSelector(byBodyTypeFilterSelector);
  const [filterBodyType, setFilterBodyType] = useState(initFilter);

  useEffect(() => {
    setFilterBodyType(initFilter);
  }, [initFilter]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setFilterBodyType(initFilter);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // -----------------------------------------------
  const queryTable = useSelector(queryTableSelector);
  const { body_type } = useSelector(queryTableSelector);

  const handleOnclick = (value) => {
    setFilterBodyType(value);
  };

  const handleFilterBtnOnClick = () => {
    dispatch(filtersSlice.actions.setBodyTypeFilter(filterBodyType));
    dispatch(filtersSlice.actions.setPageFilter(1));
    dispatch(filtersSlice.actions.setQueryFilter(queryTable));

    handleClose();
  };

  const handleFilterClearOnClick = () => {
    dispatch(filtersSlice.actions.setBodyTypeFilter(null));
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
        Body Type
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
              gridTemplateColumns: "repeat(3, 150px)",
              gridAutoFlow: "dense",
              columnGap: "8px",
              rowGap: "8px",
            }}
          >
            {Object.keys(body_type.options).map((bodyTypeParam) => {
              return (
                <>
                  <div
                    class={`item-filter ${
                      filterBodyType === bodyTypeParam ? " filtering" : ""
                    } `}
                    style={{
                      borderBottomLeftRadius: "5px",
                      borderBottomRightRadius: "5px",
                    }}
                    onClick={() => handleOnclick(bodyTypeParam)}
                  >
                    <img src={body_type.options[bodyTypeParam].icon} style={{height: '42px'}} alt="" />
                    <p>{body_type.options[bodyTypeParam].value}</p>
                  </div>
                </>
              );
            })}
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
              sx={{
                minWidth: "150px",
                backgroundColor: "#f97316",
                "&:hover": {
                  backgroundColor: "#f97316",
                },
              }}
              variant="contained"
              onClick={handleFilterBtnOnClick}
            >
              Apply
            </Button>
          </Stack>
        )}
      </Popover>
    </>
  );
}

export default BodyTypeFilterContent;
