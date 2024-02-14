export const Button = ({ onPush, children }) => (
  <button className="button" onClick={onPush}>
    {children}
  </button>
)
