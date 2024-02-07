import { useRef } from 'react'

export default function OptionSelect({ inputType, optionType, id, values, onChange }) {
  const inputRef = useRef(null)
  let textContent = ''

  function onFocusOut() {
    if (inputRef.current.value < 5) {
      inputRef.current.focus()
      inputRef.current.value = null
      inputRef.current.placeholder = 'Неверное значение'
    } else if (inputRef.current.value > 15) {
      inputRef.current.focus()
      inputRef.current.value = null
      inputRef.current.placeholder = 'Неверное значение'
    }
  }

  textContent =
    inputType === 'select' ? (
      <li>
        <label htmlFor={id}>
          {optionType}

          <select id={id} onChange={onChange}>
            {values.map((value) => {
              return (
                <option key={value} value={value}>
                  {value}
                </option>
              )
            })}
          </select>
        </label>
      </li>
    ) : (
      <li>
        <label htmlFor={id}>
          {optionType}

          <input
            type="number"
            ref={inputRef}
            id={id}
            onChange={onChange}
            onBlur={onFocusOut}
            defaultValue={5}
            placeholder="From 5 to 15"
            min={values[0]}
            max={values[1]}
          />
        </label>
      </li>
    )

  return textContent
}
