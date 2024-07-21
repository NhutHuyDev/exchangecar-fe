import { Box, Button, Typography, Popover, Stack } from '@mui/material';

import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import filtersSlice from 'redux/reducers/filtersSlice'
import { byBrandModelFilterSelector} from 'redux/selectors'
import capitalization from 'utils/capitalization';

const brandModelCarData = [
    {
        brand: 'honda',
        logo: '/img/car-logo/honda.png',
        models: ['crv', 'civic', 'jazz'],
    },
    {
        brand: 'toyota',
        logo: '/img/car-logo/toyota.png',
        models: ['camry', 'fortuner', 'land cruiser', 'vios', 'innova', 'corrolla cross'],
    },
    {
        brand: 'ford',
        logo: '/img/car-logo/ford.png',
        models: ['everest', 'ranger', 'ecosport', 'ranger raptor'],
    },
    {
        brand: 'mazda',
        logo: '/img/car-logo/mazda.png',
        models: ['3', '6', 'cx8', 'cx5'],
    },
    {
        brand: 'mercedes',
        logo: '/img/car-logo/mercedes.svg',
        models: ['c class', 's class', 'e class', 'gl class'],
    },
    {
        brand: 'nissan',
        logo: '/img/car-logo/nissan.png',
        models: ['navara'],
    },
    {
        brand: 'mitsubishi',
        logo: '/img/car-logo/mitsubishi.png',
        models: ['outlander', 'triton', 'pajero sport', 'xpander cross', 'xpander'],
    },
    {
        brand: 'kia',
        logo: '/img/car-logo/kia.png',
        models: ['sorento', 'k3', 'seltos', 'sedona platinum']
    }
]


function BrandModelFilterContent({ boxStyle, hasButton }) {
    const dispatch = useDispatch()
    const initFilter = useSelector(byBrandModelFilterSelector)
    const [filterBrandModel, setFilterBrandModel] = useState(initFilter)
    const [currentBrandName, setCurrentBrandName] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        setFilterBrandModel(initFilter)
    }, [initFilter])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setCurrentBrandName(null)
        setFilterBrandModel(initFilter)
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    // -----------------------------------------------

    const handleOnclick = (brandName) => {
        if (currentBrandName == brandName) {
            setCurrentBrandName(null);
        } else {
            setCurrentBrandName(brandName);
        }
    };

    const handleOnBlur = () => {
        setCurrentBrandName(null);
    };

    const handleBrandAllModelToggle = (brand) => {
        if (filterBrandModel.hasOwnProperty(brand)) {
            if (filterBrandModel[brand].length == 0) {
                const newfilterBrandModel = { ...filterBrandModel }
                delete newfilterBrandModel[brand]
                setFilterBrandModel({ ...newfilterBrandModel })
            } else {
                const keyValue = { [brand]: [] }
                setFilterBrandModel({ ...filterBrandModel, ...keyValue })
            }
        } else {
            const keyValue = { [brand]: [] }
            setFilterBrandModel({ ...filterBrandModel, ...keyValue })
        }
    }
    const handleBrandModelModelToggle = (brand, model) => {
        if (filterBrandModel.hasOwnProperty(brand)) {
            if (filterBrandModel[brand].includes(model)) {
                if (filterBrandModel[brand].length == 1) {
                    const newfilterBrandModel = { ...filterBrandModel }
                    delete newfilterBrandModel[brand]
                    setFilterBrandModel({ ...newfilterBrandModel })
                } else {
                    const newModelFilter = [...filterBrandModel[brand]]
                    newModelFilter.splice(filterBrandModel[brand].indexOf(model), 1)

                    const newfilterBrandModel = { ...filterBrandModel }
                    delete newfilterBrandModel[brand]
                    const updatedKeyValue = { [brand]: [...newModelFilter] }
                    setFilterBrandModel({ ...newfilterBrandModel, ...updatedKeyValue })
                }
            } else {
                const newfilterBrandModel = { ...filterBrandModel }
                console.log(newfilterBrandModel[brand])
                newfilterBrandModel[brand] = [...newfilterBrandModel[brand], model]
                setFilterBrandModel({ ...newfilterBrandModel })
            }
        } else {
            const keyValue = { [brand]: [model] }
            setFilterBrandModel({ ...filterBrandModel, ...keyValue })
        }
    }

    const handleFilterBtnOnClick = () => {
        const filterBrand = []
        const filterModel = []
        for (const key in filterBrandModel) {
            if (Object.hasOwnProperty.call(filterBrandModel, key)) {
                filterBrand.push(key)
                if (filterBrandModel[key].length) {
                    filterModel.push(...filterBrandModel[key])
                }
            }
        }
        console.log(filterBrand);
        dispatch(filtersSlice.actions.setBrandFilter(filterBrand))
        dispatch(filtersSlice.actions.setModelFilter(filterModel))
        dispatch(filtersSlice.actions.setBrandModelFilter(filterBrandModel))
        dispatch(filtersSlice.actions.setPageFilter(1))
        dispatch(filtersSlice.actions.setQueryFilter())

        handleClose()
    }

    const handleFilterClearOnClick = () => {
        dispatch(filtersSlice.actions.setBrandFilter([]))
        dispatch(filtersSlice.actions.setModelFilter([]))
        dispatch(filtersSlice.actions.setBrandModelFilter({}))
        dispatch(filtersSlice.actions.setPageFilter(1))
        dispatch(filtersSlice.actions.setQueryFilter())

        handleClose()
    }

    return (
        <>
            <Button
                aria-describedby={id}
                className={JSON.stringify(initFilter) === '{}' ? "" : "choice"}
                onClick={handleClick}
                sx={{
                    fontSize: { xs: '10px', sm: '13px', minWidth: '135px' },
                    fontWeight: 'bold',
                    color: '#f97316',
                    border: '1px solid #f97316 !important',
                }}>
                Car Brand
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
               
                <Box
                    sx={boxStyle}>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gridAutoFlow: 'dense', columnGap: '8px', rowGap: '8px' }}>
                        {
                            brandModelCarData.map((brandModel) => {
                                return (
                                    <>
                                        <div class={`item-filter ${filterBrandModel.hasOwnProperty(brandModel.brand) ? ' filtering' : ''}
                                    ${brandModel.brand === currentBrandName ? ' active' : ''}`}
                                            onClick={() => handleOnclick(brandModel.brand)}
                                            onBlur={() => handleOnBlur()}
                                        >
                                            <img src={brandModel.logo} alt="" />
                                            <p>{capitalization(brandModel.brand)}</p>
                                        </div>

                                        <div class={`item-sub ${brandModel.brand === currentBrandName ? ' active' : ''}`}
                                            style={{
                                                display: `${brandModel.brand === currentBrandName ? 'block' : 'none'}`,
                                                gridColumn: 'span 3 / span 3'
                                            }} >
                                            <div className='flex w-full flex-wrap'>
                                                <div className={`item-sub-filter ${filterBrandModel.hasOwnProperty(brandModel.brand) &&
                                                    filterBrandModel[brandModel.brand].length === 0 ? ' active' : ''}`}
                                                    onClick={() => handleBrandAllModelToggle(brandModel.brand)}>Tất cả</div>
                                                {
                                                    brandModel.models.map((model) =>
                                                        <div className={`item-sub-filter ${filterBrandModel.hasOwnProperty(brandModel.brand) &&
                                                            filterBrandModel[brandModel.brand].includes(model) ? ' active' : ''}`}
                                                            onClick={() => handleBrandModelModelToggle(brandModel.brand, model)}
                                                        >{capitalization(model)}</div>
                                                    )
                                                }
                                            </div>
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

export default BrandModelFilterContent