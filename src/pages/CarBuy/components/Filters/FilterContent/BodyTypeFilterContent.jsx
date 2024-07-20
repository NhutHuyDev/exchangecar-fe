import { Box, Button, Popover, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { byBodyTypeFilterSelector } from 'redux/selectors';
import filtersSlice from 'redux/reducers/filtersSlice';
const bodyTypeData = [
    {
        type: 'hatchback',
        typeDisplay: 'Hatchback',
        image: '/img/body-type/hatchback.png',
    },
    {
        type: 'sedan',
        typeDisplay: 'Sedan',
        image: '/img/body-type/sedan.png',
    },
    {
        type: 'suv',
        typeDisplay: 'SUV',
        image: '/img/body-type/suv.png',
    },
    {
        type: 'mpv',
        typeDisplay: 'MPV',
        image: '/img/body-type/mpv.png',
    },
    {
        type: 'coupe',
        typeDisplay: 'Coupe',
        image: '/img/body-type/coupe.png',
    },
    {
        type: 'truck',
        typeDisplay: 'Truck',
        image: '/img/body-type/truck.png',
    },
    {
        type: 'wagon',
        typeDisplay: 'Wagon',
        image: '/img/body-type/wagon.png',
    },
    {
        type: 'convertible',
        typeDisplay: 'Convertible',
        image: '/img/body-type/convertible.png',
    }
]

function BodyTypeFilterContent({ hasButton, boxStyle }) {
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null)
    const initFilter = useSelector(byBodyTypeFilterSelector)
    const [filterBodyType, setFilterBodyType] = useState(initFilter)

    useEffect(() => {
        setFilterBodyType(initFilter)
    }, [initFilter])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setFilterBodyType(initFilter)
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    // -----------------------------------------------


    const handleOnclick = (value) => {
        let newBodyTypeFilter = [...filterBodyType]
        if (filterBodyType.includes(value)) {
            newBodyTypeFilter.splice(newBodyTypeFilter.indexOf(value), 1)
        } else {
            newBodyTypeFilter = [...newBodyTypeFilter, value]
        }

        setFilterBodyType(newBodyTypeFilter)
    };

    const handleFilterBtnOnClick = () => {
        dispatch(filtersSlice.actions.setBodyTypeFilter(filterBodyType))
        dispatch(filtersSlice.actions.setQueryFilter())
        dispatch(filtersSlice.actions.setPageFilter(1))

        handleClose()
    }

    const handleFilterClearOnClick = () => {
        dispatch(filtersSlice.actions.setBodyTypeFilter([]))
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
                Kiểu dáng
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
                    Kiểu dáng
                </Typography>
                <Box
                    sx={boxStyle}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gridAutoFlow: 'dense', columnGap: '8px', rowGap: '8px' }}>
                        {
                            bodyTypeData.map((bodyType) => {
                                return (
                                    <>
                                        {/* ${bodyType.type == current ? ' active' : ''} */}
                                        <div class={`item-filter ${filterBodyType.includes(bodyType.type) ? ' filtering' : ''} `}
                                            style={{ borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' }}
                                            onClick={() => handleOnclick(bodyType.type)}
                                        // onBlur={() => handleOnBlur()}
                                        >
                                            <img src={bodyType.image} alt="" />
                                            <p>{bodyType.typeDisplay}</p>
                                        </div>
                                    </>)
                            })
                        }
                    </div>
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

export default BodyTypeFilterContent