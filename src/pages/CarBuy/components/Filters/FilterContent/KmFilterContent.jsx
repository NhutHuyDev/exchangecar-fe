import {
  Box,
  Button,
  ButtonGroup,
  Popover,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import filtersSlice from "redux/reducers/filtersSlice";
import { byKmFilterSelector } from "redux/selectors";

const factor = 1;
const minValue = 0;
const maxValue = 999999;
const step = 1000;

const numberToLocaleString = (number) => {
  if (number === "") {
    return "0";
  } else {
    return number.toLocaleString();
  }
};

function KmFilterContent({ hasButton, boxStyle }) {
  const dispatch = useDispatch();
  const initFilter = useSelector(byKmFilterSelector);

  const [minKm, setMinKm] = useState(numberToLocaleString(minValue * factor));
  const [maxKm, setMaxKm] = useState(numberToLocaleString(maxValue * factor));
  const [sliderValue, setSliderValue] = useState([minValue, maxValue]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    if (initFilter.length == 2) {
      setSliderValue(initFilter);
      setMinKm(numberToLocaleString(initFilter[0] * factor));
      setMaxKm(numberToLocaleString(initFilter[1] * factor));
    } else {
      setMinKm(numberToLocaleString(minValue));
      setMaxKm(numberToLocaleString(maxValue));
      setSliderValue([minValue, maxValue]);
    }
  };

  useEffect(() => {
    if (initFilter.length == 2) {
      setSliderValue(initFilter);
      setMinKm(numberToLocaleString(initFilter[0] * factor));
      setMaxKm(numberToLocaleString(initFilter[1] * factor));
    } else {
      setMinKm(numberToLocaleString(minValue));
      setMaxKm(numberToLocaleString(maxValue));
      setSliderValue([minValue, maxValue]);
    }
  }, [initFilter]);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  // ------------------------------------------------

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
    setMinKm(numberToLocaleString(newValue[0] * factor));
    setMaxKm(numberToLocaleString(newValue[1] * factor));
  };

  const handleFilterBtnOnClick = () => {
    dispatch(filtersSlice.actions.setKmFilter(sliderValue));
    dispatch(filtersSlice.actions.setQueryFilter());
    dispatch(filtersSlice.actions.setPageFilter(1));

    handleClose();
  };

  const handleFilterClearOnClick = () => {
    dispatch(filtersSlice.actions.setKmFilter([]));
    dispatch(filtersSlice.actions.setQueryFilter());
    dispatch(filtersSlice.actions.setPageFilter(1));

    handleClose();
  };

  return (
    <>
      <Button
        aria-describedby={id}
        // variant={JSON.stringify(initFilter) === '{}' ? "outlined" : "contained"}
        className={initFilter.length === 0 ? "" : "choice"}
        onClick={handleClick}
        sx={{
          fontSize: { xs: "10px", sm: "13px", minWidth: "135px" },
          fontWeight: "bold",
          color: "#f97316",
          border: "1px solid #f97316 !important",
        }}
      >
        Car Mileage
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
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={sliderValue}
            onChange={handleChange}
            min={minValue}
            step={step}
            max={maxValue}
            sx={{ color: "#f97316" }}
          />

          <Stack direction={"row"} alignItems={"center"}>
            <Box>
              <Typography variant="span">Start (km)</Typography>
              <TextField
                placeholder={numberToLocaleString(minValue * factor)}
                value={minKm}
                // onChange={handleminKmOnChange}
                aria-readonly
              />
            </Box>

            <Box sx={{ padding: "20px 10px 0 10px" }}>
              <FontAwesomeIcon color="#999" icon={faMinus} />
            </Box>

            <Box>
              <Typography variant="span">End (km)</Typography>
              <TextField
                placeholder={numberToLocaleString(maxValue * factor)}
                value={maxKm}
                // onChange={handlemaxKmOnChange}
                aria-readonly
              />
            </Box>
          </Stack>
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

export default KmFilterContent;
