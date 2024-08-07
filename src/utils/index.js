import { Bounce, toast } from 'react-toastify'

export const isObjectEmpty = (objectName) => {
    return (
      objectName &&
      Object.keys(objectName).length === 0 &&
      objectName.constructor === Object
    );
  };

export const saveAccessToken = (access_token) => {
    localStorage.setItem("access_token", JSON.stringify(access_token))
}

export const getAccessToken = () => {
    return JSON.parse(localStorage.getItem("access_token"))
}

export const removeAccessToken = () => {
  localStorage.removeItem("access_token")
}

export const showToastError = ({ message }) => {
  toast.error(message, {
    position: 'bottom-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    closeButton: true,
    theme: 'light',
    transition: Bounce,
    className:"z-10"
  })
}

export const showToastSuccess = ({ message }) => {
  toast.success(message, {
    position: 'bottom-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    closeButton: true,
    theme: 'light',
    transition: Bounce,
  })
}

export const yearRange = [
  1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
  2018, 2019, 2020, 2021, 2022, 2023, 2024,
]
