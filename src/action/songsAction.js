export const checkLoading = () => {
  return (dispatch) => {
    dispatch({ type: 'Loading' });
  };
};
