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
import filtersSlice from "redux/reducers/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { byPriceFilterSelector, queryTableSelector } from "redux/selectors";

const factor = 1000000;
const minValue = 0;
const maxValue = 5000;
const step = 50;

const numberToLocaleString = (number) => {
  if (number === "") {
    return "0";
  } else {
    return number.toLocaleString();
  }
};

function BudgetFilterContent({ hasButton, boxStyle }) {
  const dispatch = useDispatch();
  const initFilter = useSelector(byPriceFilterSelector);

  const [anchorEl, setAnchorEl] = useState(null);
  const [minBudget, setMinBudget] = useState(
    numberToLocaleString(minValue * factor)
  );
  const [maxBudget, setMaxBudget] = useState(
    numberToLocaleString(maxValue * factor)
  );
  const [sliderValue, setSliderValue] = useState([minValue, maxValue]);

  useEffect(() => {
    if (initFilter.length == 2) {
      setSliderValue(initFilter);
      setMinBudget(numberToLocaleString(initFilter[0] * factor));
      setMaxBudget(numberToLocaleString(initFilter[1] * factor));
    } else {
      setMinBudget(numberToLocaleString(minValue * factor));
      setMaxBudget(numberToLocaleString(maxValue * factor));
      setSliderValue([minValue, maxValue]);
    }
  }, [initFilter]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);

    if (initFilter.length == 2) {
      setMinBudget(numberToLocaleString(initFilter[0] * factor));
      setMaxBudget(numberToLocaleString(initFilter[1] * factor));
      setSliderValue([initFilter[0], initFilter[1]]);
    } else {
      setMinBudget(numberToLocaleString(minValue * factor));
      setMaxBudget(numberToLocaleString(maxValue * factor));
      setSliderValue([minValue, maxValue]);
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  // ------------------------------------------------

  const queryTable = useSelector(queryTableSelector);

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
    setMinBudget(numberToLocaleString(newValue[0] * factor));
    setMaxBudget(numberToLocaleString(newValue[1] * factor));
  };

  // const handleMinBudgetOnChange = (event) => {
  //     var budgetValue = event.target.value
  //     budgetValue = budgetValue.replace(/\D/g, '')
  //     budgetValue = budgetValue == '' ? minValue * factor : budgetValue
  //     budgetValue = parseInt(budgetValue) > parseInt(maxBudget.replace(/\D/g, '')) ? minValue * factor : budgetValue
  //     setSliderValue([parseInt(budgetValue) / factor, sliderValue[1]])
  //     setMinBudget(numberToLocaleString(parseInt(budgetValue)))
  // }

  // const handleMaxBudgetOnChange = (event) => {
  //     var budgetValue = event.target.value
  //     budgetValue = budgetValue.replace(/\D/g, '')
  //     budgetValue = budgetValue == '' ? maxValue * factor : budgetValue
  //     budgetValue = parseInt(budgetValue) < parseInt(minBudget.replace(/\D/g, ''))
  //                 || parseInt(budgetValue) > maxBudget * factor ? maxValue * factor : budgetValue
  //     setSliderValue([sliderValue[0], parseInt(budgetValue) / factor])
  //     setMaxBudget(numberToLocaleString(parseInt(budgetValue)))
  // }

  const handleFilterBtnOnClick = () => {
    dispatch(filtersSlice.actions.setPriceFilter(sliderValue));
    dispatch(filtersSlice.actions.setPageFilter(1));
    dispatch(filtersSlice.actions.setQueryFilter(queryTable));

    handleClose();
  };

  const handleFilterClearOnClick = () => {
    dispatch(filtersSlice.actions.setPriceFilter([]));
    dispatch(filtersSlice.actions.setPageFilter(1));
    dispatch(filtersSlice.actions.setQueryFilter(queryTable));

    handleClose();
  };

  return (
    <>
      <Button
        aria-describedby={id}
        className={initFilter.length === 0 ? "" : "choice"}
        onClick={handleClick}
        sx={{
          fontSize: { xs: "10px", sm: "13px", minWidth: "140px" },
          fontWeight: "bold",
          color: "#f97316",
          border: "1px solid #f97316 !important",
        }}
      >
        Your Budget
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
              <Typography variant="span">From (VND)</Typography>
              <TextField
                placeholder={numberToLocaleString(minValue * factor)}
                value={minBudget}
                // onChange={handleMinBudgetOnChange}
                aria-readonly
              />
            </Box>

            <Box sx={{ padding: "20px 10px 0 10px" }}>
              <FontAwesomeIcon color="#999" icon={faMinus} />
            </Box>

            <Box>
              <Typography variant="span">To (VND)</Typography>
              <TextField
                placeholder={numberToLocaleString(maxValue * factor)}
                value={maxBudget}
                // onChange={handleMaxBudgetOnChange}
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

export default BudgetFilterContent;
