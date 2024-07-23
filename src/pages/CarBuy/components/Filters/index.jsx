import Stack from "@mui/material/Stack";
import PopoverFilter from "./PopoverFilter";
import { Chip, Divider } from "@mui/material";

import BrandModelFilterContent from "./FilterContent/BrandModelFilterContent";
import StatusFilterContent from "./FilterContent/StatusFilterContent";
import BodyTypeFilterContent from "./FilterContent/BodyTypeFilterContent";
import BudgetFilterContent from "./FilterContent/BudgetFilterContent";
import ManufactureYearContent from "./FilterContent/ManufactureYearContent";
import KmFilterContent from "./FilterContent/KmFilterContent";
import CityFilterContent from "./FilterContent/CityFilterContent";

import "./Filters.css";

import { useDispatch, useSelector } from "react-redux";
import {
  byBodyTypeFilterSelector,
  byBrandFilterSelector,
  byModelFilterSelector,
  byKmFilterSelector,
  byPriceFilterSelector,
  byYearManufactureFilterSelector,
  queryTableSelector,
  byCityFilterSelector,
  byStatusFilterSelector,
  orderBySelector,
} from "redux/selectors";

import brandModelObjectToArray from "utils/brandModelObjectToArray";
import numberToLocaleString from "utils/numberToLocaleString";
import VNDFormatToWord2 from "utils/VNDFormatToWord2";
import filtersSlice from "redux/reducers/filtersSlice";
import OrderByContent from "./FilterContent/OrderByContent";

function Filters() {
  const dispatch = useDispatch();
  const brandFilter = useSelector(byBrandFilterSelector);
  const modelFilter = useSelector(byModelFilterSelector);
  const yearManufactureFilterFilter = useSelector(
    byYearManufactureFilterSelector
  );
  const cityFilter = useSelector(byCityFilterSelector);
  const statusFilter = useSelector(byStatusFilterSelector);
  const kmFilter = useSelector(byKmFilterSelector);
  const orderBy = useSelector(orderBySelector);

  const bodyTypeFilter = useSelector(byBodyTypeFilterSelector);
  const queryTable = useSelector(queryTableSelector);
  const { car_brand, city, car_status, order_by } =
    useSelector(queryTableSelector);
  const priceFilter = useSelector(byPriceFilterSelector);

  const handleChipOnClose = (typeOnClose) => {
    dispatch(filtersSlice.actions.removeFilterValue({ typeOnClose }));
    dispatch(filtersSlice.actions.setQueryFilter(queryTable));
  };

  const handleChipAllClose = () => {
    dispatch(filtersSlice.actions.clearAll("all"));
    dispatch(filtersSlice.actions.setQueryFilter(queryTable));
  };

  return (
    <>
      {car_brand && (
        <Stack
          direction={"row"}
          gap={1}
          maxWidth={"100%"}
          sx={{ overflowX: "auto", paddingBottom: "8px" }}
        >
          <BrandModelFilterContent
            hasButton={true}
            boxStyle={{
              maxHeight: "300px",
              overflowY: "scroll",
              padding: "10px",
            }}
          />

          <ManufactureYearContent
            hasButton={true}
            boxStyle={{
              maxWidth: "400px",
              padding: "20px",
            }}
          />

          <CityFilterContent
            hasButton={true}
            boxStyle={{
              maxHeight: "300px",
              overflowY: "scroll",
              padding: "20px",
            }}
          />

          <BudgetFilterContent
            hasButton={true}
            boxStyle={{
              maxWidth: "400px",
              padding: "20px",
            }}
          />

          <StatusFilterContent
            hasButton={true}
            boxStyle={{
              maxHeight: "300px",
              overflowY: "scroll",
              padding: "20px",
            }}
          />

          <KmFilterContent
            hasButton={true}
            boxStyle={{
              maxWidth: "400px",
              padding: "20px",
            }}
          />

          <OrderByContent
            hasButton={true}
            boxStyle={{
              maxHeight: "300px",
              overflowY: "scroll",
              padding: "20px",
            }}
          />

          {/* <BodyTypeFilterContent
            hasButton={true}
            boxStyle={{
              maxHeight: "300px",
              overflowY: "scroll",
              padding: "10px",
            }}
          /> */}
        </Stack>
      )}
      {car_brand && (
        <Stack
          direction="row"
          spacing={1}
          maxWidth={"100%"}
          sx={{ overflowX: "auto" }}
        >
          {brandFilter ||
          modelFilter ||
          yearManufactureFilterFilter.length ||
          priceFilter.length ||
          cityFilter ||
          statusFilter ||
          kmFilter.length ||
          orderBy ? (
            // bodyTypeFilter.length ||
            // priceFilter.length ||

            <Chip
              sx={{
                color: "rgba(255, 0, 0, 0.6)",
                borderRadius: "10px",
                backgroundColor: "transparent",
                "&:hover": {
                  color: "red",
                  backgroundColor: "transparent",
                },
              }}
              label="Clear All"
              variant="filled"
              onClick={() => handleChipAllClose()}
            />
          ) : (
            ""
          )}
          {car_brand && brandFilter ? (
            <Chip
              sx={{
                backgroundColor: "#fa9148",
                color: "white",
                borderRadius: "10px",
              }}
              label={
                car_brand.options[brandFilter]?.value +
                " " +
                (brandFilter && modelFilter
                  ? car_brand.options[brandFilter]?.car_model.options[
                      modelFilter
                    ]
                  : "")
              }
              variant="filled"
              color="primary"
              onDelete={() => handleChipOnClose("byBrandModel")}
            />
          ) : (
            ""
          )}

          {yearManufactureFilterFilter.length ? (
            <Chip
              sx={{
                backgroundColor: "#fa9148",
                color: "white",
                borderRadius: "10px",
              }}
              label={
                "năm " +
                yearManufactureFilterFilter[0] +
                " - " +
                yearManufactureFilterFilter[1]
              }
              variant="filled"
              color="primary"
              onDelete={() => handleChipOnClose("byYearManufacture", "")}
            />
          ) : (
            ""
          )}

          {cityFilter && (
            <Chip
              sx={{
                backgroundColor: "#fa9148",
                color: "white",
                borderRadius: "10px",
              }}
              label={city.options[cityFilter]}
              variant="filled"
              color="primary"
              onDelete={() => handleChipOnClose("byCity", cityFilter)}
            />
          )}

          {priceFilter.length ? (
            <Chip
              sx={{
                backgroundColor: "#fa9148",
                color: "white",
                borderRadius: "10px",
              }}
              label={
                VNDFormatToWord2(priceFilter[0]) +
                " - " +
                VNDFormatToWord2(priceFilter[1]) +
                " VND"
              }
              variant="filled"
              color="primary"
              onDelete={() => handleChipOnClose("byPrice", "")}
            />
          ) : (
            ""
          )}

          {statusFilter && (
            <Chip
              sx={{
                backgroundColor: "#fa9148",
                color: "white",
                borderRadius: "10px",
              }}
              label={car_status.options[statusFilter] + " Car"}
              variant="filled"
              color="primary"
              onDelete={() => handleChipOnClose("byStatus", statusFilter)}
            />
          )}

          {kmFilter.length ? (
            <Chip
              sx={{
                backgroundColor: "#fa9148",
                color: "white",
                borderRadius: "10px",
              }}
              label={
                numberToLocaleString(kmFilter[0]) +
                " - " +
                numberToLocaleString(kmFilter[1]) +
                " km"
              }
              variant="filled"
              color="primary"
              onDelete={() => handleChipOnClose("byKm", "")}
            />
          ) : (
            ""
          )}

          {orderBy && (
            <Chip
              sx={{
                backgroundColor: "#fa9148",
                color: "white",
                borderRadius: "10px",
              }}
              label={order_by.options[orderBy]}
              variant="filled"
              color="primary"
              onDelete={() => orderBy === '-posted_at' || handleChipOnClose("orderBy", orderBy)}
            />
          )}

          {/* {bodyTypeFilter.map((bodyType) => (
          <Chip
            sx={{
              backgroundColor: "#173559",
              color: "white",
              borderRadius: "10px",
            }}
            label={bodyType}
            variant="filled"
            color="primary"
            onDelete={() => handleChipOnClose("byBodyType", bodyType)}
          />
        ))} */}

          {/* {priceFilter.length ? (
          <Chip
            sx={{
              backgroundColor: "#173559",
              color: "white",
              borderRadius: "10px",
            }}
            label={
              VNDFormatToWord2(priceFilter[0]) +
              " - " +
              VNDFormatToWord2(priceFilter[1]) +
              " VND"
            }
            variant="filled"
            color="primary"
            onDelete={() => handleChipOnClose("byPrice", "")}
          />
        ) : (
          ""
        )} */}
        </Stack>
      )}
    </>
  );
}

export default Filters;
