export default function OptionSelect({ inputType, optionType, id, values }) {
  let textContent = ''
  textContent =
    inputType === 'select' ? (
      <li>
        <label htmlFor={id}>
          {optionType}

          <select id={id}>
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

          <input type="number" id={id} placeholder="From 5 to 15" min={values[0]} max={values[1]} />
        </label>
      </li>
    )

  return textContent
}
