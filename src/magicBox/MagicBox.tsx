import { useState } from "react";
import './style.css'
import VanillaTilt from 'vanilla-tilt'

interface HTMLVanillaTiltElement extends HTMLDivElement {
	vanillaTilt?: VanillaTilt
}

const vanillaTiltOptions = {
	max: 25,
	speed: 400,
	glare: true,
	'max-glare': 0.5,
}

function Tilt({ children }: { children: React.ReactNode }) {
	return (
		<div
			className="tilt-root"
            ref={(tiltNode: HTMLVanillaTiltElement) => {
				if (!tiltNode) return
				VanillaTilt.init(tiltNode, vanillaTiltOptions)
				return () => tiltNode.vanillaTilt?.destroy()
			}}
		>
			<div className="tilt-child">{children}</div>
		</div>
	)
}

const MagicBox = () => {
  const [showTilt, setShowTilt] = useState(true);
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setShowTilt((s) => !s)}>Toggle Visibility</button>
      {showTilt ? (
        <Tilt>
          <div className="totally-centered">
            <button
              className="count-button"
              onClick={() => setCount((c) => c + 1)}
            >
              {count}
            </button>
          </div>
        </Tilt>
      ) : null}
    </div>
  );
};

export default MagicBox;
