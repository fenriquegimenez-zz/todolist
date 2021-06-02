import { isDay } from "utils/utils"

const Spinner = () => {
  return (
    <div
      className={`spinner-grow m-auto ${
        isDay ? "text-secondary" : "text-light"
      }`}
      role="status"
    >
      <span className="visually-hidden">Loading</span>
    </div>
  )
}

export default Spinner
