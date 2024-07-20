import getYearRange from "utils/getYearRange"

const NOW = new Date().getFullYear()

// Gear Box
const MANUAL_GEARBOX = 'Số Sàng'
const AUTOMATIC_GEARBOX = 'Số Tự Động'

// Body Type
const SEDAN = 'Sedan'
const SUV = 'SUV'
const HATCHBACK = 'Hackback'
const CONVERTIBLE = 'Convertible'
const MPV = 'MPV'
const TRUCK = 'Truck'

// Origin
const KNOCKED_DOWN = 'Lắp Ráp Trong Nước'
const BUILT_UP = 'Nhập Khẩu'

export {
    NOW, MANUAL_GEARBOX, AUTOMATIC_GEARBOX, KNOCKED_DOWN, BUILT_UP
}

export default {
    'Honda': {
        'CRV': {
            'bodyType': SUV,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        },
        'Civic': {
            'bodyType': SEDAN,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        },
        'Jazz': {
            'bodyType': HATCHBACK,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        }
    },

    'Toyota': {
        'Camry': {
            'bodyType': SEDAN,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        },
        'Fortuner': {
            'bodyType': SUV,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        },
        'Land Cruiser': {
            'bodyType': CONVERTIBLE,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        },
        'Vios': {
            'bodyType': SEDAN,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        },
        'Innova': {
            'bodyType': MPV,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        }
    },

    'Ford': {
        'Everest': {
            'bodyType': SUV,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        },
        'Ranger': {
            'bodyType': TRUCK,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        },
        'Ecosport': {
            'bodyType': SUV,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        }
    },

    'Mazda': {
        '3': {
            'bodyType': SEDAN,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        },
        '6': {
            'bodyType': SEDAN,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        },
        'CX8': {
            'bodyType': SUV,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        },
        'CX5': {
            'bodyType': SUV,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        }
    },

    'Mercedes': {
        'C class': {
            'bodyType': SEDAN,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        },
        'S class': {
            'bodyType': SEDAN,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        },
        'E class': {
            'bodyType': SEDAN,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        },
        'GL class': {
            'bodyType': SUV,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        }
    },

    'Nissan': {
        'Navara': {
            'bodyType': TRUCK,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        }
    },

    'Mitsubishi': {
        'Outlander': {
            'bodyType': SUV,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        },
        'Triton': {
            'bodyType': TRUCK,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        },
        'Xpander': {
            'bodyType': MPV,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        }
    },

    'Kia': {
        'Morning': {
            'bodyType': HATCHBACK,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        },
        'Soluto': {
            'bodyType': SEDAN,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        },
        'K3': {
            'bodyType': SEDAN,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        },
        'Sorento': {
            'bodyType': SUV,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        },
        'Carnival': {
            'bodyType': MPV,
            'gearBox': [MANUAL_GEARBOX, AUTOMATIC_GEARBOX],
            'manufactureYear': getYearRange(2018, NOW),
            'origin': [KNOCKED_DOWN, BUILT_UP]
        }
    },
}