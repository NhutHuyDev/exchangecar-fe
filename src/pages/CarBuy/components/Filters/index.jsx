import Stack from '@mui/material/Stack';
import PopoverFilter from './PopoverFilter';
import { Chip, Divider } from '@mui/material';

import BrandModelFilterContent from './FilterContent/BrandModelFilterContent'
import BodyTypeFilterContent from './FilterContent/BodyTypeFilterContent';
import BudgetFilterContent from './FilterContent/BudgetFilterContent';
import ManufactureYearContent from './FilterContent/ManufactureYearContent';
import KmFilterContent from './FilterContent/KmFilterContent';

import './Filters.css'

import { useDispatch, useSelector } from 'react-redux';
import { byBodyTypeFilterSelector, byBrandModelFilterSelector, byKmFilterSelector, byPriceFilterSelector, byYearManufactureFilterSelector } from 'redux/selectors';

import brandModelObjectToArray from 'utils/brandModelObjectToArray';
import numberToLocaleString from 'utils/numberToLocaleString';
import VNDFormatToWord2 from 'utils/VNDFormatToWord2';
import filtersSlice from 'redux/reducers/filtersSlice';


function Filters() {
    const dispatch = useDispatch()
    const brandModelFilter = useSelector(byBrandModelFilterSelector)
    const bodyTypeFilter = useSelector(byBodyTypeFilterSelector)
    const priceFilter = useSelector(byPriceFilterSelector)
    const yearManufactureFilterFilter = useSelector(byYearManufactureFilterSelector)
    const kmFilter = useSelector(byKmFilterSelector)

    const handleChipOnClose = (typeOnClose, valueOnClose) => {
        dispatch(filtersSlice.actions.removeFilterValue({ typeOnClose, valueOnClose }))
        dispatch(filtersSlice.actions.setQueryFilter())
    }

    const handleChipAllClose = () => {
        dispatch(filtersSlice.actions.clearAll('all'))
        dispatch(filtersSlice.actions.setQueryFilter())
    }

    return (
        <>
            <Stack direction={'row'} gap={1} maxWidth={'100%'} sx={{ overflowX: 'auto', paddingBottom: '8px' }}>
                <BrandModelFilterContent
                    hasButton={true}
                    boxStyle={{
                        maxHeight: '300px',
                        overflowY: 'scroll',
                        padding: '10px'
                    }} />

                <Divider orientation='horizontal' sx={{ borderWidth: '1px', borderColor: 'black' }} />

                <BodyTypeFilterContent
                    hasButton={true}
                    boxStyle={{
                        maxHeight: '300px',
                        overflowY: 'scroll',
                        padding: '10px'
                    }}
                />

                <Divider orientation='horizontal' sx={{ borderWidth: '1px', borderColor: 'black' }} />

                <BudgetFilterContent
                    hasButton={true}
                    boxStyle={{
                        maxWidth: '400px',
                        padding: '20px'
                    }}
                />

                <Divider orientation='horizontal' sx={{ borderWidth: '1px', borderColor: 'black' }} />

                <ManufactureYearContent
                    hasButton={true}
                    boxStyle={{
                        maxWidth: '400px',
                        padding: '20px'
                    }} />

                <Divider orientation='horizontal' sx={{ borderWidth: '1px', borderColor: 'black' }} />

                <KmFilterContent
                    hasButton={true}
                    boxStyle={{
                        maxWidth: '400px',
                        padding: '20px'
                    }} />

            </Stack>

            <Stack direction="row" spacing={1} maxWidth={'100%'} sx={{ overflowX: 'auto' }}>
                {
                    brandModelObjectToArray(brandModelFilter).length ||
                        bodyTypeFilter.length || priceFilter.length ||
                        yearManufactureFilterFilter.length ||
                        kmFilter.length ?
                        <Chip
                            sx={{
                                backgroundColor: 'red',
                                color: 'white',
                                borderRadius: '10px',
                                "&:hover": {
                                    backgroundColor: 'red',
                                    color: 'white'
                                }
                            }}
                            label='Xóa tất cả'
                            variant="filled"
                            color='primary'
                            onClick={() => handleChipAllClose()}
                        /> : ''

                }
                {
                    brandModelObjectToArray(brandModelFilter).map((brandModel) =>
                        <Chip
                            sx={{ backgroundColor: '#173559', color: 'white', borderRadius: '10px' }}
                            label={brandModel}
                            variant="filled"
                            color='primary'
                            onDelete={() => handleChipOnClose('byBrandModel', brandModel)}
                        />
                    )
                }
                {
                    bodyTypeFilter.map((bodyType) =>
                        <Chip
                            sx={{ backgroundColor: '#173559', color: 'white', borderRadius: '10px' }}
                            label={bodyType}
                            variant="filled"
                            color='primary'
                            onDelete={() => handleChipOnClose('byBodyType', bodyType)} />
                    )
                }
                {priceFilter.length ?
                    <Chip
                        sx={{ backgroundColor: '#173559', color: 'white', borderRadius: '10px' }}
                        label={VNDFormatToWord2(priceFilter[0]) + ' - ' + VNDFormatToWord2(priceFilter[1]) + ' VND'}
                        variant="filled"
                        color='primary'
                        onDelete={() => handleChipOnClose('byPrice', '')} />

                    : ''

                }
                {
                    yearManufactureFilterFilter.length ?
                        <Chip
                            sx={{ backgroundColor: '#173559', color: 'white', borderRadius: '10px' }}
                            label={'năm ' + yearManufactureFilterFilter[0] + ' - ' + yearManufactureFilterFilter[1]}
                            variant="filled"
                            color='primary'
                            onDelete={() => handleChipOnClose('byYearManufacture', '')} /> : ''
                }
                {
                    kmFilter.length ?
                        <Chip
                            sx={{ backgroundColor: '#173559', color: 'white', borderRadius: '10px' }}
                            label={numberToLocaleString(kmFilter[0]) + ' - ' + numberToLocaleString(kmFilter[1]) + ' km'}
                            variant="filled"
                            color='primary'
                            onDelete={() => handleChipOnClose('byKm', '')} /> : ''
                }
            </Stack>
        </>
    )
}

export default Filters