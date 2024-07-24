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
  byOriginFilterSelector,
  byEngineTypeFilterSelector,
  byTransmissionFilterSelector,
  byDrivetrainFilterSelector,
  byOutColorFilterSelector,
  byTotalDoorsFilterSelector,
  byTotalSeatingFilterSelector,
} from "redux/selectors";

import brandModelObjectToArray from "utils/brandModelObjectToArray";
import numberToLocaleString from "utils/numberToLocaleString";
import VNDFormatToWord2 from "utils/VNDFormatToWord2";
import filtersSlice from "redux/reducers/filtersSlice";
import OrderByContent from "./FilterContent/OrderByContent";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import OriginFilterContent from "./FilterContent/OriginFilterContent";
import EngineTypeFilterContent from "./FilterContent/EngineTypeFilterContent";
import TransmissionFilterContent from "./FilterContent/TransmissionFilterContent";
import DrivetrainFilterContent from "./FilterContent/DrivetrainFilterContent";
import OutColorFilterContent from "./FilterContent/OutColorFilterContent";
import TotalSeatingFilterContent from "./FilterContent/TotalSeatingFilterContent";
import TotalDoorsFilterContent from "./FilterContent/TotalDoorsFilterContent";

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
  const bodyTypeFilter = useSelector(byBodyTypeFilterSelector);
  const priceFilter = useSelector(byPriceFilterSelector);
  const originFilter = useSelector(byOriginFilterSelector);
  const engineTypeFilter = useSelector(byEngineTypeFilterSelector);
  const transmissionFilter = useSelector(byTransmissionFilterSelector);
  const drivetrainFilter = useSelector(byDrivetrainFilterSelector);
  const outColorFilter = useSelector(byOutColorFilterSelector);
  const totalSeatingFilter = useSelector(byTotalSeatingFilterSelector);
  const totalDoorsFilter = useSelector(byTotalDoorsFilterSelector);
  const orderBy = useSelector(orderBySelector);

  const queryTable = useSelector(queryTableSelector);
  const {
    car_brand,
    city,
    car_status,
    order_by,
    body_type,
    car_origin,
    engine_type,
    transmission,
    drivetrain,
    out_color,
    total_seating,
    total_doors,
  } = useSelector(queryTableSelector);

  const handleChipOnClose = (typeOnClose) => {
    dispatch(filtersSlice.actions.removeFilterValue({ typeOnClose }));
    dispatch(filtersSlice.actions.setQueryFilter(queryTable));
  };

  const handleChipAllClose = () => {
    dispatch(filtersSlice.actions.clearAll("all"));
    dispatch(filtersSlice.actions.setQueryFilter(queryTable));
  };

  const [openMoreFilter, setOpenMoreFilter] = useState(false);
  const toggleOpenMoreFilter = () => {
    setOpenMoreFilter((preState) => !preState);
  };

  return (
    <>
      {car_brand && (
        <Stack
          direction={"row"}
          gap={1}
          maxWidth={"100%"}
          sx={{ overflowX: "auto" }}
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

          {!openMoreFilter ? (
            <>
              <button
                className="text-primary-color italic ms-4"
                onClick={toggleOpenMoreFilter}
              >
                <span>More Filters</span>
                <FontAwesomeIcon
                  icon={faCaretUp}
                  className="text-primary-color ms-2"
                />
              </button>
            </>
          ) : (
            <button
              className="text-primary-color italic ms-4"
              onClick={toggleOpenMoreFilter}
            >
              <span>Hide Filters</span>
              <FontAwesomeIcon
                icon={faCaretDown}
                className="text-primary-color ms-2"
              />
            </button>
          )}
        </Stack>
      )}

      {car_brand && openMoreFilter && (
        <Stack
          direction="row"
          spacing={1}
          maxWidth={"100%"}
          sx={{ overflowX: "auto", paddingBottom: "8px" }}
        >
          <BodyTypeFilterContent
            hasButton={true}
            boxStyle={{
              maxHeight: "300px",
              overflowY: "scroll",
              padding: "10px",
            }}
          />

          <OriginFilterContent
            hasButton={true}
            boxStyle={{
              maxHeight: "300px",
              overflowY: "scroll",
              padding: "20px",
            }}
          />

          <EngineTypeFilterContent
            hasButton={true}
            boxStyle={{
              maxHeight: "300px",
              overflowY: "scroll",
              padding: "20px",
            }}
          />

          <TransmissionFilterContent
            hasButton={true}
            boxStyle={{
              maxHeight: "300px",
              overflowY: "scroll",
              padding: "20px",
            }}
          />

          <DrivetrainFilterContent
            hasButton={true}
            boxStyle={{
              maxHeight: "300px",
              overflowY: "scroll",
              padding: "20px",
            }}
          />

          <OutColorFilterContent
            hasButton={true}
            boxStyle={{
              maxHeight: "300px",
              overflowY: "scroll",
              padding: "20px",
            }}
          />

          <TotalSeatingFilterContent
            hasButton={true}
            boxStyle={{
              maxHeight: "300px",
              overflowY: "scroll",
              padding: "20px",
            }}
          />

          <TotalDoorsFilterContent
            hasButton={true}
            boxStyle={{
              maxHeight: "300px",
              overflowY: "scroll",
              padding: "20px",
            }}
          />
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
          bodyTypeFilter ||
          originFilter ||
          transmissionFilter ||
          drivetrainFilter ||
          outColorFilter ||
          totalSeatingFilter ||
          totalDoorsFilter ||
          orderBy ? (
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
              onDelete={() => handleChipOnClose("orderBy", orderBy)}
            />
          )}

          {bodyTypeFilter && (
            <Chip
              sx={{
                backgroundColor: "#fa9148",
                color: "white",
                borderRadius: "10px",
              }}
              label={body_type.options[bodyTypeFilter].value}
              variant="filled"
              color="primary"
              onDelete={() => handleChipOnClose("byBodyType", bodyTypeFilter)}
            />
          )}

          {originFilter && (
            <Chip
              sx={{
                backgroundColor: "#fa9148",
                color: "white",
                borderRadius: "10px",
              }}
              label={car_origin.options[originFilter]}
              variant="filled"
              color="primary"
              onDelete={() => handleChipOnClose("byOrigin", originFilter)}
            />
          )}

          {engineTypeFilter && (
            <Chip
              sx={{
                backgroundColor: "#fa9148",
                color: "white",
                borderRadius: "10px",
              }}
              label={engine_type.options[engineTypeFilter]}
              variant="filled"
              color="primary"
              onDelete={() =>
                handleChipOnClose("byEngineType", engineTypeFilter)
              }
            />
          )}

          {transmissionFilter && (
            <Chip
              sx={{
                backgroundColor: "#fa9148",
                color: "white",
                borderRadius: "10px",
              }}
              label={transmission.options[transmissionFilter]}
              variant="filled"
              color="primary"
              onDelete={() =>
                handleChipOnClose("byTransmission", transmissionFilter)
              }
            />
          )}

          {drivetrainFilter && (
            <Chip
              sx={{
                backgroundColor: "#fa9148",
                color: "white",
                borderRadius: "10px",
              }}
              label={drivetrain.options[drivetrainFilter]}
              variant="filled"
              color="primary"
              onDelete={() =>
                handleChipOnClose("byDrivetrain", drivetrainFilter)
              }
            />
          )}

          {outColorFilter && (
            <Chip
              sx={{
                backgroundColor: "#fa9148",
                color: "white",
                borderRadius: "10px",
              }}
              label={out_color.options[outColorFilter].value}
              variant="filled"
              color="primary"
              onDelete={() => handleChipOnClose("byOutColor", outColorFilter)}
            />
          )}

          {totalSeatingFilter && (
            <Chip
              sx={{
                backgroundColor: "#fa9148",
                color: "white",
                borderRadius: "10px",
              }}
              label={totalSeatingFilter + " seats"}
              variant="filled"
              color="primary"
              onDelete={() =>
                handleChipOnClose("byTotalSeating", totalSeatingFilter)
              }
            />
          )}

          {totalDoorsFilter && (
            <Chip
              sx={{
                backgroundColor: "#fa9148",
                color: "white",
                borderRadius: "10px",
              }}
              label={totalDoorsFilter + " doors"}
              variant="filled"
              color="primary"
              onDelete={() =>
                handleChipOnClose("byTotalDoors", totalDoorsFilter)
              }
            />
          )}
        </Stack>
      )}
    </>
  );
}

export default Filters;
