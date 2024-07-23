import { Box, Button, Typography, Popover, Stack } from "@mui/material";

import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import filtersSlice from "redux/reducers/filtersSlice";
import {
  byBrandFilterSelector,
  byModelFilterSelector,
  queryTableSelector,
} from "redux/selectors";
import capitalization from "utils/capitalization";

function BrandModelFilterContent({ boxStyle, hasButton }) {
  const dispatch = useDispatch();
  const initBrandFilter = useSelector(byBrandFilterSelector);
  const initModelFilter = useSelector(byModelFilterSelector);
  const [filterBrand, setFilterBrand] = useState(initBrandFilter);
  const [filterModel, setFilterModel] = useState(initModelFilter);
  const [currentBrandName, setCurrentBrandName] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    setFilterBrand(initBrandFilter);
    setFilterModel(initModelFilter);
  }, [initBrandFilter, initModelFilter]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setCurrentBrandName(null);
    setFilterBrand(initBrandFilter);
    setFilterModel(initModelFilter);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // -----------------------------------------------


  const { car_brand } = useSelector(queryTableSelector);
  const queryTable = useSelector(queryTableSelector);

  const handleOnclick = (brandName) => {
    if (currentBrandName === brandName) {
      setCurrentBrandName(null);
    } else {
      setCurrentBrandName(brandName);
    }
  };

  const handleOnBlur = () => {
    setCurrentBrandName(null);
  };

  const handleBrandAllModelToggle = (brand) => {
    setFilterBrand(brand);
    setFilterModel(null);
  };

  const handleBrandModelModelToggle = (brand, model) => {
    setFilterBrand(brand);
    setFilterModel(model);
  };

  const handleFilterBtnOnClick = () => {
    dispatch(filtersSlice.actions.setBrandFilter(filterBrand));
    dispatch(filtersSlice.actions.setModelFilter(filterModel));
    dispatch(filtersSlice.actions.setPageFilter(1));
    dispatch(filtersSlice.actions.setQueryFilter(queryTable));

    handleClose();
  };

  const handleFilterClearOnClick = () => {
    dispatch(filtersSlice.actions.setBrandFilter(null));
    dispatch(filtersSlice.actions.setModelFilter(null));
    dispatch(filtersSlice.actions.setPageFilter(1));
    dispatch(filtersSlice.actions.setQueryFilter(queryTable));

    handleClose();
  };


  return (
    <>
        <>
          <Button
            aria-describedby={id}
            className={!initBrandFilter ? "" : "choice"}
            onClick={handleClick}
            sx={{
              fontSize: { xs: "10px", sm: "13px", minWidth: "140px" },
              fontWeight: "bold",
              color: "#f97316",
              border: "1px solid #f97316 !important",
            }}
          >
            Car Brand
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
                  gridTemplateColumns: "repeat(3, 130px)",
                  gridAutoFlow: "dense",
                  columnGap: "7px",
                  rowGap: "7px",
                }}
              >
                {Object.keys(car_brand.options).map((brandParam) => {
                  return (
                    <>
                      <div
                        class={`item-filter ${
                          filterBrand === brandParam ? " filtering" : ""
                        }
                                    ${
                                      brandParam === currentBrandName
                                        ? " active"
                                        : ""
                                    }`}
                        onClick={() => handleOnclick(brandParam)}
                        onBlur={() => handleOnBlur()}
                      >
                        <img src={car_brand.options[brandParam].logo} alt="" />
                        <p>
                          {capitalization(car_brand.options[brandParam].value)}
                        </p>
                      </div>

                      <div
                        class={`item-sub ${
                          brandParam === currentBrandName ? " active" : ""
                        }`}
                        style={{
                          display: `${
                            brandParam === currentBrandName ? "block" : "none"
                          }`,
                          gridColumn: "span 3 / span 3",  
                        }}
                      >
                        <div className="flex w-full flex-wrap justify-center">
                          <div
                            className={`item-sub-filter ${
                              filterBrand === brandParam && !filterModel
                                ? " active"
                                : ""
                            }`}
                            onClick={() =>
                              handleBrandAllModelToggle(brandParam)
                            }
                          >
                            All Model
                          </div>
                          {Object.keys(
                            car_brand.options[brandParam].car_model.options
                          ).map((modelParam) => (
                            <div
                              className={`item-sub-filter ${
                                filterBrand === brandParam &&
                                filterModel === modelParam
                                  ? " active"
                                  : ""
                              }`}
                              onClick={() =>
                                handleBrandModelModelToggle(
                                  brandParam,
                                  modelParam
                                )
                              }
                            >
                              {capitalization(
                                car_brand.options[brandParam].car_model.options[
                                  modelParam
                                ]
                              )}
                            </div>
                          ))}
                        </div>
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
    </>
  );
}

export default BrandModelFilterContent;
