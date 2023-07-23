import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const ProgressCircle = ({
  progress,
  size,
  strokeWidth,
  circleColor,
  progressColor,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const radius = (size - strokeWidth) / 2;
    const centerX = size / 2;
    const centerY = size / 2;
    const startAngle = -Math.PI / 2;
    const endAngle = (progress / 100) * (2 * Math.PI) + startAngle;

    context.clearRect(0, 0, size, size);

    // Draw the background circle
    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    context.strokeStyle = circleColor;
    context.lineWidth = strokeWidth;
    context.stroke();

    // Draw the progress arc
    context.beginPath();
    context.arc(centerX, centerY, radius, startAngle, endAngle);
    context.strokeStyle = progressColor;
    context.lineWidth = strokeWidth;
    context.stroke();

    // Display progress value
    const fontSize = size * 0.2; // Adjust font size as needed
    context.font = `${fontSize}px Arial`;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = progressColor;
    context.fillText(`${progress}%`, centerX, centerY);
  }, [progress, size, strokeWidth, circleColor, progressColor]);

  return <canvas ref={canvasRef} width={size} height={size} />;
};

ProgressCircle.propTypes = {
  progress: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number,
  circleColor: PropTypes.string,
  progressColor: PropTypes.string,
};

ProgressCircle.defaultProps = {
  strokeWidth: 10,
  circleColor: "#e0e0e0",
  progressColor: "#00FF00",
};

export default ProgressCircle;
