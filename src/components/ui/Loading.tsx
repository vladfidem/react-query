import { FC } from 'react'

export const Loading: FC = () => (
  <div className="flex justify-center items-center py-4">
        <span className="text-gray-500 text-lg">
          Loading
          <span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </span>
  </div>
)
