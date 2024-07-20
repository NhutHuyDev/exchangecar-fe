import { Box, Button, ButtonGroup, Popover, Slider, Stack, TextField, Typography } from '@mui/material'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

import { useEffect, useState } from 'react';
import filtersSlice from 'redux/reducers/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { byYearManufactureFilterSelector } from 'redux/selectors';

const minValue = 2007
const maxValue = new Date().getFullYear()
const step = 1

function ManufactureYearContent({ hasButton, boxStyle }) {
    const dispatch = useDispatch()
    const initFilter = useSelector(byYearManufactureFilterSelector)

    const [minYear, setMinYear] = useState(minValue)
    const [maxYear, setMaxYear] = useState(maxValue)
    const [sliderValue, setSliderValue] = useState([minValue, maxValue]);
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        if (initFilter.length == 2) {
            setSliderValue(initFilter)
            setMinYear(initFilter[0])
            setMaxYear(initFilter[1])
        } else {
            setMinYear(minValue)
            setMaxYear(maxValue)
            setSliderValue([minValue, maxValue])
        }
    }, [initFilter])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        if (initFilter.length == 2) {
            setSliderValue(initFilter)
            setMinYear(initFilter[0])
            setMaxYear(initFilter[1])
        } else {
            setMinYear(minValue)
            setMaxYear(maxValue)
            setSliderValue([minValue, maxValue])
        }

    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    // ------------------------------------------------

    const handleChange = (event, newValue) => {
        setSliderValue(newValue);
        setMinYear(newValue[0])
        setMaxYear(newValue[1])
    };

    const handleFilterBtnOnClick = () => {
        dispatch(filtersSlice.actions.setYearManufactureFilter(sliderValue))
        dispatch(filtersSlice.actions.setQueryFilter())
        dispatch(filtersSlice.actions.setPageFilter(1))

        handleClose()
    }

    const handleFilterClearOnClick = () => {
        dispatch(filtersSlice.actions.setYearManufactureFilter([]))
        dispatch(filtersSlice.actions.setQueryFilter())
        dispatch(filtersSlice.actions.setPageFilter(1))

        handleClose()
    }

    return (
        <>
            <Button
                aria-describedby={id}
                // variant={JSON.stringify(initFilter) === '{}' ? "outlined" : "contained"}
                className={initFilter.length === 0 ? "" : "choice"}
                onClick={handleClick}
                sx={{
                    fontSize: { xs: '10px', sm: '13px', minWidth: '135px' },
                    color: '#173559',
                    border: '1px solid #173559',
                }}>
                Năm sản xuất
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}

            >
                <Typography
                    variant='h6'
                    textAlign={'center'}
                    color={'#999'}
                    sx={{ padding: '10px 10px 0 10px', fontSize: '18px' }}>
                    Năm sản xuất
                </Typography>
                <Box
                    sx={boxStyle}>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={sliderValue}
                        onChange={handleChange}
                        min={minValue}
                        step={step}
                        max={maxValue}
                        sx={{ color: '#173559' }}
                    />

                    <Stack direction={'row'} alignItems={'center'}>
                        <Box>
                            <Typography variant="span">
                                Từ
                            </Typography>
                            <TextField
                                placeholder={minValue}
                                value={minYear}
                                aria-readonly
                            />
                        </Box>

                        <Box sx={{ padding: '20px 10px 0 10px' }}>
                            <FontAwesomeIcon color='#999' icon={faMinus} />
                        </Box>

                        <Box>
                            <Typography variant="span">
                                Đến
                            </Typography>
                            <TextField
                                placeholder={maxValue}
                                value={maxYear}
                                aria-readonly
                            />
                        </Box>
                    </Stack>
                </Box>
                {
                    hasButton
                    &&
                    <Stack sx={{ padding: '10px' }} gap={1} direction={'row'} justifyContent={'end'}>
                        <Button onClick={handleFilterClearOnClick} sx={{ maxWidth: '100px' }} variant='text' color="error">Xóa</Button>
                        <Button onClick={handleFilterBtnOnClick}
                            sx={{
                                minWidth: '150px',
                                backgroundColor: '#173559',
                                "&:hover": {
                                    backgroundColor: '#173559'
                                },
                            }} variant='contained'>Lọc</Button>
                    </ Stack>
                }
            </Popover>
        </>
    )
}

export default ManufactureYearContent