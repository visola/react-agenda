function Loader({ type = 'primary' }) {
  let colors = { borderColor: 'var(--bs-blue)', borderTopColor: 'var(--highligh-blue)' };
  if (type === 'white') {
    colors = { borderColor: 'rgba(255, 237, 204, 0.2)', borderTopColor: 'white' };
  }

  return <span className="loader" style={colors}></span>;
}

export default Loader;
