export const averageScore = (reviews) => {
  if (reviews.length === 0) return 0;
  const totalScore = reviews.reduce((sum, review) => {
    return sum + review.reviewer_rating;
  }, 0);
  return totalScore / reviews.length;
};
