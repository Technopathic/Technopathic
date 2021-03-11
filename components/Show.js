import { useState } from 'react'
import { FiChevronRight, FiChevronDown } from "react-icons/fi";

const Show = (props) => {
  const [showContent, setShowContent] = useState(props.default || false)

  return (
    <>
      <div className="flex flex-row items-center text-2x1 text-xl cursor-pointer select-none my-4" style={{ color: "#FB5192" }} onClick={() => setShowContent(!showContent)}>
        {showContent ? <FiChevronDown size={24} style={{ marginRight: '5px' }} /> : <FiChevronRight size={24} style={{ marginRight: '5px' }} />}
        <span>{showContent ? 'Hide' : 'Show'} {props.label}</span>
      </div>
      {showContent && <pre><code>{props.data[props.content]}</code></pre>}
    </>
  )
}

export default Show

