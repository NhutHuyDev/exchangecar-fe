import { useState } from "react";

import './AutoComplete.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faXmark } from "@fortawesome/free-solid-svg-icons";

const createOptions = (keyArray, valueArray) => keyArray.reduce((options, value, index) => {
    options.push({ view: keyArray[index], value: valueArray[index] })
    return options;
}, []);

const AutoComplete = ({ disabled = false, placeholder, viewOptions = [], valueOptions = [], name, value, setValue, onChange }) => {
    const [show, setShow] = useState(false);

    const options = createOptions(viewOptions, valueOptions)

    const clearValue = () => {
        setValue(name, '')
        setShow(false)
    }

    const ItemList = (() => {
        if (!show) return [];
        return options
            .filter((option) => option.view.toLowerCase().includes(value.toLowerCase()))
            .map((option) => (
                <button
                    className="hover:bg-grey-color-200"
                    onClick={() => {
                        setValue(name, option.value);
                        setShow(false);
                    }}
                    key={option}
                >
                    {option.view}
                </button>
            ));
    })();

    return (
        <div className="auto-complete">
            <div>
                <div className="rounded-3xl p-4 border-grey-color-200 border-2 flex justify-center items-center space-x-2">
                    <input
                        disabled={disabled}
                        className="w-full"
                        onFocus={() => setShow(true)}
                        onBlur={() =>
                            setTimeout(() => {
                                setShow(false);
                            }, 150)
                        }
                        placeholder={placeholder}
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
                    {show && value !== '' && <FontAwesomeIcon onClick={clearValue} icon={faXmark} className="text-primary-color flex items-center pe-2" />}
                    <FontAwesomeIcon icon={faCaretDown} className="text-primary-color flex items-center pe-2" />
                </div>

                <div className="list bg-grey-color">{ItemList}</div>
            </div>
        </div>
    );
}

export default AutoComplete