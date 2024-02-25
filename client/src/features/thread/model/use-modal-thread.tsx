import { useState } from "react";

export function useModalThread() {
  const [isDragging, setIsDragging] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [isDraggingOrClicking, setIsDraggingOrClicking] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const onMouseDown = (e: any) => {
    e.preventDefault();
    setIsDragging(true);
    setIsDraggingOrClicking(false);
    setStartPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const onWheel = (e: any) => {
    e.preventDefault();
    setScale((prevScale) => {
      const newScale = prevScale + e.deltaY * -0.001;
      return Math.max(0.1, Math.min(3, newScale));
    });
  };

  const onMouseMove = (e: any) => {
    if (isDragging) {
      setIsDraggingOrClicking(true);
      const dx = e.clientX - startPosition.x;
      const dy = e.clientY - startPosition.y;
      setModalPosition({
        x: modalPosition.x + dx,
        y: modalPosition.y + dy,
      });
      setStartPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
  };

  const onMouseUp = () => {
    setIsDragging(false);
    if (!setIsDraggingOrClicking) {
      setModalImage("");
    }
  };

  const handleClick = () => {
    setIsDragging(false);
    if (!isDraggingOrClicking) {
      setModalImage("");
    }
  };

  return {
    modalImage,
    setModalImage,
    scale,
    onMouseDown,
    onWheel,
    handleClick,
    onMouseUp,
    onMouseMove,
    modalPosition,
  };
}
