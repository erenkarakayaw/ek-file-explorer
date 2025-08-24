import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

export default function BottomMenuZoomSection({ zoomMode }) {
  return (
    <>
      <RangeSlider
        id="rangeslider"
        className="fixed w-32 h-2 active:animate-pulse bottom-3 right-3 bg-blue-300 border-neutral-400"
        defaultValue={[0, 50]}
        min={0}
        max={2}
        value={[0,zoomMode]}
        thumbsDisabled={[true, false]}
        rangeSlideDisabled={true}
      />
    </>
  );
}
