import * as React from "react"

interface IProps extends React.SVGProps<SVGSVGElement> {
  hovering: boolean
}

const StatusCardIcon = ({hovering, ...props}: IProps) => (
  <svg
    width={39}
    height={42}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.503 2.05c0-1.23-.6-2.05-1.5-2.05s-1.5.82-1.5 2.05v36.986h2.999V2.05Zm5 36.986h-5.001c-.027 1.184-.62 1.967-1.5 1.967s-1.472-.783-1.499-1.967h-5.001c-.027 1.184-.62 1.967-1.5 1.967s-1.472-.783-1.499-1.967H5.502c-.027 1.184-.62 1.967-1.5 1.967s-1.472-.783-1.499-1.967H1.95c-1.17 0-1.95.593-1.95 1.482C0 41.408.78 42 1.95 42h35.1c1.17 0 1.95-.593 1.95-1.482 0-.77-.584-1.317-1.5-1.45-.035 1.166-.626 1.935-1.498 1.935-.88 0-1.472-.783-1.499-1.967h-5.001c-.027 1.184-.62 1.967-1.5 1.967s-1.472-.783-1.499-1.967Zm0 0V22.552c0-1.23.6-2.05 1.5-2.05s1.5.82 1.5 2.05v16.401l-.001.083h-2.999Zm8 0V14.35c0-1.23.6-2.05 1.5-2.05s1.5.82 1.5 2.05v24.602l-.002.114a3.123 3.123 0 0 0-.451-.031h-2.547Zm-32 0v-8.283c0-1.23.6-2.05 1.5-2.05s1.5.82 1.5 2.05v8.2l-.001.083H2.503Zm8 0V14.35c0-1.23.6-2.05 1.5-2.05s1.5.82 1.5 2.05v24.602l-.001.083h-2.999Z"
      fill={hovering ? "#FFFFFF" : "#516CF5"}
    />
  </svg>
)

export default StatusCardIcon
