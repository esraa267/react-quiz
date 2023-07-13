function FinishScreen({ maxPossible, points }) {
  const percentage = (points / maxPossible) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  else if (percentage >= 80 && percentage < 100) emoji = "🎉";
  else if (percentage >= 50 && percentage < 80) emoji = "😊";
  else if (percentage > 0 && percentage < 50) emoji = "🤔";
  else if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <p className="result">
      <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
      {maxPossible} ({Math.ceil(percentage)}% )
    </p>
  );
}

export default FinishScreen;
