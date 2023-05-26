import { getTrackBackground, Range } from "react-range";

interface CustomRangeProps {
  value: number;
  step: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

function CustomRange({ value, step, min, max, onChange }: CustomRangeProps) {
  return (
    <Range
      values={[value]}
      step={step}
      min={min}
      max={max}
      onChange={(values) => onChange(values[0])}
      renderTrack={({ props, children }) => (
        <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            className="w-full h-7 flex group"
            style={props.style}
        >
            <div
                ref={props.ref}
                className="h-1 w-full rounded-md self-center"
                style={{
                    ...props.style,
                    background: getTrackBackground({
                      values: [value],
                      colors: ["#1db954", "#535353"],
                      min,
                      max,
                    }),
                    borderRadius: "4px", // Kenar yuvarlatması
                    transition: "width 0.3s ease", // Yeşil alanın dolma hızı ve geçişi
                  }}
                  
            >
                {children}
            </div>
        </div>
    )}
    renderThumb={({ props, isDragged }) => (
        <div
            {...props}
            className={`h-3 w-3 rounded-full bg-white ${!isDragged ? 'opacity-0' : ''} group-hover:opacity-100`}
            style={{
                ...props.style,
                boxShadow: "0 2px 4px 0 rgb(0 0 0 / 50%)",
                transform: isDragged ? "scale(1.2)" : "scale(1)", 
              }}
        />
    )}
    />
  );
}

export default CustomRange;
