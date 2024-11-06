import { FC } from 'react'

interface Props {
  error: Error
}

export const Error: FC<Props> = ({ error }) => (
  <div className="flex justify-center items-center py-4">
        <span className="text-red-500 bg-red-100 p-3 rounded-md text-lg">
          Error: {error.message}
        </span>
  </div>
)
